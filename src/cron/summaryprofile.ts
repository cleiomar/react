

async function fetchsummaryProfile(ativo: any, address1: string, address2: string, city: string, state: string, zip: string, country: string, phone: string, website: string, industry: string, industryKey: string, industryDisp: string, sector: string, sectorKey: string, sectorDisp: string, longBusinessSummary: string, fullTimeEmployees: number, companyOfficers: any
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

const fetchDadossummaryProfile = async (ticker) => {
    try {
        const data = await fetch('https://brapi.dev/api/quote/'+ticker+'?modules=summaryProfile&token=7fRjckesBySAepeEseSBg5');
        const responseArray = await data.json();
        // const valor = responseArray.results[0].summaryProfile.regularMarketPrice;
        // const logo = responseArray.results[0].summaryProfile.logourl;
        //console.log(responseArray.results[0].summaryProfile.address1)
        //console.log(responseArray.results[0].summaryProfile.address1 +responseArray.results[0].summaryProfile.address2 +responseArray.results[0].summaryProfile.city +responseArray.results[0].summaryProfile.state +responseArray.results[0].summaryProfile.zip +responseArray.results[0].summaryProfile.country +responseArray.results[0].summaryProfile.phone +responseArray.results[0].summaryProfile.website +responseArray.results[0].summaryProfile.industry +responseArray.results[0].summaryProfile.industryKey +responseArray.results[0].summaryProfile.industryDisp +responseArray.results[0].summaryProfile.sector +responseArray.results[0].summaryProfile.sectorKey +responseArray.results[0].summaryProfile.sectorDisp +responseArray.results[0].summaryProfile.longBusinessSummary +responseArray.results[0].summaryProfile.fullTimeEmployees +responseArray.results[0].summaryProfile.companyOfficers)
        
        fetchsummaryProfile(ticker, responseArray.results[0].summaryProfile.address1, responseArray.results[0].summaryProfile.address2, responseArray.results[0].summaryProfile.city, responseArray.results[0].summaryProfile.state, responseArray.results[0].summaryProfile.zip, responseArray.results[0].summaryProfile.country, responseArray.results[0].summaryProfile.phone, responseArray.results[0].summaryProfile.website, responseArray.results[0].summaryProfile.industry, responseArray.results[0].summaryProfile.industryKey, responseArray.results[0].summaryProfile.industryDisp, responseArray.results[0].summaryProfile.sector, responseArray.results[0].summaryProfile.sectorKey, responseArray.results[0].summaryProfile.sectorDisp, responseArray.results[0].summaryProfile.longBusinessSummary, responseArray.results[0].summaryProfile.fullTimeEmployees, responseArray.results[0].summaryProfile.companyOfficers)
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}


const fetchApiOptionAtivo = async () => {
    try {
        const data = await fetch('http://localhost:3000/lista_ativos?b3=s');
        const response = await data.json();
        response.map(async (item: any) => {
            await fetchDadossummaryProfile(item.ativo_codigo);
            

        });
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        throw error; // Se ocorrer um erro, propague-o para quem chama a função
    }
};
fetchApiOptionAtivo();