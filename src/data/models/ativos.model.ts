import connection from './connections';

const getAllModelsAtivos = async (type: string) => {
    return new Promise((resolve, reject) => {
        let values = '';
        // if (profiles != null && profiles != undefined && profiles != '') {
        //     values = `AND credentials_id IN (${profiles})`; // Converte o array em uma string separada por vírgulas
        //   }
        //   else
        //   {
        //     values = '';
        //   }

        connection.query(`SELECT ativos.*, lista_ativos.* FROM ativos, lista_ativos WHERE ativos.ticker=lista_ativos.lista_ativos_id AND ativos.type LIKE CONCAT('%', ?, '%') ${values}`, [type], (err, results) => {
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
                                CASE type
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
                                SUM(amount * price) AS total_value
                            FROM ativos
                            GROUP BY type;`, (err, results) => {
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

const modelInsertTransacao = async (categoria: string, corretora: string, ativo: string, negociacao: any, quantidade: string, preco: any, corretagem: any, emolumentos: any, impostos: any, userid: any, tipo: any, moeda: any) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT transacoes (transacao_id, categoria, ativo, tipo_ordem, broker, negociacao, quantidade, preco, corretagem, emolumentos,impostos,origem, tipo_moeda)
                                    VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)`, [categoria, ativo, tipo, corretora, negociacao, quantidade, preco, corretagem, emolumentos, impostos, moeda], (err, results) => {
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
        connection.query(`SELECT categorias.categoria_prefixo, transacoes.*, brokers.broker_nome, tipo_ordem.tipo_ordem_nome, SUM(quantidade * preco) as total, transacao_id as id, lista_ativos.ativo_codigo, lista_ativos.ativo_moeda, cotacao.moeda FROM transacoes, categorias, brokers, tipo_ordem, lista_ativos, cotacao WHERE cotacao.cotacao_id=lista_ativos.ativo_moeda AND lista_ativos.lista_ativos_id=transacoes.ativo AND tipo_ordem.tipo_ordem_id=transacoes.tipo_ordem AND categorias.categoria_id = transacoes.categoria AND transacoes.broker = brokers.broker_id GROUP BY transacoes.transacao_id ORDER BY transacoes.negociacao DESC, transacoes.transacao_id DESC`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelGetListaAtivos = async (id: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT lista_ativos_id as value, ativo_categoria, CONCAT (ativo_codigo, ' - ', ativo_nome) as label FROM lista_ativos WHERE ativo_categoria LIKE CONCAT('%', ?, '%')`, [id], (err, results) => {
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
        connection.query(`SELECT categorias.categoria_prefixo, transacoes.*, brokers.broker_nome, tipo_ordem.tipo_ordem_nome, SUM(quantidade * preco) as total, transacao_id as id, lista_ativos.ativo_codigo, transacoes.tipo_moeda, cotacao.moeda, cotacao.simbolo FROM transacoes, categorias, brokers, tipo_ordem, lista_ativos, cotacao WHERE transacoes.tipo_moeda=cotacao.cotacao_id AND lista_ativos.lista_ativos_id=transacoes.ativo AND tipo_ordem.tipo_ordem_id=transacoes.tipo_ordem AND categorias.categoria_id = transacoes.categoria AND transacoes.broker = brokers.broker_id and transacoes.transacao_id = ? GROUP BY transacoes.transacao_id`, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const modelUpdateTransacao = async (categoria: string, corretora: string, ativo: string, negociacao: any, quantidade: string, preco: any, corretagem: any, emolumentos: any, impostos: any, id: any, tipo: any, moeda: any) => {
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
            origem = 1,
            tipo_moeda=?
        WHERE
            transacao_id = ?;`, [categoria, ativo, tipo, corretora, negociacao, quantidade, preco, corretagem, emolumentos, impostos, id, moeda], (err, results) => {
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
                connection.query(`SELECT ativos.*, lista_ativos.* FROM ativos, lista_ativos, cotacao WHERE lista_ativos.ativo_moeda=cotacao.cotacao_id AND ativos.ticker=lista_ativos.lista_ativos_id AND ativos.type LIKE CONCAT('%', ?, '%') ${values}`, [type], (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                });
            }),
            new Promise((resolve, reject) => {
                connection.query(`SELECT lista_ativos.*, ativos.amount, ativos.*, categorias.categoria_prefixo, brokers.broker_nome, SUM(lista_ativos.ativo_valor * ativos.amount * cotacao.valor) AS total FROM lista_ativos, ativos, transacoes, categorias, cotacao, brokers WHERE lista_ativos.ativo_moeda = cotacao.cotacao_id AND ativos.ticker = lista_ativos.lista_ativos_id AND categorias.categoria_id = ativos.type AND transacoes.ativo = ativos.ticker AND brokers.broker_id = transacoes.broker AND ativos.type LIKE CONCAT('%', ?, '%') GROUP BY lista_ativos.lista_ativos_id, ativos.ativos_id, categorias.categoria_prefixo, brokers.broker_nome ORDER BY lista_ativos.lista_ativos_id ASC;`, [type], (err, results) => {
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

        const resultWithTotalAtivos = {
            total_ativos: results[0].length,
            total_valor: totalSoma,
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
                connection.query(`SELECT ativos.*, lista_ativos.*, SUM(lista_ativos.ativo_valor*ativos.amount*cotacao.valor) AS total FROM cotacao, ativos JOIN lista_ativos ON ativos.ticker = lista_ativos.lista_ativos_id WHERE lista_ativos.ativo_moeda=cotacao.cotacao_id AND ativos.type LIKE CONCAT('%', ?, '%') GROUP BY ativos.type, ativos.ativos_id ORDER BY ativos.type DESC;`, [type], (err, results) => {
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

export {
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