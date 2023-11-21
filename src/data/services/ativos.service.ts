import { converterDataParaAmericano, removeCurrency } from '../funcoes';


import {
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
  } from '../models/ativos.model';

const serviceGetAll = async (type: string) => {
    if (type === undefined) {
        type = '';
    }
    try {
        const data = await getAllModelsAtivos(type);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetGroup = async () => {
    try {
        const data = await getGroupModelsAtivos();
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetCategoria = async () => {
    try {
        const data = await modelGetCategorias();
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetBrokers = async () => {
    try {
        const data = await modelGetBrokers();
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceInsertTransacao = async (categoria: string, corretora: string, ativo: string, negociacao: any, quantidade: string, preco: any, corretagem: any, emolumentos: any, impostos: any, userid: any, tipo: any, moeda: any) => { 
    if(  !quantidade || quantidade == '0' || quantidade == 'undefined'){ return {success: false, message:'Preencha a quantidade.' }; }
    if(  !preco || parseFloat(preco) <= 0 || preco == 'undefined' ){ return {success: false, message:'Preencha o preço.' }; }
    if(  !categoria || categoria == '' || categoria == 'undefined'){ return {success: false, message:'Escolha a categoria.' }; }
    if(  !corretora || corretora == '' || corretora == 'undefined'){ return {success: false, message:'Escolha a corretora.' }; }
    if(  !moeda || moeda == '' || moeda == 'undefined'){ return {success: false, message:'Escolha a moeda.' }; }
    if(  !tipo || tipo == '' || tipo == 'undefined'){ return {success: false, message:'Escolha o tipo da transação.' }; }
    if(  !ativo || ativo == '' || ativo == 'undefined'){ return {success: false, message:'Escolha a ativo.' }; }
    negociacao = converterDataParaAmericano(negociacao);   
    try {
        const data: any = await modelInsertTransacao(categoria, corretora, ativo, negociacao, quantidade, removeCurrency(preco), removeCurrency(corretagem), removeCurrency(emolumentos), removeCurrency(impostos), userid, tipo, moeda);
        if(data.affectedRows === 1){
            return {success: true, message:'Transação inserida com sucesso!' };                    
        }
        else
        {
            return data;
        }
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetTransacoes = async () => {
    try {
        const data = await modelGetTransacoes();
        // data.forEach((transacao) => {
        //     switch (transacao.broker) {
        //       case '1':
        //         transacao.broker = 'Rico Investimentos';
        //         break;
        //       case '2':
        //         transacao.broker = 'Interactive Brokers';
        //         break;
        //       // Adicione mais casos conforme necessário
          
        //       default:
        //         transacao.broker = 'Desconhecido';
        //     }
        //   });
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetListaAtivos = async (id: string) => {
    try {
        if(id === undefined)
        {
            id = '';
        }
        const data = await modelGetListaAtivos(id);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetConfigs = async (id: string) => {
    try {
        if(id === undefined)
        {
            id = '';
        }
        const data = await modelGetConfigs(id);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};



const serviceUpdateConfigs = async (hide_values: any) => {
    try {
        if(hide_values === undefined)
        {
            hide_values = '';
        }
        const data = await modelUpdateConfigs(hide_values);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceDeleteTransacao = async (id: any) => {
    try {
        if(id === undefined)
        {
            id = '';
        }
        const data: any = await modelDeleteTransacao(id);
        if(data.affectedRows === 1){
            return {success: true, message:'Transação excluida com sucesso!' };                    
        }
        else
        {
            return data;
        }
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetTransacaoId = async (id: any) => {
    try {
        if(id === undefined)
        {
            id = '';
        }
        const data = await modelGetTransacaoId(id);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceUpdateTransacao = async (categoria: string, corretora: string, ativo: string, negociacao: any, quantidade: string, preco: any, corretagem: any, emolumentos: any, impostos: any, id: any, tipo: any, moeda: any) => {
    if(  !quantidade || quantidade == '0' || quantidade == 'undefined'){ return {success: false, message:'Preencha a quantidade.' }; }
    if(  !preco || parseFloat(preco) <= 0 || preco == 'undefined' ){ return {success: false, message:'Preencha o preço.' }; }
    if(  !categoria || categoria == '' || categoria == 'undefined'){ return {success: false, message:'Escolha a categoria.' }; }
    if(  !corretora || corretora == '' || corretora == 'undefined'){ return {success: false, message:'Escolha a corretora.' }; }
    if(  !moeda || moeda == '' || moeda == 'undefined'){ return {success: false, message:'Escolha a moeda.' }; }
    if(  !negociacao || negociacao == '' || negociacao == 'undefined'){ return {success: false, message:'Preencha a data de negociação.' }; }
    if(  !tipo || tipo == '' || tipo == 'undefined'){ return {success: false, message:'Escolha o tipo da transação.' }; }
    if(  !ativo || ativo == '' || ativo == 'undefined'){ return {success: false, message:'Escolha a ativo.' }; }

    negociacao = converterDataParaAmericano(negociacao);
    if(  !quantidade || quantidade == '0' || quantidade == 'undefined'){ return {success: false, message:'Preencha a quantidade.' }; }
    try {
        const data: any = await modelUpdateTransacao(categoria, corretora, ativo, negociacao, quantidade, removeCurrency(preco), removeCurrency(corretagem), removeCurrency(emolumentos), removeCurrency(impostos), id, tipo, moeda);
        if(data.affectedRows === 1){
            return {success: true, message:'Transação inserida com sucesso!' };                    
        }
        else
        {
            return data;
        }

    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetTotalAtivos = async (type: string) => {
    if (type === undefined) {
        type = '';
    }
    try {
        const data = await ModelsTotalAtivos(type);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetValorTotalPatrimonio = async (type: string) => {
    if (type === undefined) {
        type = '';
    }
    try {
        const data = await ModelsValorTotalPatrimonio(type);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

export {
    serviceGetValorTotalPatrimonio,
    serviceGetTotalAtivos,
    serviceUpdateTransacao,
    serviceGetTransacaoId,
    serviceDeleteTransacao,
    serviceUpdateConfigs,
    serviceGetConfigs,
    serviceGetListaAtivos,
    serviceGetTransacoes,
    serviceInsertTransacao,
    serviceGetBrokers,
    serviceGetCategoria,
    serviceGetGroup,
    serviceGetAll,
  };