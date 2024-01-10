const fetchApiOptionAtivo = async () => {
    try {
        const data = await fetch('https://www.fundamentus.com.br/proventos.php?papel=petr4&tipo=2');
        const response = await data.text();
        console.log(response)
        //return response; // Adicione esta linha para retornar a resposta como uma Promise
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        throw error; // Se ocorrer um erro, propague-o para quem chama a função
    }
};
fetchApiOptionAtivo();