import { format } from 'date-fns';
import connection from './connections';


const getAllModelsAtivos = async (type: string, graph: string) => {
    return new Promise((resolve, reject) => {
        let values = '';
        // if (profiles != null && profiles != undefined && profiles != '') {
        //     values = `AND credentials_id IN (${profiles})`; // Converte o array em uma string separada por vírgulas
        //   }
        //   else
        //   {
        //     values = '';
        //   }

        connection.query(`SELECT ativos.ativos_id as id, ativos.amount, lista_ativos.ativo_codigo, SUM(ativos.price * cotacao.valor) AS price FROM ativos, lista_ativos, cotacao WHERE cotacao.cotacao_id = lista_ativos.ativo_moeda AND ativos.ticker = lista_ativos.lista_ativos_id AND ativos.type LIKE CONCAT('%', ?, '%') GROUP BY ativos.ativos_id, ativos.amount, lista_ativos.ativo_codigo, ativos.type ${values}`, [type], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const getGroupModelsAtivos = async () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT 
        CASE ativos.type
            WHEN 1 THEN 'Ações'
            WHEN 2 THEN 'FII'
            WHEN 3 THEN 'FIAgro'
            WHEN 4 THEN 'ETF Nacionais'
            WHEN 5 THEN 'ETF Internacionais'
            WHEN 6 THEN 'Criptomoedas'
            WHEN 7 THEN 'Renda Fixa'
            WHEN 8 THEN 'Caixa'
            ELSE 'Outro'
        END AS type_description,
        SUM(ativos.amount * ativos.price * cotacao.valor) AS total_value
    FROM ativos, cotacao, lista_ativos
    WHERE ativos.ticker=lista_ativos.lista_ativos_id AND lista_ativos.ativo_moeda=cotacao.cotacao_id
    GROUP BY ativos.type;`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const modelGetCategorias = async () => {

    return new Promise((resolve, reject) => {
        connection.query(`SELECT categoria_id as value, categoria_nome as label FROM categorias`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelGetPercentualCategorias = async (soma: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT categorias.categoria_id as value, categorias.categoria_prefixo, categorias.categoria_nome as label, COALESCE(SUM(ativos.amount * lista_ativos.ativo_valor * cotacao.valor), 0) as total, COUNT(ativos.type) as quantidade_ativos FROM categorias LEFT JOIN lista_ativos ON categorias.categoria_id = lista_ativos.ativo_categoria LEFT JOIN ativos ON lista_ativos.lista_ativos_id = ativos.ticker LEFT JOIN cotacao ON cotacao.cotacao_id = lista_ativos.ativo_moeda GROUP BY categorias.categoria_id, categorias.categoria_nome, categorias.categoria_prefixo;`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelGetBrokers = async () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT broker_id as value, broker_nome as label FROM brokers`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelInsertTransacao = async (categoria: string, corretora: string, ativo: string, negociacao: any, quantidade: string, preco: any, corretagem: any, emolumentos: any, impostos: any, userid: any, tipo: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT transacoes (transacao_id, categoria, ativo, tipo_ordem, broker, negociacao, quantidade, preco, corretagem, emolumentos,impostos,origem)
                                    VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`, [categoria, ativo, tipo, corretora, negociacao, quantidade, preco, corretagem, emolumentos, impostos], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelGetTransacoes = async () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT categorias.categoria_prefixo, transacoes.*, brokers.broker_nome, tipo_ordem.tipo_ordem_nome, SUM(quantidade * preco) as total, transacao_id as id, lista_ativos.ativo_codigo, lista_ativos.ativo_moeda FROM transacoes, categorias, brokers, tipo_ordem, lista_ativos WHERE lista_ativos.lista_ativos_id=transacoes.ativo AND tipo_ordem.tipo_ordem_id=transacoes.tipo_ordem AND categorias.categoria_id = transacoes.categoria AND transacoes.broker = brokers.broker_id GROUP BY transacoes.transacao_id ORDER BY transacoes.negociacao DESC, transacoes.transacao_id DESC`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelGetListaAtivos = async (id: string, b3: string) => {
    let values = '';
    if (b3 == 's') {
        values = `AND ativo_categoria IN (1, 2, 3, 4, 6) AND ativo_codigo!='ADA' `; // Converte o array em uma string separada por vírgulas
    }
    else if (b3 == 'i') {
        values = `AND ativo_categoria IN (5)`; // Converte o array em uma string separada por vírgulas
    }
    else if (b3 == 'c') {
        values = `AND ativo_categoria IN (6)  AND ativo_codigo='ADA' `; // Converte o array em uma string separada por vírgulas
    }
    else {
        values = '';
    }
    return new Promise((resolve, reject) => {
        connection.query(`SELECT lista_ativos_id as value, lista_ativos_id as id, ativo_valor, lista_ativos.ativo_codigo, ativo_categoria, CONCAT (ativo_codigo, ' - ', ativo_nome) as label FROM lista_ativos WHERE ativo_categoria LIKE CONCAT('%', ?, '%') ${values}`, [id], (err, results) => {
        //connection.query(`SELECT lista_ativos_id as value, lista_ativos_id as id, ativo_valor, lista_ativos.ativo_codigo, ativo_categoria, CONCAT (ativo_codigo, ' - ', ativo_nome) as label FROM lista_ativos WHERE ativo_categoria LIKE CONCAT('%', ?, '%') AND last_update IS NULL ${values} ORDER BY lista_ativos_id LIMIT 5 `, [id], (err, results) => {
                if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelGetConfigs = async (id: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM configs`, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelUpdateConfigs = async (hide_values: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE configs SET hideValues= ?`, [hide_values], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelDeleteTransacao = async (id: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM transacoes WHERE transacao_id = ?`, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const modelGetTransacaoId = async (id: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT categorias.categoria_prefixo, transacoes.*, brokers.broker_nome, tipo_ordem.tipo_ordem_nome, SUM(quantidade * preco) as total, transacao_id as id, lista_ativos.ativo_codigo, lista_ativos.ativo_moeda FROM transacoes, categorias, brokers, tipo_ordem, lista_ativos WHERE lista_ativos.lista_ativos_id=transacoes.ativo AND tipo_ordem.tipo_ordem_id=transacoes.tipo_ordem AND categorias.categoria_id = transacoes.categoria AND transacoes.broker = brokers.broker_id and transacoes.transacao_id = ? GROUP BY transacoes.transacao_id`, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelUpdateTransacao = async (categoria: string, corretora: string, ativo: string, negociacao: any, quantidade: string, preco: any, corretagem: any, emolumentos: any, impostos: any, id: any, tipo: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE transacoes
        SET
            categoria = ?,
            ativo = ?,
            tipo_ordem = ?,
            broker = ?,
            negociacao = ?,
            quantidade = ?,
            preco = ?,
            corretagem = ?,
            emolumentos = ?,
            impostos = ?,
            origem = 1
        WHERE
            transacao_id = ?;`, [categoria, ativo, tipo, corretora, negociacao, quantidade, preco, corretagem, emolumentos, impostos, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsTotalAtivos = async (type: string) => {
    if (type === '0') {
        type = '';
    }
    return new Promise(async (resolve, reject) => {
        let values = '';
        const results = await Promise.all([
            new Promise((resolve, reject) => {
                connection.query(`SELECT ativos.*, ativos.ativos_id as id, lista_ativos.*, setores.nome as setor_nome, subsetores.nome as subsetor_nome, segmentos.nome as segmentos_nome FROM ativos, lista_ativos, cotacao, setores, subsetores, segmentos WHERE setores.setores_id=lista_ativos.setor AND subsetores.subsetores_id=lista_ativos.subsetor AND segmentos.segmentos_id=lista_ativos.segmento AND lista_ativos.ativo_moeda=cotacao.cotacao_id AND ativos.ticker=lista_ativos.lista_ativos_id AND ativos.type LIKE CONCAT('%', ?, '%') ${values}`, [type], (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                });
            }),
            new Promise((resolve, reject) => {
                connection.query(`SELECT lista_ativos.*, ativos.ativos_id as id, setores.nome as setor_nome, subsetores.nome as subsetor_nome, segmentos.nome as segmento_nome, ativos.amount, ativos.*, categorias.categoria_prefixo, brokers.broker_nome, SUM(lista_ativos.ativo_valor * ativos.amount * cotacao.valor) AS total, SUM(ativos.preco_medio * ativos.amount * cotacao.valor) AS valor_custo,(SELECT historico_ativos_valor 
                    FROM historico_ativos
                    WHERE historico_ativos.lista_ativos_id = lista_ativos.lista_ativos_id                
               ORDER BY historico_ativos.historico_ativos_id DESC LIMIT 1) as historico_ativos_valor FROM lista_ativos, setores, subsetores, segmentos, ativos, transacoes, categorias, cotacao, brokers WHERE setores.setores_id=lista_ativos.setor AND subsetores.subsetores_id=lista_ativos.subsetor AND segmentos.segmentos_id=lista_ativos.segmento AND lista_ativos.ativo_moeda = cotacao.cotacao_id AND ativos.ticker = lista_ativos.lista_ativos_id AND categorias.categoria_id = ativos.type AND transacoes.ativo = ativos.ticker AND brokers.broker_id = transacoes.broker AND ativos.type LIKE CONCAT('%', ?, '%') GROUP BY lista_ativos.lista_ativos_id, ativos.ativos_id, categorias.categoria_prefixo, brokers.broker_nome ORDER BY lista_ativos.lista_ativos_id ASC;`, [type], (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                });
            })
        ]);

        const total = results[1];

        const valoresTotais = total.map(row => {
            const totalMultiplicado = row.total;
            return parseFloat(totalMultiplicado);
        });

        const totalSoma = valoresTotais.reduce((acc, valor) => acc + valor, 0);

        const valor_custo = results[1];

        let valoresCustoTotais = valor_custo.map(row => {
            const totalCustoMultiplicado = row.valor_custo;
            return parseFloat(totalCustoMultiplicado);
        });

        valoresCustoTotais = valoresCustoTotais.reduce((acc, valor_custo) => acc + valor_custo, 0);

        const resultWithTotalAtivos = {
            total_ativos: results[0].length,
            total_valor: totalSoma,
            total_custo: valoresCustoTotais,
            data: results[1]
        };

        resolve(resultWithTotalAtivos);
    });
};

const ModelsValorTotalPatrimonio = async (type: string) => {
    return new Promise(async (resolve, reject) => {
        let values = '';
        const results = await Promise.all([
            new Promise((resolve, reject) => {
                connection.query(`SELECT ativos.*, ativos.ativos_id as id, lista_ativos.*, SUM(lista_ativos.ativo_valor*ativos.amount*cotacao.valor) AS total FROM cotacao, ativos JOIN lista_ativos ON ativos.ticker = lista_ativos.lista_ativos_id WHERE lista_ativos.ativo_moeda=cotacao.cotacao_id AND ativos.type LIKE CONCAT('%', ?, '%') GROUP BY ativos.type, ativos.ativos_id ORDER BY ativos.type DESC;`, [type], (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                });
            })
        ]);

        const total = results[0];

        const valoresTotais = total.map(row => {
            const totalMultiplicado = row.total;
            return parseFloat(totalMultiplicado);
        });
        const totalSoma = valoresTotais.reduce((acc, valor) => acc + valor, 0);

        const resultWithTotalAtivos = {
            total_valor: totalSoma
        };

        resolve(resultWithTotalAtivos);
    });
};

const ModelsAtivoMoeda = async (id: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT ativo_moeda FROM lista_ativos WHERE lista_ativos_id = ?`, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsDadosB3 = async (id: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT ativo_moeda FROM lista_ativos WHERE lista_ativos_id = ?`, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelUpdateDadosB3 = async (ticker: string, valor: number, logo: any) => {
    return new Promise((resolve, reject) => {
        connection.beginTransaction((err) => {
            if (err) {
                reject(err);
                return;
            }

            // Primeiro UPDATE
            connection.query(
                'UPDATE lista_ativos SET ativo_valor = ?, logo = ? WHERE ativo_codigo = ?',
                [valor, logo, ticker],
                (err, results) => {
                    if (err) {
                        connection.rollback(() => {
                            reject(err);
                        });
                    } else {
                        // Segundo UPDATE
                        connection.query(
                            'UPDATE lista_ativos JOIN ativos ON lista_ativos.lista_ativos_id = ativos.ticker SET ativos.price = ? WHERE lista_ativos.ativo_codigo = ?',
                            [valor, ticker],
                            (err, results) => {
                                if (err) {
                                    connection.rollback(() => {
                                        reject(err);
                                    });
                                } else {
                                    connection.commit((err) => {
                                        if (err) {
                                            connection.rollback(() => {
                                                reject(err);
                                            });
                                        } else {
                                            resolve(results);
                                        }
                                    });
                                }
                            }
                        );
                    }
                }
            );
        });
    });
};

const modelAdicionarHistorico = async (lista_ativo_id: number, valor: number) => {
    return new Promise((resolve, reject) => {
        let dt = new Date();
        dt = format(dt, 'yyyy-MM-dd');
        connection.query(`INSERT historico_ativos (lista_ativos_id, historico_ativos_data, historico_ativos_valor) VALUES (?, ?, ?)`, [lista_ativo_id, dt, valor], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelAdicionarHistoricoCliente = async (lista_ativo_id: number, quantidade: number, ticker: number) => {
    return new Promise((resolve, reject) => {
        let dt = new Date();
        dt = format(dt, 'yyyy-MM-dd');
        connection.query(`INSERT historico_clientes (historico_clientes_ativo_id, historico_ativo_ticker, historico_clientes_quantidade, historico_clientes_data) VALUES (?, ?, ?, ?)`, [lista_ativo_id, ticker, quantidade, dt], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelGetListaAtivosCliente = async (id: string, b3: string) => {
    let values = '';
    if (b3 == 's') {
        values = `AND ativo_categoria IN (1, 2, 3, 4)`; // Converte o array em uma string separada por vírgulas
    }
    else {
        values = '';
    }
    return new Promise((resolve, reject) => {
        connection.query(`SELECT ativos_id as id, ticker, amount FROM ativos WHERE type IN (1, 2, 3, 4)${values}`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelConfigPercentual = async (porcentagemAcao: number, porcentagemFII: number, porcentagemFIAgro: number, porcentagemETFN: number, porcentagemETFI: number, porcentagemCriptomoedas: number, porcentagemFixa: number, porcentagemCaixa: number, limit: number) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE configs SET percentual_acao=?, percentual_fii=?, percentual_fiagro=?, percentual_etfn=?, percentual_etfi=?, percentual_criptomoeda=?, percentual_fixa=?, percentual_caixa=?, porcentagem_limite=? WHERE configs_id=1`, [porcentagemAcao, porcentagemFII, porcentagemFIAgro, porcentagemETFN, porcentagemETFI, porcentagemCriptomoedas, porcentagemFixa, porcentagemCaixa, limit], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsGetRelatorio = async (period: number, months: Array<any>, mode: any) => {
    return new Promise((resolve, reject) => {
        let var1 = '';
        let var2 = '';
        if (mode == 1) {
            var1 = ' categorias.categoria_nome, ';
        }
        else {
            var2 = " 'Ações' AS categoria_nome, ";
        }
        connection.query(`SELECT 
        ${var1} ${var2} 
        historico_clientes.historico_clientes_data,
        SUM(historico_clientes.historico_clientes_quantidade * historico_ativos.historico_ativos_valor) AS total_valor
    FROM 
        historico_clientes, historico_ativos, lista_ativos, categorias
    WHERE    
        historico_ativos.lista_ativos_id=historico_clientes.historico_ativo_ticker AND 
        historico_ativos.lista_ativos_id = lista_ativos.lista_ativos_id AND
        categorias.categoria_id = lista_ativos.ativo_categoria AND
        historico_ativos.historico_ativos_data=historico_clientes.historico_clientes_data AND 
        historico_clientes.historico_clientes_data IN (${months})
    GROUP BY 
        ${var1} historico_clientes.historico_clientes_data
    ORDER BY historico_clientes.historico_clientes_data ASC`, [months], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsCurrencyUpdate = async (currency: string, valor: number) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE cotacao SET valor=? WHERE currency=?`, [valor, currency], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsInsertTreasure = async (codigo: any, nome: any, ativo: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT tesouro (codigo_tesouro, nome, ativo, last_update)VALUES(? ,? , ?, '1111-11-11')`, [codigo, nome, ativo], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsInsertHistoricoTreasure = async (codigo: any, dataTime: any, valor: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT IGNORE tesouro_valores ( tesouro_codigo , tesouro_data, tesouro_valor) VALUES (? ,? ,?)`, [codigo, dataTime, valor], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsInsertGetTreasure = async (codigo: any, periodo: any) => {
    let values: any = '';
    if (periodo != 0) {
        values = ` AND tesouro_data >= DATE_SUB(CURRENT_DATE, INTERVAL ${periodo} YEAR) AND tesouro_data <= CURRENT_DATE`; // Converte o array em uma string separada por vírgulas
    }

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM tesouro_valores WHERE tesouro_codigo=? ${values} ORDER BY tesouro_data ASC`, [codigo], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsInsertGetTreasureNames = async () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM tesouro ORDER BY nome ASC`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsUpdateTreasure = async (codigo: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE tesouro SET last_update=NOW() WHERE codigo_tesouro=?`, [codigo], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsGetListaIndicesB3 = async () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM indices_b3 ORDER BY nome ASC`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsGetRankingIndicesB3 = async (indice: number) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT
        lista_ativos.ativo_nome,
        lista_ativos.logo,
        indices_b3.indices_b3_id,
        lista_ativos.ativo_valor,
        ativos_indice_b3.ativo_codigo_b3,
        (SELECT ((lista_ativos.ativo_valor - historico_ativos.historico_ativos_valor) / historico_ativos.historico_ativos_valor) * 100 AS diferenca_percentual FROM historico_ativos
            WHERE historico_ativos.lista_ativos_id = lista_ativos.lista_ativos_id  GROUP BY historico_ativos.lista_ativos_id ORDER BY historico_ativos.historico_ativos_data DESC LIMIT 1) AS percentual,
        (SELECT historico_ativos.historico_ativos_valor
            FROM historico_ativos
            WHERE historico_ativos.lista_ativos_id = lista_ativos.lista_ativos_id  GROUP BY historico_ativos.lista_ativos_id ORDER BY historico_ativos.historico_ativos_data DESC LIMIT 1) as historico_ativos_valor
    FROM
        indices_b3,
        ativos_indice_b3,
        lista_ativos
    WHERE
        indices_b3.indices_b3_id = ativos_indice_b3.indice_b3_id
        AND lista_ativos.ativo_codigo = ativos_indice_b3.ativo_codigo_b3
        AND ativos_indice_b3.indice_b3_id = ?
        GROUP BY lista_ativos.ativo_codigo
    ORDER BY
        percentual ASC;`, [indice], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsUpdateEstatistica = async (codigo: any, min: any, max: any, atual: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE estatisticas SET minima=?, maxima=?, atual=? WHERE codigo=?`, [min, max, atual, codigo], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsGetEstatisticas = async (codigo: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM estatisticas WHERE codigo=?`, [codigo], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsSummaryProfile = async (ativo: string, address1: string, address2: string, city: string, state: string, zip: string, country: string, phone: string, website: string, industry: string, industryKey: string, industryDisp: string, sector: string, sectorKey: string, sectorDisp: string, longBusinessSummary: string, fullTimeEmployees: number, companyOfficers: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT IGNORE INTO summaryprofile (
            lista_ativos_id, 
            address1, 
            address2, 
            city, 
            state, 
            zip, 
            country, 
            phone, 
            website, 
            industry, 
            industryKey, 
            industryDisp, 
            sector, 
            sectorKey, 
            sectorDisp, 
            longBusinessSummary, 
            fullTimeEmployees, 
            companyOfficers
        )
        VALUES (
            (SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo = ?),
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        )`, [ativo, address1, address2, city, state, zip, country, phone, website, industry, industryKey, industryDisp, sector, sectorKey, sectorDisp, longBusinessSummary, fullTimeEmployees, companyOfficers], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsInsertSetores = async (companyName: string, ticker: string, sectorName: string, subSectorName: string, segmentName: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO db_setores (ativo_codigo, empresa, setor, subsetor, segmento)
        VALUES (?, ?, ?, ?, ?)`, [ticker, companyName, sectorName, subSectorName, segmentName], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsUpdateFii = async (sectorName: string, subSectorName: string, segmentName: string, ticker: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE lista_ativos SET setor=(SELECT setores_id FROM setores WHERE nome='${sectorName}'), subsetor=(SELECT subsetores_id FROM subsetores WHERE nome='${subSectorName}'), segmento=(SELECT segmentos_id FROM segmentos WHERE nome='${segmentName}') WHERE ativo_codigo='${ticker}'`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsInsertBalanceSheet = async (ticker: string, endDate: string, cash: number, shortTermInvestments: number, netReceivables: number, inventory: number, otherCurrentAssets: number, totalCurrentAssets: number, longTermInvestments: number, propertyPlantEquipment: number, goodWill: number, intangibleAssets: number, otherAssets: number, deferredLongTermAssetCharges: number, totalAssets: number, accountsPayable: number, shortLongTermDebt: number, otherCurrentLiab: number, longTermDebt: number, otherLiab: number, minorityInterest: number, totalCurrentLiabilities: number, totalLiab: number, commonStock: number, retainedEarnings: number, treasuryStock: number, otherStockholderEquity: number, totalStockholderEquity: number, netTangibleAssets: number) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT IGNORE INTO balancesheet (lista_ativos_id, endDate, cash, shortTermInvestments, netReceivables, inventory, otherCurrentAssets, totalCurrentAssets, longTermInvestments, propertyPlantEquipment, goodWill, intangibleAssets, otherAssets, deferredLongTermAssetCharges, totalAssets, accountsPayable, shortLongTermDebt, otherCurrentLiab, longTermDebt, otherLiab, minorityInterest, totalCurrentLiabilities, totalLiab, commonStock, retainedEarnings, treasuryStock, otherStockholderEquity, totalStockholderEquity, netTangibleAssets) VALUES ((SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${ticker}'), '${endDate}', '${cash}', '${shortTermInvestments}', '${netReceivables}', '${inventory}', '${otherCurrentAssets}', '${totalCurrentAssets}', '${longTermInvestments}', '${propertyPlantEquipment}', '${goodWill}', '${intangibleAssets}', '${otherAssets}', '${deferredLongTermAssetCharges}', '${totalAssets}', '${accountsPayable}', '${shortLongTermDebt}', '${otherCurrentLiab}', '${longTermDebt}', '${otherLiab}', '${minorityInterest}', '${totalCurrentLiabilities}', '${totalLiab}', '${commonStock}', '${retainedEarnings}', '${treasuryStock}', '${otherStockholderEquity}', '${totalStockholderEquity}', '${netTangibleAssets}')`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsInsertBalanceSheetHistory = async (ticker: string, endDate: string, cash: number, shortTermInvestments: number, netReceivables: number, inventory: number, otherCurrentAssets: number, totalCurrentAssets: number, longTermInvestments: number, propertyPlantEquipment: number, goodWill: number, intangibleAssets: number, otherAssets: number, deferredLongTermAssetCharges: number, totalAssets: number, accountsPayable: number, shortLongTermDebt: number, otherCurrentLiab: number, longTermDebt: number, otherLiab: number, minorityInterest: number, totalCurrentLiabilities: number, totalLiab: number, commonStock: number, retainedEarnings: number, treasuryStock: number, otherStockholderEquity: number, totalStockholderEquity: number, netTangibleAssets: number) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT IGNORE INTO balancesheethistory (lista_ativos_id, endDate, cash, shortTermInvestments, netReceivables, inventory, otherCurrentAssets, totalCurrentAssets, longTermInvestments, propertyPlantEquipment, goodWill, intangibleAssets, otherAssets, deferredLongTermAssetCharges, totalAssets, accountsPayable, shortLongTermDebt, otherCurrentLiab, longTermDebt, otherLiab, minorityInterest, totalCurrentLiabilities, totalLiab, commonStock, retainedEarnings, treasuryStock, otherStockholderEquity, totalStockholderEquity, netTangibleAssets) VALUES ((SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${ticker}'), '${endDate}', '${cash}', '${shortTermInvestments}', '${netReceivables}', '${inventory}', '${otherCurrentAssets}', '${totalCurrentAssets}', '${longTermInvestments}', '${propertyPlantEquipment}', '${goodWill}', '${intangibleAssets}', '${otherAssets}', '${deferredLongTermAssetCharges}', '${totalAssets}', '${accountsPayable}', '${shortLongTermDebt}', '${otherCurrentLiab}', '${longTermDebt}', '${otherLiab}', '${minorityInterest}', '${totalCurrentLiabilities}', '${totalLiab}', '${commonStock}', '${retainedEarnings}', '${treasuryStock}', '${otherStockholderEquity}', '${totalStockholderEquity}', '${netTangibleAssets}')`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsInsertDefaultKeyStatistics = async (ticker: string, priceHint: number, enterpriseValue: number, forwardPE: number, profitMargins: number, floatShares: number, sharesOutstanding: number, heldPercentInsiders: number, heldPercentInstitutions: number, beta: number, impliedSharesOutstanding: number, category: number, bookValue: number, priceToBook: number, fundFamily: number, legalType: number, lastFiscalYearEnd: string, nextFiscalYearEnd: string, mostRecentQuarter: string, earningsQuarterlyGrowth: number, netIncomeToCommon: number, trailingEps: number, forwardEps: number, pegRatio: number, lastSplitFactor: string, lastSplitDate: number, enterpriseToRevenue: number, enterpriseToEbitda: number, FiftyTwoWeekChange: number, SandPFiftyTwoWeekChange: number, lastDividendValue: number, lastDividendDate: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT IGNORE INTO defaultkeystatistics (lista_ativos_id, priceHint, enterpriseValue, forwardPE, profitMargins, floatShares, sharesOutstanding, heldPercentInsiders, heldPercentInstitutions, beta, impliedSharesOutstanding, category, bookValue, priceToBook, fundFamily, legalType, lastFiscalYearEnd, nextFiscalYearEnd, mostRecentQuarter, earningsQuarterlyGrowth, netIncomeToCommon, trailingEps, forwardEps, pegRatio, lastSplitFactor, lastSplitDate, enterpriseToRevenue, enterpriseToEbitda, FiftyTwoWeekChange, SandP52WeekChange, lastDividendValue, lastDividendDate) VALUES ((SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${ticker}'), '${priceHint}', '${enterpriseValue}', '${forwardPE}', '${profitMargins}', '${floatShares}', '${sharesOutstanding}', '${heldPercentInsiders}', '${heldPercentInstitutions}', '${beta}', '${impliedSharesOutstanding}', '${category}', '${bookValue}', '${priceToBook}', '${fundFamily}', '${legalType}', '${lastFiscalYearEnd}', '${nextFiscalYearEnd}', '${mostRecentQuarter}', '${earningsQuarterlyGrowth}', '${netIncomeToCommon}', '${trailingEps}', '${forwardEps}', '${pegRatio}', '${lastSplitFactor}', '${lastSplitDate}', '${enterpriseToRevenue}', '${enterpriseToEbitda}', '${FiftyTwoWeekChange}', '${SandPFiftyTwoWeekChange}', '${lastDividendValue}', '${lastDividendDate}')`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsInsertFinancialData = async (ticker: string, currentPrice: number, targetHighPrice: number, targetLowPrice: number, targetMeanPrice: number, targetMedianPrice: number, recommendationMean: number, recommendationKey: string, numberOfAnalystOpinions: number, totalCash: number, totalCashPerShare: number, ebitda: number, totalDebt: number, quickRatio: number, currentRatio: number, totalRevenue: number, debtToEquity: number, revenuePerShare: number, returnOnAssets: number, returnOnEquity: number, grossProfits: number, freeCashflow: number, operatingCashflow: number, earningsGrowth: number, revenueGrowth: number, grossMargins: number, ebitdaMargins: number, operatingMargins: number, profitMargins: number, financialCurrency: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT IGNORE INTO financialdata (lista_ativos_id, currentPrice, targetHighPrice, targetLowPrice, targetMeanPrice, targetMedianPrice, recommendationMean, recommendationKey, numberOfAnalystOpinions, totalCash, totalCashPerShare, ebitda, totalDebt, quickRatio, currentRatio, totalRevenue, debtToEquity, revenuePerShare, returnOnAssets, returnOnEquity, grossProfits, freeCashflow, operatingCashflow, earningsGrowth, revenueGrowth, grossMargins, ebitdaMargins, operatingMargins, profitMargins, financialCurrency) VALUES ((SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${ticker}'), '${currentPrice}', '${targetHighPrice}', '${targetLowPrice}', '${targetMeanPrice}', '${targetMedianPrice}', '${recommendationMean}', '${recommendationKey}', '${numberOfAnalystOpinions}', '${totalCash}', '${totalCashPerShare}', '${ebitda}', '${totalDebt}', '${quickRatio}', '${currentRatio}', '${totalRevenue}', '${debtToEquity}', '${revenuePerShare}', '${returnOnAssets}', '${returnOnEquity}', '${grossProfits}', '${freeCashflow}', '${operatingCashflow}', '${earningsGrowth}', '${revenueGrowth}', '${grossMargins}', '${ebitdaMargins}', '${operatingMargins}', '${profitMargins}', '${financialCurrency}')`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsInsertCashDividends = async (ticker: string, assetIssued: string, paymentDate: string, rate: number, relatedTo: string, approvedOn: string, isinCode: string, label: string, lastDatePrior: string, remarks: string) => {
    console.log(paymentDate);
    const query = `INSERT IGNORE INTO cashdividends (lista_ativos_id, assetIssued, paymentDate, rate, relatedTo, approvedOn, isinCode, label, lastDatePrior, remarks) VALUES ((SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${ticker}'), '${assetIssued}', '${paymentDate}', '${rate}', '${relatedTo}', '${approvedOn}', '${isinCode}', '${label}', '${lastDatePrior}', '${remarks}')`;

    //console.log("Query Executada:", query);  // Adicione esta linha para imprimir a consulta

    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

const ModelsInsertStockDividends = async (ticker: string, assetIssued: string, factor: number, approvedOn: string, isinCode: string, label: string, lastDatePrior: string, remarks: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT IGNORE INTO stockdividends (lista_ativos_id, assetIssued, factor, approvedOn, isinCode, label, lastDatePrior, remarks) VALUES ((SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${ticker}'), '${assetIssued}', '${factor}', '${approvedOn}', '${isinCode}', '${label}', '${lastDatePrior}', '${remarks}')`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsInsertSubscriptions = async (ticker: string, assetIssued: string, percentage: number, priceUnit: number, tradingPeriod: string, subscriptionDate: string, approvedOn: string, isinCode: string, label: string, lastDatePrior: string, remarks: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT IGNORE INTO subscriptions (lista_ativos_id, assetIssued, percentage, priceUnit, tradingPeriod, subscriptionDate, approvedOn, isinCode, label, lastDatePrior, remarks) VALUES ((SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${ticker}'), '${assetIssued}', '${percentage}', '${priceUnit}', '${tradingPeriod}', '${subscriptionDate}', '${approvedOn}', '${isinCode}', '${label}', '${lastDatePrior}', '${remarks}')`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsInsertHistoricalDataPrice = async (ticker: string, date: number, open: number, high: number, low: number, close: number, volume: number, adjustedClose: number) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT IGNORE INTO historicaldataprice (lista_ativos_id, date, open, high, low, close, volume, adjustedClose) VALUES ((SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${ticker}'), '${date}', '${open}', '${high}', '${low}', '${close}', '${volume}', '${adjustedClose}')`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsGetCotacao = async (ativo: string, periodo: number, periodicidade: number) => {
    let period: any;
    let periodicidad: any;
    if (periodo == 1) {
        period = ` AND FROM_UNIXTIME(date) >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)`;
    }
    else if (periodo == 2) {
        period = ` AND FROM_UNIXTIME(date) >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)`;
    }
    else if (periodo == 3) {
        period = ` AND FROM_UNIXTIME(date) >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)`;
    }
    else if (periodo == 4) {
        period = ` AND FROM_UNIXTIME(date) >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)`;
    }
    else if (periodo == 5) {
        period = ` AND FROM_UNIXTIME(date) >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR)`;
    }
    else if (periodo == 6) {
        period = ` AND FROM_UNIXTIME(date) >= DATE_SUB(CURDATE(), INTERVAL 10 YEAR)`;
    }
    else {
        period = ``;
    }

    if(periodicidade == 1){
        periodicidad = ` GROUP BY DAY(FROM_UNIXTIME(date)), MONTH(FROM_UNIXTIME(date)), YEAR(FROM_UNIXTIME(date))`;
    } 
    else if(periodicidade == 2){
        periodicidad = ` GROUP BY WEEK(FROM_UNIXTIME(date)), MONTH(FROM_UNIXTIME(date)), YEAR(FROM_UNIXTIME(date))`;
    } 
    else if(periodicidade == 3){
        periodicidad = ` GROUP BY MONTH(FROM_UNIXTIME(date)), YEAR(FROM_UNIXTIME(date))`;
    } 
    else
    {
        periodicidad = ` GROUP BY YEAR(FROM_UNIXTIME(date))`;
    } 
    return new Promise((resolve, reject) => {
        connection.query(`SELECT historicaldataprice.*, MAX(FROM_UNIXTIME(historicaldataprice.date)) AS data FROM historicaldataprice, lista_ativos WHERE historicaldataprice.close!=0 ${period} AND lista_ativos.lista_ativos_id=historicaldataprice.lista_ativos_id AND lista_ativos.ativo_codigo=? ${periodicidad} ORDER BY date ASC`,[ativo], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsGetAtivo = async (ticker: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT *,(SELECT volatilidade FROM indices_b3 WHERE codigo='IBOV') as ibov,(SELECT nome FROM setores WHERE setores_id=lista_ativos.setor) as nomeSetor,(SELECT nome FROM subsetores WHERE subsetores_id=lista_ativos.subsetor) as nomeSubsetor,(SELECT nome FROM segmentos WHERE segmentos_id=lista_ativos.segmento) as nomeSegmento FROM lista_ativos WHERE ativo_codigo=?`, [ticker], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsGetProventos = async (codigo: string, somar: string, periodo: number) => {
    let values = '';
    let agrupar = '';
    let period = '';
    if (somar == 's') {
        agrupar = ` GROUP BY MONTH(cashdividends.lastDatePrior), YEAR(cashdividends.lastDatePrior)`;
        //values = `, SUM(rate) as rate `;
        values = `, rate, DATE_FORMAT(cashdividends.lastDatePrior, '%d/%m/%Y') AS lastDatePrior, DATE_FORMAT(cashdividends.paymentDate, '%d/%m/%Y') AS paymentDate `;
        period = '';
    }
    else {
        agrupar = ' GROUP BY MONTH(cashdividends.lastDatePrior), YEAR(cashdividends.lastDatePrior), label ';
        values = ', SUM(rate) as rate ';
        period = '';
    }

    if (periodo == 0) {
        period = ` cashdividends.lastDatePrior <= NOW() `;
    }
    else {
        period = ` (cashdividends.lastDatePrior >= CURDATE() - INTERVAL ${periodo} YEAR) AND cashdividends.lastDatePrior <= NOW()`;
    }


    return new Promise((resolve, reject) => {
        connection.query(`SELECT CONCAT(MONTH(cashdividends.lastDatePrior),'-', YEAR(cashdividends.lastDatePrior)) as datas ${values}, cashdividends.label FROM cashdividends, lista_ativos WHERE cashdividends.lista_ativos_id=lista_ativos.lista_ativos_id AND lista_ativos.ativo_codigo=? AND ${period} ${agrupar} ORDER BY cashdividends.lastDatePrior DESC`, [codigo], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsUpdateLista = async (codigo: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE lista_ativos SET last_update=NOW() WHERE ativo_codigo=?`, [codigo], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsGetEmpresasRelacionadas = async (codigo: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT 
        SUBSTRING(lista_ativos.ativo_codigo, 1, 4) AS prefixo, 
        LOWER(lista_ativos.ativo_codigo) as ativo_codigo,
        lista_ativos.lista_ativos_id,
        lista_ativos.logo,
        financialdata.totalRevenue
    FROM 
        lista_ativos,
        financialdata
    WHERE 
        financialdata.lista_ativos_id = lista_ativos.lista_ativos_id
        AND lista_ativos.setor = (SELECT lista_ativos.setor FROM lista_ativos WHERE lista_ativos.ativo_codigo =?)
        AND lista_ativos.subsetor = (SELECT lista_ativos.subsetor FROM lista_ativos WHERE lista_ativos.ativo_codigo =?) 
        AND lista_ativos.segmento = (SELECT lista_ativos.segmento FROM lista_ativos WHERE lista_ativos.ativo_codigo =?)  
        AND lista_ativos.ativo_codigo NOT LIKE '%31' 
        AND lista_ativos.ativo_codigo NOT LIKE '%32' 
        AND lista_ativos.ativo_codigo NOT LIKE '%34'
        AND lista_ativos.ativo_codigo NOT LIKE CONCAT(SUBSTRING(?, 1, 4), '%')
    GROUP BY 
        prefixo  
    ORDER BY financialdata.totalRevenue DESC;`, [codigo,codigo,codigo,codigo], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsGetBuscaAtivo = async (codigo: string, categoria: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT lista_ativos_id, ativo_categoria, ativo_codigo, ativo_nome as nome, logo FROM lista_ativos WHERE (ativo_codigo LIKE CONCAT('%', ? ,'%') OR ativo_nome LIKE CONCAT('%', ? ,'%')) AND ativo_categoria=?`, [codigo,codigo,categoria], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsCriarIndicador = async (codigo: string) => {
    return new Promise((resolve, reject) => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const quantidadeAnos = 15;
        const anos = Array.from({ length: quantidadeAnos }, (_, i) => `((SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${codigo}'),${year - i})`).join(", ");
        connection.query(`INSERT IGNORE INTO historico_indicadores (lista_ativos_id, ano) VALUES ${anos}`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsUpdateIndicador = async (ticker: string, indicador: string, ano: number, valor:number ) => {
    return new Promise((resolve, reject) => {
        const id = `(SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${ticker}')`;
        const query = `UPDATE historico_indicadores SET lista_ativos_id=${id}, ${indicador}=${valor} WHERE ano=${ano} AND lista_ativos_id=${id}`;
        console.log(query)
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsGetIndicadores = async (ticker: string ) => {
    return new Promise((resolve, reject) => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const quantidadeAnos = 15;
        const id = `(SELECT lista_ativos_id FROM lista_ativos WHERE ativo_codigo='${ticker}')`;
        const anos = Array.from({ length: quantidadeAnos }, (_, i) => `${year - i}`).join(", ");
        const query = `SELECT * FROM historico_indicadores WHERE ano IN (${anos}) AND lista_ativos_id=${id}`;
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

export {
    ModelsGetIndicadores,
    ModelsUpdateIndicador,
    ModelsCriarIndicador,
    ModelsGetBuscaAtivo,
    ModelsGetEmpresasRelacionadas,
    ModelsUpdateLista,
    ModelsGetProventos,
    ModelsGetAtivo,
    ModelsGetCotacao,
    ModelsInsertHistoricalDataPrice,
    ModelsInsertSubscriptions,
    ModelsInsertStockDividends,
    ModelsInsertCashDividends,
    ModelsInsertFinancialData,
    ModelsInsertDefaultKeyStatistics,
    ModelsInsertBalanceSheetHistory,
    ModelsInsertBalanceSheet,
    ModelsUpdateFii,
    ModelsInsertSetores,
    ModelsSummaryProfile,
    ModelsGetEstatisticas,
    ModelsUpdateEstatistica,
    ModelsGetRankingIndicesB3,
    ModelsGetListaIndicesB3,
    ModelsUpdateTreasure,
    ModelsInsertGetTreasureNames,
    ModelsInsertGetTreasure,
    ModelsInsertHistoricoTreasure,
    ModelsInsertTreasure,
    ModelsCurrencyUpdate,
    ModelsGetRelatorio,
    modelConfigPercentual,
    modelGetPercentualCategorias,
    modelGetListaAtivosCliente,
    modelAdicionarHistoricoCliente,
    modelAdicionarHistorico,
    modelUpdateDadosB3,
    ModelsDadosB3,
    ModelsAtivoMoeda,
    ModelsValorTotalPatrimonio,
    ModelsTotalAtivos,
    modelUpdateTransacao,
    modelGetTransacaoId,
    modelDeleteTransacao,
    modelUpdateConfigs,
    modelGetConfigs,
    modelGetListaAtivos,
    modelGetTransacoes,
    modelInsertTransacao,
    modelGetBrokers,
    modelGetCategorias,
    getGroupModelsAtivos,
    getAllModelsAtivos,
};