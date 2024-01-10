import { differenceInCalendarDays, format, parse } from 'date-fns';

function formatData(data: any) {

  var date = new Date(data);

  // Extraia os componentes da data e hora
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adicione 1 ao mês, pois os meses são baseados em zero
  var day = date.getDate().toString().padStart(2, '0');
  var hours = date.getHours().toString().padStart(2, '0');
  var minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function formatDataTime(data: any) {

  var date = new Date(data);

  // Extraia os componentes da data e hora
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adicione 1 ao mês, pois os meses são baseados em zero
  var day = date.getDate().toString().padStart(2, '0');
  var hours = date.getHours().toString().padStart(2, '0');
  var minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function converterDataParaAmericano(dataBrasileira: string): string {
  const databr = parse(dataBrasileira, 'dd/MM/yyyy', new Date());
  return format(databr, 'yyyy-MM-dd');
}

function converterDataParaBrasil(dataBrasileira: string): string {
  const partesDataHora = dataBrasileira.split('T');
  const data = partesDataHora[0].split('-');
  const hora = partesDataHora[1].split(':');

  const dataNovo = `${data[2]}/${data[1]}/${data[0]}`;

  return `${dataNovo}`;
}

function removeCurrency(value: string | undefined | null): number {
  if (typeof value === 'string' && value.trim() !== '') {
    let withoutCurrencySymbol = value.replace('R$', '');
    withoutCurrencySymbol = withoutCurrencySymbol.replace('US$', '');
    withoutCurrencySymbol = withoutCurrencySymbol.replace('€', '');
    const cleanedValue = withoutCurrencySymbol.replace(/\./g, '').replace(',', '.');
    const parsedValue = parseFloat(cleanedValue);
    return isNaN(parsedValue) ? 0 : parsedValue;
  }
  return 0;
}

function removeTrailingZeros(number: number): string {
  // Converte o número para uma string e, em seguida, para um número novamente
  const stringWithoutTrailingZeros = parseFloat(number.toString()).toFixed(10);

  // Remove os zeros à direita
  const stringWithoutTrailingZerosCleaned = stringWithoutTrailingZeros.replace(/\.?0+$/, '');

  return stringWithoutTrailingZerosCleaned;
}

const formatCurrency2 = (value: string | undefined | null, moeda: number): string => {
  // Verifica se value é uma string e não é undefined ou null
  if (typeof value === 'string' && value !== undefined && value !== null) {
    const numericValue = parseFloat(value);

    let currencyCode;
    switch (moeda) {
      case 1:
        currencyCode = 'BRL'; // Real
        break;
      case 2:
        currencyCode = 'USD'; // Dólar
        break;
      case 3:
        currencyCode = 'EUR'; // Euro
        break;
      default:
        currencyCode = 'BRL'; // Real (padrão)
        break;
    }

    const formattedValue = numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formattedValue;
  } else {
    // Retorna uma string padrão ou faz algo apropriado se value não for uma string
    return 'Valor Inválido';
  }
};

const caixa = (value: string | undefined | null, moeda: number): string => {
  // Verifica se value é uma string e não é undefined ou null
  if (typeof value === 'string' && value !== undefined && value !== null) {
    const numericValue = parseFloat(value);

    let currencyCode;
    switch (moeda) {
      default:
        currencyCode = 'BRL'; // Real (padrão)
        break;
    }

    const formattedValue = numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formattedValue;
  } else {
    // Retorna uma string padrão ou faz algo apropriado se value não for uma string
    return 'Valor Inválido';
  }
};

const formatCurrency = (value: string | undefined | null): string => {
  // Verifica se value é uma string e não é undefined ou null
  if (typeof value === 'string' && value !== undefined && value !== null) {
    const numericValue = value.replace(/[^0-9]/g, '');
    const formattedValue = Number(Number(numericValue) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formattedValue;
  } else {
    value = parseFloat(value).toFixed(2)
    const numericValue = value.replace(/[^0-9]/g, '');
    const formattedValue = Number(Number(numericValue) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formattedValue;
  }
};

const formatDate = (date: string | number | Date) => {
  if (date) {
    const dt = new Date(date);
    const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
    const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
    return day + '/' + month + '/' + dt.getFullYear();
  }
  return '';
};

function capitalizeLetters(name: string): string {
  return name.toUpperCase();
}

function categoria_color(categoria) {
  switch (categoria) {
    case 1:
      return 'categoria-color-acoes float-left pb-10';
      break;
    case 2:
      return 'categoria-color-fii float-left pb-10';
      break;
    case 3:
      return 'categoria-color-fiagro float-left pb-10';
      break;
    case 4:
      return 'categoria-color-etfn float-left pb-10';
      break;
    case 5:
      return 'categoria-color-etfi float-left pb-10';
      break;
    case 6:
      return 'categoria-color-criptomoedas float-left pb-10';
      break;
    case 7:
      return 'categoria-color-fixa float-left pb-10';
      break;
    case 8:
      return 'categoria-color-caixa float-left pb-10';
      break;
  }
}

function calcularPorcentagem(parte, total) {
  if (total === 0 || parte === 0) {
    return '0.00';
  }
  if (typeof parte !== 'number' || typeof total !== 'number' || total === 0) {
    return 'Entrada inválida. Certifique-se de que os valores são números e que o denominador não é zero.';
  }

  const porcentagem = (parte / total) * 100;
  return porcentagem.toFixed(2);
}

function calcularResto(dividendo: number, divisor: number): number | string {
  return dividendo - divisor;
}


function difference(valorMenor, valorMaior) {
  if (valorMenor === 0 || valorMaior === 0) {
    return '0.00';
  }
  const diferenca = valorMaior - valorMenor;

  const percentual = (diferenca / valorMenor) * 100;

  return percentual.toFixed(2);
}

function getLastDayMonths(quantidade) {
  const dataAtual = new Date();
  let meses = '';

  for (let i = 0; i < quantidade; i++) {
    const mes = dataAtual.getMonth(); // Os meses em JavaScript são baseados em zero
    const anoAtual = dataAtual.getFullYear();

    const mesFormatado = mes < 10 ? `0${mes}` : mes;
    const anoFormatado = anoAtual;
    const data = new Date(anoFormatado, mesFormatado, 0);

    // Adiciona um dia à data
    data.setDate(data.getDate() + 1);
    // Formata a data como "YYYY-MM-DD" e remove o primeiro e último caractere
    const ultimoDia = data.toISOString().split('T')[0];
    meses += `'${ultimoDia}',`;

    dataAtual.setMonth(dataAtual.getMonth() - 1);
  }

  // Remove a vírgula extra no final, se existir
  meses = meses.slice(0, -1);

  return meses;
}

function obterArrayMesesAbreviados(quantidadeMeses: number): string[] {
  const hoje = new Date();
  const arrayMesesAbreviados = Array.from({ length: quantidadeMeses }, (_, index) => {
    const data = new Date(hoje.getFullYear(), hoje.getMonth() - index, 1);
    return data.toLocaleDateString('en-US', { month: 'short' });
  }).reverse();

  return arrayMesesAbreviados;
}

const formatoRealSemCifrao = (value: string): string => {
  // Remove caracteres não numéricos
  const numericValue = value.replace(/[^0-9]/g, '');

  // Converte para número e formata como número decimal com duas casas decimais
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(numericValue) / 100);

  return formattedValue;
};

function converterBRLParaNumero(valorBRL) {
  return parseFloat(valorBRL.replace(/\./g, '').replace(',', '.'));
}
function calcularJurosCompostos(aporteInicialBRL, aporteMensalBRL, taxaJuros, tempoMeses) {
  // Convertendo os valores BRL para números
  const aporteInicial = converterBRLParaNumero(aporteInicialBRL);
  const aporteMensal = converterBRLParaNumero(aporteMensalBRL);

  const taxaJurosDecimal = taxaJuros / 100; // Convertendo a taxa de porcentagem para decimal
  let valorTotal = aporteInicial;
  let aporteMeses;

  for (let i = 0; i < tempoMeses; i++) {
    valorTotal = valorTotal * (1 + taxaJurosDecimal) + aporteMensal;
  }

  const valorJuros = valorTotal - (aporteInicial + aporteMensal * tempoMeses);
  const valorTotalInvestido = aporteInicial + aporteMensal * tempoMeses;

  // Adicionando Math.pow para calcular juros compostos
  const valorTotalComJurosCompostos = aporteInicial * Math.pow(1 + taxaJurosDecimal, tempoMeses) +
    aporteMensal * ((Math.pow(1 + taxaJurosDecimal, tempoMeses) - 1) / taxaJurosDecimal);

  return {
    valorTotal: valorTotal.toFixed(2),
    valorJuros: valorJuros.toFixed(2),
    valorTotalInvestido: valorTotalInvestido.toFixed(2),
    valorTotalComJurosCompostos: valorTotalComJurosCompostos.toFixed(2),
  };
}

function calcularJurosCompostosTabela(aporteInicialBRL, aporteMensalBRL, taxaJuros, tempoMeses) {
  const aporteInicial = converterBRLParaNumero(aporteInicialBRL);
  const aporteMensal = converterBRLParaNumero(aporteMensalBRL);
  const taxaJurosDecimal = taxaJuros / 100; //

  let resultados = [];
  resultados.push({
    mes: 0,
    juros: 0,
    totalInvestido: aporteInicial,
    totalJuros: 0,
    totalAcumulado: aporteInicial,
  });
  let valorTotal = aporteInicial;
  let valorTotalInvestido = aporteInicial;
  let valorTotalJuros = 0;

  for (let i = 1; i <= tempoMeses; i++) {
    const valorJuros = valorTotal * taxaJurosDecimal;
    valorTotal = valorTotal * (1 + taxaJurosDecimal) + aporteMensal;

    valorTotalJuros += valorJuros;
    valorTotalInvestido += aporteMensal;

    resultados.push({
      mes: i,
      juros: valorJuros.toFixed(2),
      totalInvestido: valorTotalInvestido.toFixed(2),
      totalJuros: valorTotalJuros.toFixed(2),
      totalAcumulado: valorTotal.toFixed(2),
    });
  }

  return resultados;
}

function imprimirTabela(resultados) {
  resultados.forEach((resultado) => {

    `${resultado.mes}\tR$${resultado.juros}\tR$${resultado.totalInvestido}\tR$${resultado.totalJuros}\tR$${resultado.totalAcumulado}`

  });
}

function removerFormatacaoNumero(valorFormatado) {
  return parseFloat(valorFormatado.replace(/\./g, '').replace(',', '.'));
}

function calcularVariaveis(media, valorMaximo, valorMinimo) {
  if (media <= 0 || valorMaximo <= 0 || valorMinimo <= 0) {
    throw new Error('Os valores devem ser maiores que zero.');
  }

  const doisTercoMedia = (2 / 3) * media;
  const umTercoMedia = (1 / 3) * media;

  if (doisTercoMedia > valorMaximo || umTercoMedia > valorMaximo) {
    throw new Error('Os valores calculados excedem o valor máximo permitido.');
  }

  if (umTercoMedia < valorMinimo || doisTercoMedia < valorMinimo) {
    throw new Error('Os valores calculados são menores que o valor mínimo permitido.');
  }

  return { variavel1: doisTercoMedia, variavel2: umTercoMedia };
}

function dividirEmTresPartes(media, maiorValor) {
  if (media <= 0 || maiorValor <= 0) {
    throw new Error('Os valores devem ser maiores que zero.');
  }

  const parte = media / 3;

  if (parte > maiorValor) {
    throw new Error('A parte calculada excede o maior valor permitido.');
  }

  const variavel1 = media;
  const variavel2 = media + parte;
  const variavel3 = media + 2 * parte;

  if (variavel2 > maiorValor || variavel3 > maiorValor) {
    throw new Error('Os valores calculados excedem o maior valor permitido.');
  }

  return { variavel1, variavel2, variavel3 };
}

function obterDatasEmTimestamp() {
  // Obter a data de hoje
  const hoje = new Date();

  // Obter a data de uma semana atrás
  const umaSemanaAtras = new Date();
  umaSemanaAtras.setDate(hoje.getDate() - 7);

  // Converter as datas para timestamp
  const timestampHoje = Math.floor(hoje.getTime() / 1000); // dividido por 1000 para converter para segundos
  const timestampUmaSemanaAtras = Math.floor(umaSemanaAtras.getTime() / 1000);

  return {
    hoje: timestampHoje,
    umaSemanaAtras: timestampUmaSemanaAtras
  };
}

function timestampToDate(timestamp) {
  const date = new Date(timestamp);
  let data = date.toLocaleDateString('pt-BR')
  return data;
}

function calcularCorPorcentagem(percentage) {
  // Cores da gradiente
  const cores = [
    "#7a9a01", "#939d00", "#ac9f00", "#c5a000", "#dea000",
    "#ea9812", "#f59021", "#ff882f", "#fd793c", "#f86a47",
    "#f15d51", "#e7515a"
  ];

  // Garante que a porcentagem está no intervalo [0, 100]
  const porcentagemClamp = Math.min(100, Math.max(0, percentage));

  // Calcula o índice da cor na gradiente
  const indiceCor = Math.round((porcentagemClamp / 100) * (cores.length - 1));

  // Retorna a cor correspondente
  return cores[indiceCor];
}

function obterTrimestre(dataString) {
  // Validar a string de data
  const regex = /^(\d{1,2})-(\d{4})$/;
  const match = dataString.match(regex);

  if (!match) {
    console.error("Formato de data inválido. Por favor, forneça a data no formato 'M-YYYY'.");
    return null;
  }

  // Extrair o mês e o ano
  const mes = parseInt(match[1]);
  const ano = parseInt(match[2]);

  // Validar os valores extraídos
  if (isNaN(mes) || isNaN(ano) || mes < 1 || mes > 12) {
    console.error("Valores inválidos extraídos. Certifique-se de fornecer um mês válido (1-12) e um ano válido.");
    return null;
  }

  // Calcular o trimestre
  const trimestre = Math.ceil(mes / 3);

  // Exibir o resultado
  return trimestre;
}

function mesNome(num) {
  let numString = String(num); // Ou use num.toString() se preferir
  let mes = numString.split('-');
  mes = parseInt(mes[0]);
  switch (mes) {
    case 1:
      return 'Jan';
    case 2:
      return 'Fev';
    case 3:
      return 'Mar';
    case 4:
      return 'Abr';
    case 5:
      return 'Mai';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Ago';
    case 9:
      return 'Set';
    case 10:
      return 'Out';
    case 11:
      return 'Nov';
    case 12:
      return 'Dez';
    default:
      return mes;
  }
}

function mesNomeFull(num) {
  let mes = num.split('-');
  mes = parseInt(mes[0]);
  switch (mes) {
    case 1:
      return 'Janeiro';
    case 2:
      return 'Fevereiro';
    case 3:
      return 'Março';
    case 4:
      return 'Abril';
    case 5:
      return 'Maio';
    case 6:
      return 'Junho';
    case 7:
      return 'Julho';
    case 8:
      return 'Agosto';
    case 9:
      return 'Setembro';
    case 10:
      return 'Outubro';
    case 11:
      return 'Novembro';
    case 12:
      return 'Dezembro';
    default:
      return mes;
  }
}


function ultimosxMeses(qtd, anual): { title: string; cols: number }[] {
  const anos: { [key: number]: number } = {};

  const dataAtual = new Date();
  const totalMeses = qtd * 12;

  for (let i = 0; i < totalMeses; i++) {
    const dataMesAtual = new Date(dataAtual.getFullYear(), dataAtual.getMonth() - i, 1);
    const ano = dataMesAtual.getFullYear();

    if (anos[ano]) {
      anos[ano]++;
    } else {
      anos[ano] = 1;
    }
  }

  const resultado = Object.entries(anos).map(([ano, cols]) => ({
    title: parseInt(ano),
    cols
  }));

  if (anual) {
    return [{ title: 'Anos', cols: resultado.length }];
  }
  else {
    return resultado;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getLast60Months() {
  const currentDate = new Date();
  const seriesData = [];

  for (let i = 0; i < 60; i++) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const formattedMonth = month.toString().padStart(2, '');

    const x = `${formattedMonth}-${year}`;
    const y = 0; // Substitua 400 e 800 pelos limites desejados

    seriesData.push({ x, y });

    // Subtrai um mês da data atual
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  return seriesData.reverse();
}

function separarTiposLabels(data) {
  const dividendoArray = [];
  const jrsCapProprioArray = [];
  const rendimentoArray = [];

  data.forEach(item => {
    const newItem = {
      datas: item.datas,
      rate: item.rate,
      label: item.label
    };

    switch (item.label) {
      case "DIVIDENDO":
        dividendoArray.push(newItem);
        break;
      case "JCP":
        jrsCapProprioArray.push(newItem);
        break;
      case "RENDIMENTO":
        rendimentoArray.push(newItem);
        break;
      default:
        break;
    }
  });

  return {
    DIVIDENDO: dividendoArray,
    JCP: jrsCapProprioArray,
    RENDIMENTO: rendimentoArray
  };
}


function somarArrays(dividendos, jcp, rendimentos) {
  const resultado = [];
  // Verifica se todos os arrays têm o mesmo comprimento
  if (dividendos.length === jcp.length && jcp.length === rendimentos.length) {
    for (let i = 0; i < dividendos.length; i++) {
      // Verifica se as datas são iguais
      if (
        dividendos[i].x === jcp[i].x &&
        jcp[i].x === rendimentos[i].x
      ) {
        // Soma os valores e adiciona ao resultado
        resultado.push({
          x: dividendos[i].x,
          y: (parseFloat(dividendos[i].y) + parseFloat(jcp[i].y) + parseFloat(rendimentos[i].y)).toFixed(2)
        });
      } else {
        console.error("Datas não correspondem nas posições:", i);
        // Aqui você pode tratar o erro ou decidir o que fazer caso as datas não correspondam
      }
    }
  } else {
    console.error("Os arrays não têm o mesmo comprimento.");
    // Aqui você pode tratar o erro ou decidir o que fazer caso os arrays não tenham o mesmo comprimento
  }
  return resultado;
}

function somarPorAno(dados) {
  const somaPorAno = {};
  dados.forEach((item) => {
    const [mes, x] = item.x.split('-');
    const chaveAno = `${x + '-' + x}`;

    if (!somaPorAno[chaveAno]) {
      somaPorAno[chaveAno] = 0;
    }

    somaPorAno[chaveAno] += parseFloat(item.y);
  });

  const resultado = Object.entries(somaPorAno).map(([x, y]) => ({
    x,
    y,
  }));
  return resultado;
}

function somarPorAnoTipo(dividendo, jcp, rendimento) {
  // Função auxiliar para criar um objeto com os anos como chaves e valores iniciais como 0
  const criarObjetoAno = (dados) => {
    const objetoAno = {};
    dados.forEach(item => {
      const ano = item.x.split('-')[1];
      objetoAno[ano] = 0;
    });
    return objetoAno;
  };

  // Função auxiliar para somar os valores do campo "y" por ano para cada array
  const somarValoresPorAno = (dados, objetoAno) => {
    dados.forEach(item => {
      const ano = item.x.split('-')[1];
      objetoAno[ano] += parseFloat(item.y);
    });
  };

  // Criar objetos de ano para cada array
  const objetoAnoDividendo = criarObjetoAno(dividendo);
  const objetoAnoJcp = criarObjetoAno(jcp);
  const objetoAnoRendimento = criarObjetoAno(rendimento);

  // Somar valores para cada array separadamente
  somarValoresPorAno(dividendo, objetoAnoDividendo);
  somarValoresPorAno(jcp, objetoAnoJcp);
  somarValoresPorAno(rendimento, objetoAnoRendimento);

  // Formatar o resultado no formato desejado para cada array
  const resultadoDividendo = Object.keys(objetoAnoDividendo).map(ano => ({ "x": ano, "y": objetoAnoDividendo[ano].toFixed(2) }));
  const resultadoJcp = Object.keys(objetoAnoJcp).map(ano => ({ "x": ano, "y": objetoAnoJcp[ano].toFixed(2) }));
  const resultadoRendimento = Object.keys(objetoAnoRendimento).map(ano => ({ "x": ano, "y": objetoAnoRendimento[ano].toFixed(2) }));

  return {
    dividendo: resultadoDividendo,
    jcp: resultadoJcp,
    rendimento: resultadoRendimento
  };
}

export { formatDataTime, formatData, converterDataParaAmericano, removeCurrency, removeTrailingZeros, formatCurrency2, formatCurrency, formatDate, capitalizeLetters, categoria_color, calcularPorcentagem, caixa, calcularResto, difference, getLastDayMonths, obterArrayMesesAbreviados, formatoRealSemCifrao, calcularJurosCompostos, calcularJurosCompostosTabela, imprimirTabela, removerFormatacaoNumero, converterDataParaBrasil, calcularVariaveis, dividirEmTresPartes, obterDatasEmTimestamp, timestampToDate, calcularCorPorcentagem, obterTrimestre, mesNome, ultimosxMeses, getLast60Months, mesNomeFull, separarTiposLabels, somarArrays, somarPorAno, somarPorAnoTipo }