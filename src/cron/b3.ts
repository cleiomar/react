async function fetchUpdateDadosB3(ticker: any, valor: number): Promise<any> {
    try {
        const response = await fetch('http://localhost:3000/atualizar_dados_b3', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Certifique-se de ajustar o tipo de conteúdo conforme necessário
                // Adicione outros cabeçalhos conforme necessário
            },
            body: JSON.stringify({ ticker: ticker, valor: valor }), // Converte os dados para o formato JSON
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

const fetchDadosB3 = async (ticker) => {
    try {
        const data = await fetch('https://brapi.dev/api/quote/'+ticker+'?token=7fRjckesBySAepeEseSBg5');
        const responseArray = await data.json();
        const valor = responseArray.results[0].regularMarketPrice;
        fetchUpdateDadosB3(ticker, valor)
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

const fetchApiOptionAtivo = async () => {
    try {
        const data = await fetch('http://localhost:3000/lista_ativos?b3=s');
        const response = await data.json();
        response.map(async (item: any) => {
            await fetchDadosB3(item.ativo_codigo);
        });
        //return response; // Adicione esta linha para retornar a resposta como uma Promise
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        throw error; // Se ocorrer um erro, propague-o para quem chama a função
    }
};
fetchApiOptionAtivo();