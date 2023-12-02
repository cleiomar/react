async function fetchAdicionarHistorico(lista_ativo_id: any, ticker: any, valor: number): Promise<any> {
    try {
        const response = await fetch('http://localhost:3000/adicionar_historico', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Certifique-se de ajustar o tipo de conteúdo conforme necessário
                // Adicione outros cabeçalhos conforme necessário
            },
            body: JSON.stringify({ lista_ativo_id: lista_ativo_id, ticker: ticker, valor: valor }), // Converte os dados para o formato JSON
        });

        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Erro na requisição PUT:', error);
        throw error; // Você pode manipular o erro ou relançá-lo conforme necessário
    }
}

const fetchApiOptionAtivo = async () => {
    try {
        const data = await fetch('http://localhost:3000/lista_ativos?b3=s');
        const response = await data.json();
        response.map(async (item: any) => {
            await fetchAdicionarHistorico( item.id, item.ativo_codigo,item.ativo_valor)
        });
        //return response; // Adicione esta linha para retornar a resposta como uma Promise
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        throw error; // Se ocorrer um erro, propague-o para quem chama a função
    }
};
fetchApiOptionAtivo();