import { format, parse } from 'date-fns';

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
    const withoutCurrencySymbol = value.replace('R$', '');
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
    // Retorna uma string padrão ou faz algo apropriado se value não for uma string
    return 'Valor Inválido';
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

export { formatDataTime, formatData, converterDataParaAmericano, removeCurrency, removeTrailingZeros, formatCurrency2, formatCurrency, formatDate, capitalizeLetters, categoria_color }