import { Request, Response } from 'express';
import {
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
  } from '../services/ativos.service';
import { Console } from 'console';

const getAllAtivos = async (req: Request, res: Response): Promise<void> => {
    const { type, graph } = req.params;
    try {
        const data = await serviceGetAll(type, graph);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getGroupAtivos = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await serviceGetGroup();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetCategorias = async (req: Request, res: Response): Promise<void> => {

    try {
        const data = await serviceGetCategoria();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetPercentualCategorias = async (req: Request, res: Response): Promise<void> => {
    const soma : any = req.query.soma;

    try {
        const data = await serviceGetPercentualCategoria(soma);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetBrokers = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await serviceGetBrokers();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerInsertTransacao = async (req: Request, res: Response): Promise<void> => {
    try {
        const { categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, userid, tipo  } = req.body;
        const data = await serviceInsertTransacao(categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, userid, tipo);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerGetTransacoes = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await serviceGetTransacoes();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerGetListaAtivos = async (req: Request, res: Response): Promise<void> => {
    try {
        const id : any = req.query.id;
        const b3 : any = req.query.b3;
        
        const data = await serviceGetListaAtivos(id, b3);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetConfigs = async (req: Request, res: Response): Promise<void> => {
    try {
        const id : any = req.query.id;
        
        const data = await serviceGetConfigs(id);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerUpdateConfigs = async (req: Request, res: Response): Promise<void> => {
    try {
        const hide_values : any = req.body.hide_values;
        
        const data = await serviceUpdateConfigs(hide_values);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerDeleteTransacao = async (req: Request, res: Response): Promise<void> => {
    try {
        const id : any = req.body.id;
        
        const data = await serviceDeleteTransacao(id);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetTransacaoId = async (req: Request, res: Response): Promise<void> => {
    try {
        const id : any = req.query.id;
        
        const data = await serviceGetTransacaoId(id);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerUpdateTransacao = async (req: Request, res: Response): Promise<void> => {
    try {
        const { categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, id, tipo } = req.body;
        const data = await serviceUpdateTransacao(categoria, corretora, ativo, negociacao, quantidade, preco, corretagem, emolumentos, impostos, id, tipo);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerTotalAtivos = async (req: Request, res: Response): Promise<void> => {
    const { type } = req.params;
    try {
        const data = await serviceGetTotalAtivos(type);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerValorTotalPatrimonio = async (req: Request, res: Response): Promise<void> => {
    const { type } = req.params;
    try {
        const data = await serviceGetValorTotalPatrimonio(type);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetAtivoMoeda = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.query;
    try {
        const data = await serviceGetAtivoMoeda(id);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerDadosB3 = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.query;
    try {
        const data = await serviceDadosB3(id);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerUpdateDadosB3 = async (req: Request, res: Response): Promise<void> => {
    try {
        const ticker : any = req.body.ticker;
        const valor : any = req.body.valor;
        const logo : any = req.body.logo;
        
        const data = await serviceUpdateDadosB3(ticker, valor, logo);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerAdicionarHistorico = async (req: Request, res: Response): Promise<void> => {
    try {
        const lista_ativo_id : any = req.body.lista_ativo_id;
        const valor : any = req.body.valor;
        
        const data = await serviceAdicionarHistorico(lista_ativo_id, valor);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerAdicionarHistoricoCliente = async (req: Request, res: Response): Promise<void> => {
    try {
        const lista_ativo_id : any = req.body.lista_ativo_id;
        const quantidade : any = req.body.quantidade;
        const ticker : any = req.body.ticker;
        
        const data = await serviceAdicionarHistoricoCliente(lista_ativo_id, quantidade, ticker);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetListaAtivosCliente = async (req: Request, res: Response): Promise<void> => {
    try {
        const id : any = req.query.id;
        const b3 : any = req.query.b3;
        
        const data = await serviceGetListaAtivosCliente(id, b3);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerConfigPercentual = async (req: Request, res: Response): Promise<void> => {
    const porcentagemAcao : any = req.body.porcentagemAcao;
    const porcentagemFII : any = req.body.porcentagemFII;
    const porcentagemFIAgro : any = req.body.porcentagemFIAgro;
    const porcentagemETFN : any = req.body.porcentagemETFN;
    const porcentagemETFI : any = req.body.porcentagemETFI;
    const porcentagemCriptomoedas : any = req.body.porcentagemCriptomoedas;
    const porcentagemFixa : any = req.body.porcentagemFixa;
    const porcentagemCaixa : any = req.body.porcentagemCaixa;
    const limit : any = req.body.limit;

    try {
        const data = await serviceConfigPercentual(porcentagemAcao, porcentagemFII, porcentagemFIAgro, porcentagemETFN, porcentagemETFI, porcentagemCriptomoedas, porcentagemFixa, porcentagemCaixa, limit);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerGetRelatorio = async (req: Request, res: Response): Promise<void> => {
    const { period } = req.params;
    const { mode } = req.params;
    try {
        const data = await serviceGetRelatorio(period, mode);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerCurrencyUpdate = async (req: Request, res: Response): Promise<void> => {
    try {
        const currency : any = req.body.currency;
        const valor : any = req.body.valor;

        const data = await serviceCurrencyUpdate(currency, valor);
       res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerInsertTreasure = async (req: Request, res: Response): Promise<void> => {
    try {
        const codigo : any = req.body.codigo;
        const nome : any = req.body.nome;
        const ativo : any = req.body.ativo;
        const data = await serviceInsertTreasure(codigo, nome, ativo);
       res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerInsertHistoricoTreasure = async (req: Request, res: Response): Promise<void> => {
    try {
        const codigo : any = req.body.codigo;
        const dataTime : any = req.body.dataTime;
        const valor : any = req.body.valor;
        const data = await serviceInsertHistoricoTreasure(codigo, dataTime, valor);
       res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetTreasure = async (req: Request, res: Response): Promise<void> => {
    const { codigo } = req.params;
    const { periodo } = req.params;
    try {
        const data = await serviceGetTreasure(codigo, periodo);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetTreasureNames = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await serviceGetTreasureNames();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerUpdateTreasure = async (req: Request, res: Response): Promise<void> => {    
    const codigo : any = req.body.codigo;
    try {
        const data = await serviceUpdateTreasure(codigo);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetListaIndicesB3 = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const data = await serviceGetListaIndicesB3();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetRankingIndicesB3 = async (req: Request, res: Response): Promise<void> => {
    const { indice } = req.params;
    try {
        const data = await serviceGetRankingIndicesB3(indice);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerUpdateEstatistica = async (req: Request, res: Response): Promise<void> => {
    try {
        const codigo : any = req.body.codigo;
        const min: any = req.body.min;
        const max : any = req.body.max;
        const atual : any = req.body.atual;
        const data = await serviceUpdateEstatistica(codigo, min, max, atual);
       res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetEstatisticas = async (req: Request, res: Response): Promise<void> => {
    const { codigo } = req.params;
    try {
        const data = await serviceGetEstatisticas(codigo);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerSummaryProfile = async (req: Request, res: Response): Promise<void> => {
    const { ativo, address1, address2, city, state, zip, country, phone, website, industry, industryKey, industryDisp, sector, sectorKey, sectorDisp, longBusinessSummary, fullTimeEmployees, companyOfficers } = req.body;
    console.log(ativo)
    try {
        const data = await serviceSummaryProfile(ativo, address1, address2, city, state, zip, country, phone, website, industry, industryKey, industryDisp, sector, sectorKey, sectorDisp, longBusinessSummary, fullTimeEmployees, companyOfficers);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerInsertSetores = async (req: Request, res: Response): Promise<void> => {
    const { companyName, ticker, sectorName, subSectorName, segmentName} = req.body;
    console.log(ticker)
    try {
        const data = await serviceInsertSetores(companyName, ticker, sectorName, subSectorName, segmentName);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerUpdateFii = async (req: Request, res: Response): Promise<void> => {
    const { ticker, sectorName, subSectorName, segmentName} = req.body;
    try {
        const data = await serviceUpdateFii(ticker, sectorName, subSectorName, segmentName);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerInsertBalanceSheet = async (req: Request, res: Response): Promise<void> => {
    const { ticker, endDate, cash, shortTermInvestments, netReceivables, inventory, otherCurrentAssets, totalCurrentAssets, longTermInvestments, propertyPlantEquipment, goodWill, intangibleAssets, otherAssets, deferredLongTermAssetCharges, totalAssets, accountsPayable, shortLongTermDebt, otherCurrentLiab, longTermDebt, otherLiab, minorityInterest, totalCurrentLiabilities, totalLiab, commonStock, retainedEarnings, treasuryStock, otherStockholderEquity, totalStockholderEquity, netTangibleAssets
    } = req.body;
    try {
        const data = await serviceInsertBalanceSheet(ticker, endDate, cash, shortTermInvestments, netReceivables, inventory, otherCurrentAssets, totalCurrentAssets, longTermInvestments, propertyPlantEquipment, goodWill, intangibleAssets, otherAssets, deferredLongTermAssetCharges, totalAssets, accountsPayable, shortLongTermDebt, otherCurrentLiab, longTermDebt, otherLiab, minorityInterest, totalCurrentLiabilities, totalLiab, commonStock, retainedEarnings, treasuryStock, otherStockholderEquity, totalStockholderEquity, netTangibleAssets
            );
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerInsertBalanceSheetHistory = async (req: Request, res: Response): Promise<void> => {
    const { ticker, endDate, cash, shortTermInvestments, netReceivables, inventory, otherCurrentAssets, totalCurrentAssets, longTermInvestments, propertyPlantEquipment, goodWill, intangibleAssets, otherAssets, deferredLongTermAssetCharges, totalAssets, accountsPayable, shortLongTermDebt, otherCurrentLiab, longTermDebt, otherLiab, minorityInterest, totalCurrentLiabilities, totalLiab, commonStock, retainedEarnings, treasuryStock, otherStockholderEquity, totalStockholderEquity, netTangibleAssets
    } = req.body;
    try {
        const data = await serviceInsertBalanceSheetHistory(ticker, endDate, cash, shortTermInvestments, netReceivables, inventory, otherCurrentAssets, totalCurrentAssets, longTermInvestments, propertyPlantEquipment, goodWill, intangibleAssets, otherAssets, deferredLongTermAssetCharges, totalAssets, accountsPayable, shortLongTermDebt, otherCurrentLiab, longTermDebt, otherLiab, minorityInterest, totalCurrentLiabilities, totalLiab, commonStock, retainedEarnings, treasuryStock, otherStockholderEquity, totalStockholderEquity, netTangibleAssets
            );
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerInsertDefaultKeyStatistics = async (req: Request, res: Response): Promise<void> => {
    const { ticker, priceHint, enterpriseValue, forwardPE, profitMargins, floatShares, sharesOutstanding, heldPercentInsiders, heldPercentInstitutions, beta, impliedSharesOutstanding, category, bookValue, priceToBook, fundFamily, legalType, lastFiscalYearEnd, nextFiscalYearEnd, mostRecentQuarter, earningsQuarterlyGrowth, netIncomeToCommon, trailingEps, forwardEps, pegRatio, lastSplitFactor, lastSplitDate, enterpriseToRevenue, enterpriseToEbitda, FiftyTwoWeekChange, SandP52WeekChange, lastDividendValue, lastDividendDate} = req.body;
    try {
        const data = await serviceInsertDefaultKeyStatistics(ticker, priceHint, enterpriseValue, forwardPE, profitMargins, floatShares, sharesOutstanding, heldPercentInsiders, heldPercentInstitutions, beta, impliedSharesOutstanding, category, bookValue, priceToBook, fundFamily, legalType, lastFiscalYearEnd, nextFiscalYearEnd, mostRecentQuarter, earningsQuarterlyGrowth, netIncomeToCommon, trailingEps, forwardEps, pegRatio, lastSplitFactor, lastSplitDate, enterpriseToRevenue, enterpriseToEbitda, FiftyTwoWeekChange, SandP52WeekChange, lastDividendValue, lastDividendDate);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerInsertFinancialData = async (req: Request, res: Response): Promise<void> => {
    const { ticker, currentPrice, targetHighPrice, targetLowPrice, targetMeanPrice, targetMedianPrice, recommendationMean, recommendationKey, numberOfAnalystOpinions, totalCash, totalCashPerShare, ebitda, totalDebt, quickRatio, currentRatio, totalRevenue, debtToEquity, revenuePerShare, returnOnAssets, returnOnEquity, grossProfits, freeCashflow, operatingCashflow, earningsGrowth, revenueGrowth, grossMargins, ebitdaMargins, operatingMargins, profitMargins, financialCurrency} = req.body;
    try {
        const data = await serviceInsertFinancialData(ticker, currentPrice, targetHighPrice, targetLowPrice, targetMeanPrice, targetMedianPrice, recommendationMean, recommendationKey, numberOfAnalystOpinions, totalCash, totalCashPerShare, ebitda, totalDebt, quickRatio, currentRatio, totalRevenue, debtToEquity, revenuePerShare, returnOnAssets, returnOnEquity, grossProfits, freeCashflow, operatingCashflow, earningsGrowth, revenueGrowth, grossMargins, ebitdaMargins, operatingMargins, profitMargins, financialCurrency);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerInsertCashDividends = async (req: Request, res: Response): Promise<void> => {
    const { ticker, assetIssued, paymentDate, rate, relatedTo, approvedOn, isinCode, label, lastDatePrior, remarks} = req.body;
    try {
        const data = await serviceInsertCashDividends(ticker, assetIssued, paymentDate, rate, relatedTo, approvedOn, isinCode, label, lastDatePrior, remarks);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerInsertStockDividends = async (req: Request, res: Response): Promise<void> => {
    const { ticker, assetIssued, factor, approvedOn, isinCode, label, lastDatePrior, remarks} = req.body;
    try {
        const data = await serviceInsertStockDividends(ticker, assetIssued, factor, approvedOn, isinCode, label, lastDatePrior, remarks);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerInsertSubscriptions = async (req: Request, res: Response): Promise<void> => {
    const { ticker, assetIssued, percentage, priceUnit, tradingPeriod, subscriptionDate, approvedOn, isinCode, label, lastDatePrior, remarks} = req.body;
    try {
        const data = await serviceInsertSubscriptions(ticker, assetIssued, percentage, priceUnit, tradingPeriod, subscriptionDate, approvedOn, isinCode, label, lastDatePrior, remarks);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const ControllerInsertHistoricalDataPrice = async (req: Request, res: Response): Promise<void> => {
    const { ticker, date, open, high, low, close, volume, adjustedClose } = req.body;
    try {
        const data = await serviceInsertHistoricalDataPrice(ticker, date, open, high, low, close, volume, adjustedClose);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const ControllerGetCotacao = async (req: Request, res: Response): Promise<void> => {
    const { ticker, periodo } = req.params;
    try {
        const data = await serviceGetCotacao(ticker, periodo);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter ativos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export {
    ControllerGetCotacao,
    ControllerInsertHistoricalDataPrice,
    ControllerInsertSubscriptions,
    ControllerInsertStockDividends,
    ControllerInsertCashDividends,
    ControllerInsertFinancialData,
    ControllerInsertDefaultKeyStatistics,
    ControllerInsertBalanceSheetHistory,
    ControllerInsertBalanceSheet,
    ControllerUpdateFii,
    ControllerInsertSetores,
    ControllerSummaryProfile,
    ControllerGetEstatisticas,
    ControllerUpdateEstatistica,
    ControllerGetRankingIndicesB3,
    ControllerGetListaIndicesB3,
    ControllerUpdateTreasure,
    ControllerGetTreasureNames,
    ControllerGetTreasure,
    ControllerInsertHistoricoTreasure,
    ControllerInsertTreasure,
    ControllerCurrencyUpdate,
    ControllerGetRelatorio,
    ControllerConfigPercentual,
    ControllerGetPercentualCategorias,
    ControllerGetListaAtivosCliente,
    ControllerAdicionarHistoricoCliente,
    ControllerAdicionarHistorico,
    ControllerUpdateDadosB3,
    ControllerDadosB3,
    ControllerGetAtivoMoeda,
    ControllerValorTotalPatrimonio,
    ControllerTotalAtivos,
    ControllerUpdateTransacao,
    ControllerGetTransacaoId,
    ControllerDeleteTransacao,
    ControllerUpdateConfigs,
    ControllerGetConfigs,
    ControllerGetListaAtivos,
    ControllerGetTransacoes,
    ControllerInsertTransacao,
    ControllerGetBrokers,
    ControllerGetCategorias,
    getGroupAtivos,
    getAllAtivos,
  };