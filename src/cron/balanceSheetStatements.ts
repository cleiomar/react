import { Console } from "console";


async function fetchsummaryProfile(ticker: string, endDate: string, cash: number, shortTermInvestments: number, netReceivables: number, inventory: number, otherCurrentAssets: number, totalCurrentAssets: number, longTermInvestments: number, propertyPlantEquipment: number, goodWill: number, intangibleAssets: number, otherAssets: number, deferredLongTermAssetCharges: number, totalAssets: number, accountsPayable: number, shortLongTermDebt: number, otherCurrentLiab: number, longTermDebt: number, otherLiab: number, minorityInterest: number, totalCurrentLiabilities: number, totalLiab: number, commonStock: number, retainedEarnings: number, treasuryStock: number, otherStockholderEquity: number, totalStockholderEquity: number, netTangibleAssets: number): Promise<any> {

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

const fetchDadossummaryProfile = async (ticker) => {
    try {
        const data = await fetch('https://brapi.dev/api/quote/'+ticker+'?modules=summaryProfile,balanceSheetHistory,balanceSheetHistoryQuarterly,defaultKeyStatistics,incomeStatementHistory,financialData&token=7fRjckesBySAepeEseSBg5');
        const responseArray = await data.json();
        //console.log(data)
        // const valor = responseArray.results[0].summaryProfile.regularMarketPrice;
        // const logo = responseArray.results[0].summaryProfile.logourl;
        const dados = responseArray.results[0].balanceSheetHistoryQuarterly.balanceSheetStatements;
        dados.map((item, index) => {
                //console.log(ticker+item.endDate+item.cash+item.shortTermInvestments+item.netReceivables+item.inventory+item.otherCurrentAssets+item.totalCurrentAssets+item.longTermInvestments+item.propertyPlantEquipment+item.goodWill+item.intangibleAssets+item.otherAssets+item.deferredLongTermAssetCharges+item.totalAssets+item.accountsPayable+item.shortLongTermDebt+item.otherCurrentLiab+item.longTermDebt+item.otherLiab+item.minorityInterest+item.totalCurrentLiabilities+item.totalLiab+item.commonStock+item.retainedEarnings+item.treasuryStock+item.otherStockholderEquity+item.totalStockholderEquity+item.netTangibleAssets)
                fetchsummaryProfile(ticker, item.endDate, item.cash, item.shortTermInvestments, item.netReceivables, item.inventory, item.otherCurrentAssets, item.totalCurrentAssets, item.longTermInvestments, item.propertyPlantEquipment, item.goodWill, item.intangibleAssets, item.otherAssets, item.deferredLongTermAssetCharges, item.totalAssets, item.accountsPayable, item.shortLongTermDebt, item.otherCurrentLiab, item.longTermDebt, item.otherLiab, item.minorityInterest, item.totalCurrentLiabilities, item.totalLiab, item.commonStock, item.retainedEarnings, item.treasuryStock, item.otherStockholderEquity, item.totalStockholderEquity, item.netTangibleAssets);
        });
        //console.log(dados[0].endDate)

        //console.log(responseArray.results[0].summaryProfile.address1 +responseArray.results[0].summaryProfile.address2 +responseArray.results[0].summaryProfile.city +responseArray.results[0].summaryProfile.state +responseArray.results[0].summaryProfile.zip +responseArray.results[0].summaryProfile.country +responseArray.results[0].summaryProfile.phone +responseArray.results[0].summaryProfile.website +responseArray.results[0].summaryProfile.industry +responseArray.results[0].summaryProfile.industryKey +responseArray.results[0].summaryProfile.industryDisp +responseArray.results[0].summaryProfile.sector +responseArray.results[0].summaryProfile.sectorKey +responseArray.results[0].summaryProfile.sectorDisp +responseArray.results[0].summaryProfile.longBusinessSummary +responseArray.results[0].summaryProfile.fullTimeEmployees +responseArray.results[0].summaryProfile.companyOfficers)
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}
fetchDadossummaryProfile('BBAS3');

// const fetchApiOptionAtivo = async () => {
//     try {
//         const data = await fetch('http://localhost:3000/lista_ativos?b3=s');
//         const response = await data.json();
//         response.map(async (item: any) => {
//             await fetchDadossummaryProfile(item.ativo_codigo);
            

//         });
//     } catch (error) {
//         console.error('Erro ao buscar dados da API:', error);
//         throw error; // Se ocorrer um erro, propague-o para quem chama a função
//     }
// };
// fetchApiOptionAtivo();