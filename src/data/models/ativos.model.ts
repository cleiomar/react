import { format } from 'date-fns';
import connection from './connections';


const ModelsInsertNovoFornecedor = async (nome: any, responsavel: any, cpf: any, email: any, cnpj: any, ie: any, ramo: any, cep: any, endereco: any, cidade: any, setor: any, estado: any, vendedor: any, tel_vendas: any, tel_financeiro: any, whatsapp: any, produtos: any, avaliacao: any) => {
    return new Promise((resolve, reject) => {

        connection.query(`INSERT INTO fornecedor (fornecedor_id, nome_fornecedor, responsavel_fornecedor, cpf_fornecedor, email_fornecedor, cnpj_fornecedor, ie_fornecedor, ramo_fornecedor, cep_fornecedor, endereco_fornecedor, cidade_fornecedor, setor_fornecedor, estado_fornecedor, vendedor_fornecedor, tel_vendas_fornecedor, tel_financeiro_fornecedor, whatsapp_fornecedor, produtos_fornecedor, avaliacao_fornecedor) VALUES (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [nome, responsavel, cpf, email, cnpj, ie, ramo, cep, endereco, cidade, setor, estado, vendedor, tel_vendas, tel_financeiro, whatsapp, produtos, avaliacao], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsGetFornecedor = async () => {
    return new Promise((resolve, reject) => {

        connection.query(`SELECT fornecedor_id as id, fornecedor.*, ramos.* FROM fornecedor, ramos WHERE ramo_fornecedor=ramos_id`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsGetFornecedorId = async (id: number) => {
    return new Promise((resolve, reject) => {

        connection.query(`SELECT fornecedor_id as id, fornecedor.*, ramos.* FROM fornecedor, ramos WHERE ramo_fornecedor=ramos_id AND fornecedor_id=?`,[id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


const ModelsGetRamos = async (id: number) => {
    return new Promise((resolve, reject) => {

        connection.query(`SELECT nome_ramo as label, ramos_id as value FROM ramos`,[id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}

const ModelsUpdateFornecedor = async (nome: any, responsavel: any, cpf: any, email: any, cnpj: any, ie: any, ramo: any, cep: any, endereco: any, cidade: any, setor: any, estado: any, vendedor: any, tel_vendas: any, tel_financeiro: any, whatsapp: any, produtos: any, avaliacao: any, id: any) => {
    return new Promise((resolve, reject) => {

        connection.query(`UPDATE fornecedor SET nome_fornecedor=?, responsavel_fornecedor=?, cpf_fornecedor=?, email_fornecedor=?, cnpj_fornecedor=?, ie_fornecedor=?, ramo_fornecedor=?, cep_fornecedor=?, endereco_fornecedor=?, cidade_fornecedor=?, setor_fornecedor=?, estado_fornecedor=?, vendedor_fornecedor=?, tel_vendas_fornecedor=?, tel_financeiro_fornecedor=?, whatsapp_fornecedor=?, produtos_fornecedor=?, avaliacao_fornecedor=? WHERE fornecedor_id=?`, [nome, responsavel, cpf, email, cnpj, ie, ramo, cep, endereco, cidade, setor, estado, vendedor, tel_vendas, tel_financeiro, whatsapp, produtos, avaliacao, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}
export {
    ModelsUpdateFornecedor,
    ModelsGetRamos,
    ModelsGetFornecedorId,
    ModelsGetFornecedor,
    ModelsInsertNovoFornecedor,
};