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
  if(total === 0 || parte === 0)
  {
    return '0.00';
  }
  if (typeof parte !== 'number' || typeof total !== 'number' || total === 0) {
      return 'Entrada inválida. Certifique-se de que os valores são números e que o denominador não é zero.';
  }

  const porcentagem = (parte / total) * 100;
  return porcentagem.toFixed(2) ;
}

function calcularResto(dividendo: number, divisor: number): number | string {
   return dividendo - divisor;
}


function difference(valorMenor, valorMaior) {
  if(valorMenor === 0 || valorMaior === 0)
  {
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

export { formatDataTime, formatData, converterDataParaAmericano, removeCurrency, removeTrailingZeros, formatCurrency2, formatCurrency, formatDate, capitalizeLetters, categoria_color, calcularPorcentagem, caixa, calcularResto, difference, getLastDayMonths, obterArrayMesesAbreviados, formatoRealSemCifrao, calcularJurosCompostos, calcularJurosCompostosTabela, imprimirTabela, removerFormatacaoNumero}