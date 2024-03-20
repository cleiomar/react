import { converterDataParaAmericano, removeCurrency, getLastDayMonths } from '../funcoes';

import {
    ModelsUpdateFornecedor,
    ModelsGetRamos,
    ModelsGetFornecedorId,
    ModelsGetFornecedor,
    ModelsInsertNovoFornecedor,

} from '../models/ativos.model';

const serviceInsertNovoFornecedor = async (nome: any, responsavel: any, cpf: any, email: any, cnpj: any, ie: any, ramo: any, cep: any, endereco: any, cidade: any, setor: any, estado: any, vendedor: any, tel_vendas: any, tel_financeiro: any, whatsapp: any, produtos: any, avaliacao: any) => {
    try {
        const data = await ModelsInsertNovoFornecedor(nome, responsavel, cpf, email, cnpj, ie, ramo, cep, endereco, cidade, setor, estado, vendedor, tel_vendas, tel_financeiro, whatsapp, produtos, avaliacao);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetFornecedor = async () => {
    try {
        const data = await ModelsGetFornecedor();
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetFornecedorId = async (id: number) => {
    try {
        const data = await ModelsGetFornecedorId(id);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetRamos = async () => {
    try {
        const data = await ModelsGetRamos();
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceUpdateFornecedor = async (nome: any, responsavel: any, cpf: any, email: any, cnpj: any, ie: any, ramo: any, cep: any, endereco: any, cidade: any, setor: any, estado: any, vendedor: any, tel_vendas: any, tel_financeiro: any, whatsapp: any, produtos: any, avaliacao: any, id: any) => {
    try {
        const data = await ModelsUpdateFornecedor(nome, responsavel, cpf, email, cnpj, ie, ramo, cep, endereco, cidade, setor, estado, vendedor, tel_vendas, tel_financeiro, whatsapp, produtos, avaliacao, id);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

export {
    serviceUpdateFornecedor,
    serviceGetRamos,
    serviceGetFornecedorId,
    serviceGetFornecedor,
    serviceInsertNovoFornecedor,
};