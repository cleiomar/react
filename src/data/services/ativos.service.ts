import { converterDataParaAmericano, removeCurrency, getLastDayMonths } from '../funcoes';

import {
    ModelsUpdateDrawDown,
    ModelsGetValoresAtivo,
    ModelsGetGraphIndicador,
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

const serviceUpdateDadosB3 = async (ticker: string, valor: number, logo: any) => {
     try {
        const data: any = await modelUpdateDadosB3(ticker, valor, logo);
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
    
    const months = getLastDayMonths(period*12);
    try {
        const data = await ModelsGetRelatorio(period, months, mode);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceCurrencyUpdate = async (currency: string, valor: number) => {
    try {
        const data = await ModelsCurrencyUpdate(currency, valor);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceInsertTreasure = async (codigo: any, nome: any, ativo: any) => {
    try {
        const data = await ModelsInsertTreasure(codigo, nome, ativo);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceInsertHistoricoTreasure = async (codigo: any, dataTime: any, valor: any) => {
    try {
        const data = await ModelsInsertHistoricoTreasure(codigo, dataTime, valor);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetTreasure = async (codigo: any, periodo: any) => {
    try {
        const data = await ModelsInsertGetTreasure(codigo, periodo);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetTreasureNames = async () => {
    try {
        const data = await ModelsInsertGetTreasureNames();
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceUpdateTreasure = async (codigo: any) => {
    try {
        const data = await ModelsUpdateTreasure(codigo);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetListaIndicesB3 = async () => {
    try {
        const data = await ModelsGetListaIndicesB3();
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetRankingIndicesB3 = async (indice: number) => {
    try {
        const data = await ModelsGetRankingIndicesB3(indice);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceUpdateEstatistica = async (codigo: any, min: any, max: any, atual: any) => {
    try {
        const data = await ModelsUpdateEstatistica(codigo, min, max, atual);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetEstatisticas = async (codigo: any) => {
    try {
        const data = await ModelsGetEstatisticas(codigo);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceSummaryProfile = async (ativo: string, address1: string, address2: string, city: string, state: string, zip: string, country: string, phone: string, website: string, industry: string, industryKey: string, industryDisp: string, sector: string, sectorKey: string, sectorDisp: string, longBusinessSummary: string, fullTimeEmployees: number, companyOfficers: any) => {
    console.log(ativo)
    try {
        const data = await ModelsSummaryProfile(ativo, address1, address2, city, state, zip, country, phone, website, industry, industryKey, industryDisp, sector, sectorKey, sectorDisp, longBusinessSummary, fullTimeEmployees, companyOfficers);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceInsertSetores = async (companyName: string, ticker: string, sectorName: string, subSectorName: string, segmentName: string) => {
    try {
        const data = await ModelsInsertSetores(companyName, ticker, sectorName, subSectorName, segmentName);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceUpdateFii = async (ticker: string, sectorName: string, subSectorName: string, segmentName: string) => {
    try {
        const data = await ModelsUpdateFii(sectorName, subSectorName, segmentName, ticker);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceInsertBalanceSheet = async (ticker: string, endDate: string, cash: number, shortTermInvestments: number, netReceivables: number, inventory: number, otherCurrentAssets: number, totalCurrentAssets: number, longTermInvestments: number, propertyPlantEquipment: number, goodWill: number, intangibleAssets: number, otherAssets: number, deferredLongTermAssetCharges: number, totalAssets: number, accountsPayable: number, shortLongTermDebt: number, otherCurrentLiab: number, longTermDebt: number, otherLiab: number, minorityInterest: number, totalCurrentLiabilities: number, totalLiab: number, commonStock: number, retainedEarnings: number, treasuryStock: number, otherStockholderEquity: number, totalStockholderEquity: number, netTangibleAssets: number) => {
    try {
        const data = await ModelsInsertBalanceSheet(ticker, endDate, cash, shortTermInvestments, netReceivables, inventory, otherCurrentAssets, totalCurrentAssets, longTermInvestments, propertyPlantEquipment, goodWill, intangibleAssets, otherAssets, deferredLongTermAssetCharges, totalAssets, accountsPayable, shortLongTermDebt, otherCurrentLiab, longTermDebt, otherLiab, minorityInterest, totalCurrentLiabilities, totalLiab, commonStock, retainedEarnings, treasuryStock, otherStockholderEquity, totalStockholderEquity, netTangibleAssets
            );
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceInsertBalanceSheetHistory = async (ticker: string, endDate: string, cash: number, shortTermInvestments: number, netReceivables: number, inventory: number, otherCurrentAssets: number, totalCurrentAssets: number, longTermInvestments: number, propertyPlantEquipment: number, goodWill: number, intangibleAssets: number, otherAssets: number, deferredLongTermAssetCharges: number, totalAssets: number, accountsPayable: number, shortLongTermDebt: number, otherCurrentLiab: number, longTermDebt: number, otherLiab: number, minorityInterest: number, totalCurrentLiabilities: number, totalLiab: number, commonStock: number, retainedEarnings: number, treasuryStock: number, otherStockholderEquity: number, totalStockholderEquity: number, netTangibleAssets: number) => {
    try {
        const data = await ModelsInsertBalanceSheetHistory(ticker, endDate, cash, shortTermInvestments, netReceivables, inventory, otherCurrentAssets, totalCurrentAssets, longTermInvestments, propertyPlantEquipment, goodWill, intangibleAssets, otherAssets, deferredLongTermAssetCharges, totalAssets, accountsPayable, shortLongTermDebt, otherCurrentLiab, longTermDebt, otherLiab, minorityInterest, totalCurrentLiabilities, totalLiab, commonStock, retainedEarnings, treasuryStock, otherStockholderEquity, totalStockholderEquity, netTangibleAssets
            );
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceInsertDefaultKeyStatistics = async (ticker: string, priceHint: number, enterpriseValue: number, forwardPE: number, profitMargins: number, floatShares: number, sharesOutstanding: number, heldPercentInsiders: number, heldPercentInstitutions: number, beta: number, impliedSharesOutstanding: number, category: number, bookValue: number, priceToBook: number, fundFamily: number, legalType: number, lastFiscalYearEnd: string, nextFiscalYearEnd: string, mostRecentQuarter: string, earningsQuarterlyGrowth: number, netIncomeToCommon: number, trailingEps: number, forwardEps: number, pegRatio: number, lastSplitFactor: string, lastSplitDate: number, enterpriseToRevenue: number, enterpriseToEbitda: number, FiftyTwoWeekChange: number, SandP52WeekChange: number, lastDividendValue: number, lastDividendDate: string) => {
    try {
        const data = await ModelsInsertDefaultKeyStatistics(ticker, priceHint, enterpriseValue, forwardPE, profitMargins, floatShares, sharesOutstanding, heldPercentInsiders, heldPercentInstitutions, beta, impliedSharesOutstanding, category, bookValue, priceToBook, fundFamily, legalType, lastFiscalYearEnd, nextFiscalYearEnd, mostRecentQuarter, earningsQuarterlyGrowth, netIncomeToCommon, trailingEps, forwardEps, pegRatio, lastSplitFactor, lastSplitDate, enterpriseToRevenue, enterpriseToEbitda, FiftyTwoWeekChange, SandP52WeekChange, lastDividendValue, lastDividendDate);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceInsertFinancialData = async (ticker: string, currentPrice: number, targetHighPrice: number, targetLowPrice: number, targetMeanPrice: number, targetMedianPrice: number, recommendationMean: number, recommendationKey: string, numberOfAnalystOpinions: number, totalCash: number, totalCashPerShare: number, ebitda: number, totalDebt: number, quickRatio: number, currentRatio: number, totalRevenue: number, debtToEquity: number, revenuePerShare: number, returnOnAssets: number, returnOnEquity: number, grossProfits: number, freeCashflow: number, operatingCashflow: number, earningsGrowth: number, revenueGrowth: number, grossMargins: number, ebitdaMargins: number, operatingMargins: number, profitMargins: number, financialCurrency: string) => {
    try {
        const data = await ModelsInsertFinancialData(ticker, currentPrice, targetHighPrice, targetLowPrice, targetMeanPrice, targetMedianPrice, recommendationMean, recommendationKey, numberOfAnalystOpinions, totalCash, totalCashPerShare, ebitda, totalDebt, quickRatio, currentRatio, totalRevenue, debtToEquity, revenuePerShare, returnOnAssets, returnOnEquity, grossProfits, freeCashflow, operatingCashflow, earningsGrowth, revenueGrowth, grossMargins, ebitdaMargins, operatingMargins, profitMargins, financialCurrency);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceInsertCashDividends = async (ticker: string, assetIssued: string, paymentDate: string, rate: number, relatedTo: string, approvedOn: string, isinCode: string, label: string, lastDatePrior: string, remarks: string) => {
    try {
        const data = await ModelsInsertCashDividends(ticker, assetIssued, paymentDate, rate, relatedTo, approvedOn, isinCode, label, lastDatePrior, remarks);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceInsertStockDividends = async (ticker: string, assetIssued: string, factor: number, approvedOn: string, isinCode: string, label: string, lastDatePrior: string, remarks: string) => {
    try {
        const data = await ModelsInsertStockDividends(ticker, assetIssued, factor, approvedOn, isinCode, label, lastDatePrior, remarks);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceInsertSubscriptions = async (ticker: string, assetIssued: string, percentage: number, priceUnit: number, tradingPeriod: string, subscriptionDate: string, approvedOn: string, isinCode: string, label: string, lastDatePrior: string, remarks: string) => {
    try {
        const data = await ModelsInsertSubscriptions(ticker, assetIssued, percentage, priceUnit, tradingPeriod, subscriptionDate, approvedOn, isinCode, label, lastDatePrior, remarks);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceInsertHistoricalDataPrice = async (ticker: string, date: number, open: number, high: number, low: number, close: number, volume: number, adjustedClose: number) => {
    try {
        const data = await ModelsInsertHistoricalDataPrice(ticker, date, open, high, low, close, volume, adjustedClose);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceGetCotacao = async (ativo: string, periodo: number, periodicidade: number) => {
    try {
        const data = await ModelsGetCotacao(ativo, periodo, periodicidade);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetAtivo = async (ticker: string) => {
    try {
        const data = await ModelsGetAtivo(ticker);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetProventos = async (codigo: string, somar: string, periodo: number) => {
    try {
        const data = await ModelsGetProventos(codigo, somar, periodo);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceUpdateLista = async (codigo: string) => {
    try {
        const data = await ModelsUpdateLista(codigo);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetEmpresasRelacionadas = async (codigo: string) => {
    try {
        const data = await ModelsGetEmpresasRelacionadas(codigo);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetBuscaAtivo = async (codigo: string, categoria: string) => {
    try {
        const data = await ModelsGetBuscaAtivo(codigo, categoria);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceCriarIndicador = async (codigo: string) => {
    try {
        const data = await ModelsCriarIndicador(codigo);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

const serviceUpdateIndicador = async (ticker: string, indicador: string, ano: number, valor:number ) => {
    try {
        const data = await ModelsUpdateIndicador(ticker, indicador, ano, valor);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetIndicadores = async (ticker: string ) => {
    try {
        const data = await ModelsGetIndicadores(ticker);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetGraphIndicador = async (indicador: string, ticker: number ) => {
    try {
        const data = await ModelsGetGraphIndicador(indicador, ticker);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceGetValoresAtivo = async (ticker: number ) => {
    try {
        const data = await ModelsGetValoresAtivo(ticker);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};


const serviceUpdateDrawDown = async (ticker: string, valor: any ) => {
    try {
        const data = await ModelsUpdateDrawDown(ticker, valor);
        return data;
    } catch (error) {
        throw error; // Propagar o erro para ser tratado no controlador
    }
};

export {
    serviceUpdateDrawDown,
    serviceGetValoresAtivo,
    serviceGetGraphIndicador,
    serviceGetIndicadores,
    serviceUpdateIndicador,
    serviceCriarIndicador,
    serviceGetBuscaAtivo,
    serviceGetEmpresasRelacionadas,
    serviceUpdateLista,
    serviceGetProventos,
    serviceGetAtivo,
    serviceGetCotacao,
    serviceInsertHistoricalDataPrice,
    serviceInsertSubscriptions,
    serviceInsertStockDividends,
    serviceInsertCashDividends,
    serviceInsertFinancialData,
    serviceInsertDefaultKeyStatistics,
    serviceInsertBalanceSheetHistory,
    serviceInsertBalanceSheet,
    serviceUpdateFii,
    serviceInsertSetores,
    serviceSummaryProfile,
    serviceGetEstatisticas,
    serviceUpdateEstatistica,
    serviceGetRankingIndicesB3,
    serviceGetListaIndicesB3,
    serviceUpdateTreasure,
    serviceGetTreasureNames,
    serviceGetTreasure,
    serviceInsertHistoricoTreasure,
    serviceInsertTreasure,
    serviceCurrencyUpdate,
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