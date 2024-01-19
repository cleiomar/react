async function fetchUpdateLista(codigo: any): Promise<any> {
    try {
        const response = await fetch('http://localhost:3000/update_lista', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Certifique-se de ajustar o tipo de conteúdo conforme necessário
                // Adicione outros cabeçalhos conforme necessário
            },
            body: JSON.stringify({ codigo: codigo }), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(response);
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}

async function fetch3(ativo: any, address1: string, address2: string, city: string, state: string, zip: string, country: string, phone: string, website: string, industry: string, industryKey: string, industryDisp: string, sector: string, sectorKey: string, sectorDisp: string, longBusinessSummary: string, fullTimeEmployees: number, companyOfficers: any
    ): Promise<any> {
        console.log(ativo)
    try {
        const response = await fetch('http://localhost:3000/summaryProfile/', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ativo: ativo,
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                zip: zip,
                country: country,
                phone: phone,
                website: website,
                industry: industry,
                industryKey: industryKey,
                industryDisp: industryDisp,
                sector: sector,
                sectorKey: sectorKey,
                sectorDisp: sectorDisp,
                longBusinessSummary: longBusinessSummary,
                fullTimeEmployees: fullTimeEmployees
              }), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(response);
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}

async function fetch2(ticker: string, priceHint: number, enterpriseValue: number, forwardPE: number, profitMargins: number, floatShares: number, sharesOutstanding: number, heldPercentInsiders: number, heldPercentInstitutions: number, beta: number, impliedSharesOutstanding: number, category: number, bookValue: number, priceToBook: number, fundFamily: number, legalType: number, lastFiscalYearEnd: string, nextFiscalYearEnd: string, mostRecentQuarter: string, earningsQuarterlyGrowth: number, netIncomeToCommon: number, trailingEps: number, forwardEps: number, pegRatio: number, lastSplitFactor: string, lastSplitDate: number, enterpriseToRevenue: number, enterpriseToEbitda: number, FiftyTwoWeekChange: number, SandP52WeekChange: number, lastDividendValue: number, lastDividendDate: string): Promise<any> {

    try {
        const response = await fetch('http://localhost:3000/default_key_statistics', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ticker, priceHint, enterpriseValue, forwardPE, profitMargins, floatShares, sharesOutstanding, heldPercentInsiders, heldPercentInstitutions, beta, impliedSharesOutstanding, category, bookValue, priceToBook, fundFamily, legalType, lastFiscalYearEnd, nextFiscalYearEnd, mostRecentQuarter, earningsQuarterlyGrowth, netIncomeToCommon, trailingEps, forwardEps, pegRatio, lastSplitFactor, lastSplitDate, enterpriseToRevenue, enterpriseToEbitda, FiftyTwoWeekChange, SandP52WeekChange, lastDividendValue, lastDividendDate}), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(response);
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}

async function fetch4(ticker: string, endDate: string, cash: number, shortTermInvestments: number, netReceivables: number, inventory: number, otherCurrentAssets: number, totalCurrentAssets: number, longTermInvestments: number, propertyPlantEquipment: number, goodWill: number, intangibleAssets: number, otherAssets: number, deferredLongTermAssetCharges: number, totalAssets: number, accountsPayable: number, shortLongTermDebt: number, otherCurrentLiab: number, longTermDebt: number, otherLiab: number, minorityInterest: number, totalCurrentLiabilities: number, totalLiab: number, commonStock: number, retainedEarnings: number, treasuryStock: number, otherStockholderEquity: number, totalStockholderEquity: number, netTangibleAssets: number): Promise<any> {

    try {
        const response = await fetch('http://localhost:3000/balance_sheet_statements', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ticker, endDate, cash, shortTermInvestments, netReceivables, inventory, otherCurrentAssets, totalCurrentAssets, longTermInvestments, propertyPlantEquipment, goodWill, intangibleAssets, otherAssets, deferredLongTermAssetCharges, totalAssets, accountsPayable, shortLongTermDebt, otherCurrentLiab, longTermDebt, otherLiab, minorityInterest, totalCurrentLiabilities, totalLiab, commonStock, retainedEarnings, treasuryStock, otherStockholderEquity, totalStockholderEquity, netTangibleAssets}), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(response);
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}

async function fetch5(ticker: string, endDate: string, cash: number, shortTermInvestments: number, netReceivables: number, inventory: number, otherCurrentAssets: number, totalCurrentAssets: number, longTermInvestments: number, propertyPlantEquipment: number, goodWill: number, intangibleAssets: number, otherAssets: number, deferredLongTermAssetCharges: number, totalAssets: number, accountsPayable: number, shortLongTermDebt: number, otherCurrentLiab: number, longTermDebt: number, otherLiab: number, minorityInterest: number, totalCurrentLiabilities: number, totalLiab: number, commonStock: number, retainedEarnings: number, treasuryStock: number, otherStockholderEquity: number, totalStockholderEquity: number, netTangibleAssets: number): Promise<any> {

    try {
        const response = await fetch('http://localhost:3000/balance_sheet_history', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ticker, endDate, cash, shortTermInvestments, netReceivables, inventory, otherCurrentAssets, totalCurrentAssets, longTermInvestments, propertyPlantEquipment, goodWill, intangibleAssets, otherAssets, deferredLongTermAssetCharges, totalAssets, accountsPayable, shortLongTermDebt, otherCurrentLiab, longTermDebt, otherLiab, minorityInterest, totalCurrentLiabilities, totalLiab, commonStock, retainedEarnings, treasuryStock, otherStockholderEquity, totalStockholderEquity, netTangibleAssets}), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(response);
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}

async function fetch6(ticker: string, currentPrice: number, targetHighPrice: number, targetLowPrice: number, targetMeanPrice: number, targetMedianPrice: number, recommendationMean: number, recommendationKey: string, numberOfAnalystOpinions: number, totalCash: number, totalCashPerShare: number, ebitda: number, totalDebt: number, quickRatio: number, currentRatio: number, totalRevenue: number, debtToEquity: number, revenuePerShare: number, returnOnAssets: number, returnOnEquity: number, grossProfits: number, freeCashflow: number, operatingCashflow: number, earningsGrowth: number, revenueGrowth: number, grossMargins: number, ebitdaMargins: number, operatingMargins: number, profitMargins: number, financialCurrency: string): Promise<any> {

    try {
        const response = await fetch('http://localhost:3000/financialdata', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ticker, currentPrice, targetHighPrice, targetLowPrice, targetMeanPrice, targetMedianPrice, recommendationMean, recommendationKey, numberOfAnalystOpinions, totalCash, totalCashPerShare, ebitda, totalDebt, quickRatio, currentRatio, totalRevenue, debtToEquity, revenuePerShare, returnOnAssets, returnOnEquity, grossProfits, freeCashflow, operatingCashflow, earningsGrowth, revenueGrowth, grossMargins, ebitdaMargins, operatingMargins, profitMargins, financialCurrency}), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(response);
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}

async function fetch7(ticker: string, assetIssued: string, paymentDate: string, rate: number, relatedTo: string, approvedOn: string, isinCode: string, label: string, lastDatePrior: string, remarks: string): Promise<any> {

    try {
        const response = await fetch('http://localhost:3000/cashdividends', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ticker, assetIssued, paymentDate, rate, relatedTo, approvedOn, isinCode, label, lastDatePrior, remarks}), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(response);
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}

async function fetch8(ticker: string, assetIssued: string, factor: number, approvedOn: string, isinCode: string, label: string, lastDatePrior: string, remarks: string): Promise<any> {

    try {
        const response = await fetch('http://localhost:3000/stockdividends', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ticker, assetIssued, factor, approvedOn, isinCode, label, lastDatePrior, remarks}), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(response);
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}

async function fetch9(ticker: string, assetIssued: string, percentage: number, priceUnit: number, tradingPeriod: string, subscriptionDate: string, approvedOn: string, isinCode: string, label: string, lastDatePrior: string, remarks: string): Promise<any> {

    try {
        const response = await fetch('http://localhost:3000/subscriptions', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ticker, assetIssued, percentage, priceUnit, tradingPeriod, subscriptionDate, approvedOn, isinCode, label, lastDatePrior, remarks}), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(response);
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}

const fetchDados2 = async (ticker) => {
    try {
        const data = await fetch('https://brapi.dev/api/quote/'+ticker+'?range=10y&dividends=true&modules=summaryProfile,balanceSheetHistory,balanceSheetHistoryQuarterly,defaultKeyStatistics,incomeStatementHistory,financialData&token=7fRjckesBySAepeEseSBg5');
        const responseArray = await data.json();
        // console.log(responseArray)
        const dados = responseArray.results[0].defaultKeyStatistics;
        const dados3 = responseArray.results[0].financialData;
        fetch6(ticker, dados3.currentPrice, dados3.targetHighPrice, dados3.targetLowPrice, dados3.targetMeanPrice, dados3.targetMedianPrice, dados3.recommendationMean, dados3.recommendationKey, dados3.numberOfAnalystOpinions, dados3.totalCash, dados3.totalCashPerShare, dados3.ebitda, dados3.totalDebt, dados3.quickRatio, dados3.currentRatio, dados3.totalRevenue, dados3.debtToEquity, dados3.revenuePerShare, dados3.returnOnAssets, dados3.returnOnEquity, dados3.grossProfits, dados3.freeCashflow, dados3.operatingCashflow, dados3.earningsGrowth, dados3.revenueGrowth, dados3.grossMargins, dados3.ebitdaMargins, dados3.operatingMargins, dados3.profitMargins, dados3.financialCurrency);
        fetch3(ticker, responseArray.results[0].summaryProfile.address1, responseArray.results[0].summaryProfile.address2, responseArray.results[0].summaryProfile.city, responseArray.results[0].summaryProfile.state, responseArray.results[0].summaryProfile.zip, responseArray.results[0].summaryProfile.country, responseArray.results[0].summaryProfile.phone, responseArray.results[0].summaryProfile.website, responseArray.results[0].summaryProfile.industry, responseArray.results[0].summaryProfile.industryKey, responseArray.results[0].summaryProfile.industryDisp, responseArray.results[0].summaryProfile.sector, responseArray.results[0].summaryProfile.sectorKey, responseArray.results[0].summaryProfile.sectorDisp, responseArray.results[0].summaryProfile.longBusinessSummary, responseArray.results[0].summaryProfile.fullTimeEmployees, responseArray.results[0].summaryProfile.companyOfficers)
        fetch2(ticker, dados.priceHint, dados.enterpriseValue, dados.forwardPE, dados.profitMargins, dados.floatShares, dados.sharesOutstanding, dados.heldPercentInsiders, dados.heldPercentInstitutions, dados.beta, dados.impliedSharesOutstanding, dados.category, dados.bookValue, dados.priceToBook, dados.fundFamily, dados.legalType, dados.lastFiscalYearEnd, dados.nextFiscalYearEnd, dados.mostRecentQuarter, dados.earningsQuarterlyGrowth, dados.netIncomeToCommon, dados.trailingEps, dados.forwardEps, dados.pegRatio, dados.lastSplitFactor, dados.lastSplitDate, dados.enterpriseToRevenue, dados.enterpriseToEbitda, dados["52WeekChange"], dados.SandP52WeekChange, dados.lastDividendValue, dados.lastDividendDate);
        const dados2 = responseArray.results[0].balanceSheetHistoryQuarterly.balanceSheetStatements;
        dados2.map((item, index) => {
                fetch4(ticker, item.endDate, item.cash, item.shortTermInvestments, item.netReceivables, item.inventory, item.otherCurrentAssets, item.totalCurrentAssets, item.longTermInvestments, item.propertyPlantEquipment, item.goodWill, item.intangibleAssets, item.otherAssets, item.deferredLongTermAssetCharges, item.totalAssets, item.accountsPayable, item.shortLongTermDebt, item.otherCurrentLiab, item.longTermDebt, item.otherLiab, item.minorityInterest, item.totalCurrentLiabilities, item.totalLiab, item.commonStock, item.retainedEarnings, item.treasuryStock, item.otherStockholderEquity, item.totalStockholderEquity, item.netTangibleAssets);
        });
        const dados4 = responseArray.results[0].balanceSheetHistory.balanceSheetStatements;
        dados4.map((item, index) => {
                fetch5(ticker, item.endDate, item.cash, item.shortTermInvestments, item.netReceivables, item.inventory, item.otherCurrentAssets, item.totalCurrentAssets, item.longTermInvestments, item.propertyPlantEquipment, item.goodWill, item.intangibleAssets, item.otherAssets, item.deferredLongTermAssetCharges, item.totalAssets, item.accountsPayable, item.shortLongTermDebt, item.otherCurrentLiab, item.longTermDebt, item.otherLiab, item.minorityInterest, item.totalCurrentLiabilities, item.totalLiab, item.commonStock, item.retainedEarnings, item.treasuryStock, item.otherStockholderEquity, item.totalStockholderEquity, item.netTangibleAssets);
        });
        const dados5 = responseArray.results[0].dividendsData.cashDividends;
        dados5.map((item, index) => {
                fetch7(ticker, item.assetIssued, item.paymentDate, item.rate, item.relatedTo, item.approvedOn, item.isinCode, item.label, item.lastDatePrior, item.remarks);
        });
        const dados6 = responseArray.results[0].dividendsData.stockDividends;
        dados6.map((item, index) => {
                fetch8(ticker, item.assetIssued, item.factor, item.approvedOn, item.isinCode, item.label, item.lastDatePrior, item.remarks);
        });        
        const dados7 = responseArray.results[0].dividendsData.subscriptions;
        dados7.map((item, index) => {
                fetch9(ticker, item.assetIssued, item.percentage, item.priceUnit, item.tradingPeriod, item.subscriptionDate, item.approvedOn, item.isinCode, item.label, item.lastDatePrior, item.remarks);
        });
        fetchUpdateLista(ticker);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

const fetchApiOptionAtivo = async () => {
    try {
        const data = await fetch('http://localhost:3000/lista_ativos?b3=s');
        const response = await data.json();
        response.map(async (item: any) => {
            await fetchDados2(item.ativo_codigo);
        });
        //return response; // Adicione esta linha para retornar a resposta como uma Promise
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        throw error; // Se ocorrer um erro, propague-o para quem chama a função
    }
};
fetchApiOptionAtivo();


// let acao = 'SAPR11';
// fetchDados2(acao.toLowerCase());