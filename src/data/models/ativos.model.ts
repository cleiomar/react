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
        connection.query(`SELECT categorias.categoria_id as value, categorias.categoria_prefixo, categorias.categoria_nome as label, COALESCE(SUM(ativos.amount * lista_ativos.ativo_valor * cotacao.valor), 0) as total FROM categorias LEFT JOIN lista_ativos ON categorias.categoria_id = lista_ativos.ativo_categoria LEFT JOIN ativos ON lista_ativos.lista_ativos_id = ativos.ticker LEFT JOIN cotacao ON cotacao.cotacao_id = lista_ativos.ativo_moeda GROUP BY categorias.categoria_id, categorias.categoria_nome`, (err, results) => {
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
        values = `AND ativo_categoria IN (1, 2, 3, 4)`; // Converte o array em uma string separada por vírgulas
    }
    else {
        values = '';
    }
    return new Promise((resolve, reject) => {
        connection.query(`SELECT lista_ativos_id as value, lista_ativos_id as id, ativo_valor, lista_ativos.ativo_codigo, ativo_categoria, CONCAT (ativo_codigo, ' - ', ativo_nome) as label FROM lista_ativos WHERE ativo_categoria LIKE CONCAT('%', ?, '%') ${values}`, [id], (err, results) => {
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
    return new Promise(async (resolve, reject) => {
        let values = '';
        const results = await Promise.all([
            new Promise((resolve, reject) => {
                connection.query(`SELECT ativos.*, ativos.ativos_id as id, lista_ativos.* FROM ativos, lista_ativos, cotacao WHERE lista_ativos.ativo_moeda=cotacao.cotacao_id AND ativos.ticker=lista_ativos.lista_ativos_id AND ativos.type LIKE CONCAT('%', ?, '%') ${values}`, [type], (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                });
            }),
            new Promise((resolve, reject) => {
                connection.query(`SELECT lista_ativos.*, ativos.ativos_id as id, ativos.amount, ativos.*, categorias.categoria_prefixo, brokers.broker_nome, SUM(lista_ativos.ativo_valor * ativos.amount * cotacao.valor) AS total, SUM(ativos.preco_medio * ativos.amount * cotacao.valor) AS valor_custo,(SELECT historico_ativos_valor 
                    FROM historico_ativos 
                    WHERE historico_ativos.lista_ativos_id = lista_ativos.lista_ativos_id                
               ORDER BY historico_ativos.historico_ativos_id DESC LIMIT 1) as historico_ativos_valor FROM lista_ativos, ativos, transacoes, categorias, cotacao, brokers WHERE lista_ativos.ativo_moeda = cotacao.cotacao_id AND ativos.ticker = lista_ativos.lista_ativos_id AND categorias.categoria_id = ativos.type AND transacoes.ativo = ativos.ticker AND brokers.broker_id = transacoes.broker AND ativos.type LIKE CONCAT('%', ?, '%') GROUP BY lista_ativos.lista_ativos_id, ativos.ativos_id, categorias.categoria_prefixo, brokers.broker_nome ORDER BY lista_ativos.lista_ativos_id ASC;`, [type], (err, results) => {
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

const modelUpdateDadosB3 = async (ticker: string, valor: number) => {
    return new Promise((resolve, reject) => {
        connection.beginTransaction((err) => {
            if (err) {
                reject(err);
                return;
            }

            // Primeiro UPDATE
            connection.query(
                'UPDATE lista_ativos SET ativo_valor = ? WHERE ativo_codigo = ?',
                [valor, ticker],
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
        let var1='';
        let var2='';
        if(mode==1)
        {
            var1 = ' categorias.categoria_nome, ';
        }
        else
        {
            var2 = " 'Ações' AS categoria_nome, ";
        }
        console.log(months)
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
    ORDER BY historico_clientes.historico_clientes_data ASC`,[months], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

export {
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