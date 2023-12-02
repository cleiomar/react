import { converterDataParaAmericano, removeCurrency, getLastDayMonths } from '../funcoes';

import {
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
  } from '../models/ativos.model';

const serviceGetAll = async (type: string, graph: string) => {
    if (type === undefined) {
        type = '';
    }
    try {
        const data = await getAllModelsAtivos(type, graph);
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

const serviceGetPercentualCategoria = async (soma:string) => {
    try {
        const data = await modelGetPercentualCategorias(soma);
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

const serviceInsertTransacao = async (categoria: string, corretora: string, ativo: string, negociacao: any, quantidade: string, preco: any, corretagem: any, emolumentos: any, impostos: any, userid: any, tipo: any) => { 
    if(  !quantidade || quantidade == '0' || quantidade == 'undefined'){ return {success: false, message:'Preencha a quantidade.' }; }
    if(  !preco || parseFloat(preco) <= 0 || preco == 'undefined' ){ return {success: false, message:'Preencha o preço.' }; }
    if(  !categoria || categoria == '' || categoria == 'undefined'){ return {success: false, message:'Escolha a categoria.' }; }
    if(  !corretora || corretora == '' || corretora == 'undefined'){ return {success: false, message:'Escolha a corretora.' }; }
    if(  !negociacao || negociacao == '' || negociacao == 'undefined'){ return {success: false, message:'Preencha a data de negociação.' }; }
    if(  !tipo || tipo == '' || tipo == 'undefined'){ return {success: false, message:'Escolha o tipo da transação.' }; }
    if(  !ativo || ativo == '' || ativo == 'undefined'){ return {success: false, message:'Escolha a ativo.' }; }
    negociacao = converterDataParaAmericano(negociacao);   
    try {
        const data: any = await modelInsertTransacao(categoria, corretora, ativo, negociacao, quantidade, removeCurrency(preco), removeCurrency(corretagem), removeCurrency(emolumentos), removeCurrency(impostos), userid, tipo);
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

const serviceGetListaAtivos = async (id: string, b3: string) => {
    try {
        if(id === undefined)
        {
            id = '';
        }
        const data = await modelGetListaAtivos(id, b3);
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

const serviceUpdateTransacao = async (categoria: string, corretora: string, ativo: string, negociacao: any, quantidade: string, preco: any, corretagem: any, emolumentos: any, impostos: any, id: any, tipo: any) => {
    if(  !quantidade || quantidade == '0' || quantidade == 'undefined'){ return {success: false, message:'Preencha a quantidade.' }; }
    if(  !preco || parseFloat(preco) <= 0 || preco == 'undefined' ){ return {success: false, message:'Preencha o preço.' }; }
    if(  !categoria || categoria == '' || categoria == 'undefined'){ return {success: false, message:'Escolha a categoria.' }; }
    if(  !corretora || corretora == '' || corretora == 'undefined'){ return {success: false, message:'Escolha a corretora.' }; }
    if(  !negociacao || negociacao == '' || negociacao == 'undefined'){ return {success: false, message:'Preencha a data de negociação.' }; }
    if(  !tipo || tipo == '' || tipo == 'undefined'){ return {success: false, message:'Escolha o tipo da transação.' }; }
    if(  !ativo || ativo == '' || ativo == 'undefined'){ return {success: false, message:'Escolha a ativo.' }; }

    negociacao = converterDataParaAmericano(negociacao);
    if(  !quantidade || quantidade == '0' || quantidade == 'undefined'){ return {success: false, message:'Preencha a quantidade.' }; }
    try {
        const data: any = await modelUpdateTransacao(categoria, corretora, ativo, negociacao, quantidade, removeCurrency(preco), removeCurrency(corretagem), removeCurrency(emolumentos), removeCurrency(impostos), id, tipo);
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

const serviceGetAtivoMoeda = async (id: string) => {
    if (id === undefined) {
        id = '';
    }
    try {
        const data = await ModelsAtivoMoeda(id);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceDadosB3 = async (id: string) => {
    if (id === undefined) {
        id = '';
    }
    try {
        const data = await ModelsDadosB3(id);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceUpdateDadosB3 = async (ticker: string, valor: number) => {
     try {
        const data: any = await modelUpdateDadosB3(ticker, valor);
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

const serviceAdicionarHistorico = async (lista_ativo_id: number, valor: number) => {
    try {
       const data: any = await modelAdicionarHistorico(lista_ativo_id, valor);
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

const serviceAdicionarHistoricoCliente = async (lista_ativo_id: number, quantidade: number, ticker: number) => {
    try {
       const data: any = await modelAdicionarHistoricoCliente(lista_ativo_id, quantidade, ticker);
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


const serviceGetListaAtivosCliente = async (id: string, b3: string) => {
    try {
        if(id === undefined)
        {
            id = '';
        }
        const data = await modelGetListaAtivosCliente(id, b3);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceConfigPercentual = async (porcentagemAcao: number ,porcentagemFII: number ,porcentagemFIAgro: number ,porcentagemETFN: number ,porcentagemETFI: number ,porcentagemCriptomoedas: number ,porcentagemFixa: number ,porcentagemCaixa: number, limit: number ) => { 
    if(  !porcentagemAcao || porcentagemAcao == '' || porcentagemAcao == 'undefined'){ return {success: false, message:'Preencha a porcentagem das ações.' }; }
    if(  !porcentagemFII || porcentagemFII == '' || porcentagemFII == 'undefined'){ return {success: false, message:'Preencha a porcentagem dos FII.' }; }
    if(  !porcentagemFIAgro || porcentagemFIAgro == '' || porcentagemFIAgro == 'undefined'){ return {success: false, message:'Preencha a porcentagem dos FIAgros.' }; }
    if(  !porcentagemETFN || porcentagemETFN == '' || porcentagemETFN == 'undefined'){ return {success: false, message:'Preencha a porcentagem dos ETFs Nacionais.' }; }
    if(  !porcentagemETFI || porcentagemETFI == '' || porcentagemETFI == 'undefined'){ return {success: false, message:'Preencha a porcentagem dos ETFs Internacionais.' }; }
    if(  !porcentagemCriptomoedas || porcentagemCriptomoedas == '' || porcentagemCriptomoedas == 'undefined'){ return {success: false, message:'Preencha a porcentagem das criptomoedas.' }; }
    if(  !porcentagemFixa || porcentagemFixa == '' || porcentagemFixa == 'undefined'){ return {success: false, message:'Preencha a porcentagem da renda fixa.' }; }
    if(  !porcentagemCaixa || porcentagemCaixa == '' || porcentagemCaixa == 'undefined'){ return {success: false, message:'Preencha a porcentagem em caixa.' }; }
   
    try {
        const data: any = await modelConfigPercentual(porcentagemAcao, porcentagemFII, porcentagemFIAgro, porcentagemETFN, porcentagemETFI, porcentagemCriptomoedas, porcentagemFixa, porcentagemCaixa, limit);
        if(data.affectedRows === 1){
            return {success: true, message:'Atualizado com sucesso!' };                    
        }
        else
        {
            return data;
        }
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetRelatorio = async (period: number, mode: any) => {
    if (period === undefined) {
        period = 1;
    }
    
    const months = getLastDayMonths(period*1);
    try {
        const data = await ModelsGetRelatorio(period, months, mode);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

export {
    serviceGetRelatorio,
    serviceConfigPercentual,
    serviceGetPercentualCategoria,
    serviceGetListaAtivosCliente,
    serviceAdicionarHistoricoCliente,
    serviceAdicionarHistorico,
    serviceUpdateDadosB3,
    serviceDadosB3,
    serviceGetAtivoMoeda,
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