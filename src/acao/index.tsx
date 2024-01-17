import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import { useSelector } from 'react-redux';
import { timestampToDate, formatCurrency, calcularCorPorcentagem, ultimosxMeses, mesNome, mesNomeFull, separarTiposLabels, somarPorAnoTipo, somarArrays, somarPorAno, nomeIndicador, FormatIndicador } from '../data/funcoes';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BoxTopAcao from '../components/acao/BoxTopAcao';
import ReactApexChart from 'react-apexcharts';
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import Indicadores from '../components/acao/indicadores';
import TabelaDividendos from '../components/acao/tabelaDividendos';
import BoxDadosPatrimonio from '../components/acao/boxDadosPatrimonio';
import BoxEmpresasRelacionadas from '../components/acao/boxEmpresasRelacionadas';
import BoxBuscaAtivo from '../components/acao/boxBuscaAtivo';
import BoxHistoricoAcao from '../components/acao/boxHistoricoAcao';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import Swal from 'sweetalert2';

interface DadosType {
  ativo_nome: string;
  nomeSetor: string;
  logo: string;
  nomeSegmento: string;
}

const Acao = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const segments = location.pathname.split('/');
  const acao = segments[segments.length - 1].toUpperCase();

  const [pl, setPl] = useState(0);
  const [psr, setPsr] = useState(0);
  const [pvp, setPvp] = useState(0);
  const [dy, setDy] = useState(0);
  const [mLiquida, setMLiquida] = useState(0);
  const [mBruta, setMBruta] = useState(0);
  const [mEbit, setMEbit] = useState(0);
  const [mEbitda, setMEbitda] = useState(0);
  const [evEbitda, setEvEbitda] = useState(0);
  const [evEbit, setEvEbit] = useState(0);
  const [pEbitda, setPEbitda] = useState(0);
  const [pEbit, setPEbit] = useState(0);
  const [pAtivo, setPAtivo] = useState(0);
  const [pCapGiro, setPCapGiro] = useState(0);
  const [pAtivoCircLiq, setPAtivoCircLiq] = useState(0);
  const [vpa, setVpa] = useState(0);
  const [lpa, setLpa] = useState(0);
  const [giroAtivos, setGiroAtivos] = useState(0);
  const [roe, setRoe] = useState(0);
  const [roic, setRoic] = useState(0);
  const [roa, setRoa] = useState(0);
  const [dividaLiquidaEbtda, setDividaLiquidaEbtda] = useState(0);
  const [dividaLiquidaEbit, setDividaLiquidaEbit] = useState(0);
  const [patrimonioAtivos, setPatrimonioAtivos] = useState(0);
  const [passivosAtivos, setPassivosAtivos] = useState(0);
  const [liquidezCorrente, setLiquidezCorrente] = useState(0);
  const [cagrReceita5Anos, setCagrReceita5Anos] = useState(0);
  const [cagrLucro5Anos, setCagrLucro5Anos] = useState(0);
  const [pegRatio, setPegRatio] = useState(0);
  const [dividaLiquidaPatrimonioLiquido, setDividaLiquidaPatrimonioLiquido] = useState(0);

  const showGraphIndicador = async (data: string) => {
    Swal.fire({
        title: "<strong>Dividend Yield</u></strong>",
        html: `
        <div class='ft-micro ft-black text-justify' style='text-indent:25px;'>O dividend yield, ou rendimento de dividendos, é uma métrica financeira que expressa a relação entre os dividendos pagos por uma empresa e o preço de suas ações. Ele é calculado como a porcentagem do dividendo anual em relação ao preço atual da ação. Em termos simples, o dividend yield fornece aos investidores uma medida do retorno de seus investimentos em dividendos em relação ao preço atual das ações.

        A fórmula básica para calcular o dividend yield é:
        <br><br>
        <img src='../src/assets/images/formulas/dy.png'>            
        <br><br>
        O dividend yield é utilizado por investidores para avaliar o potencial retorno de investimento em dividendos, sendo uma ferramenta importante para quem busca renda estável. Um dividend yield mais alto pode indicar que uma empresa está distribuindo uma proporção maior de seus lucros aos acionistas, enquanto um yield mais baixo pode sugerir o contrário.
        
        É importante ressaltar que o dividend yield sozinho não é uma medida completa da qualidade de um investimento, e outros fatores, como a saúde financeira da empresa e seu histórico de dividendos, devem ser considerados ao avaliar a atratividade de um investimento.</div>
        `,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: `
          OK
        `
      });
  }

  const [selectedOptionPeriodicidade, setSelectedOptionPeriodicidade] = useState([]);
  const SelectChangePeriodicidade = (selectedOptionPeriodicidade) => {
    get_data(acao, selectedOptionPeriodo.value, selectedOptionPeriodicidade.value);
    setSelectedOptionPeriodicidade(selectedOptionPeriodicidade)
  };

  const [selectedOptionPeriodo, setSelectedOptionPeriodo] = useState([]);
  const SelectChangePeriodo = (selectedOptionPeriodo) => {
    get_data(acao, selectedOptionPeriodo.value, selectedOptionPeriodicidade.value);
    setSelectedOptionPeriodo(selectedOptionPeriodo)
  };

  const [selectedOptionProventos, setSelectedOptionProventos] = useState([]);
  const SelectChangeProventos = (selectedOptionProventos) => {
    getDadosProventos2(acao, selectedOptionTempo.value)
    // getDadosProventos(acao, selectedOptionTempo.value)
    setSelectedOptionProventos(selectedOptionProventos)
  };

  const [selectedOptionTempo, setSelectedOptionTempo] = useState([]);
  const SelectChangeTempo = (selectedOptionTempo) => {
    getDadosProventos2(acao, selectedOptionTempo.value)
    // getDadosProventos(acao, selectedOptionTempo.value)
    setSelectedOptionTempo(selectedOptionTempo)
  };


  useEffect(() => {
    let anual;
    if (selectedOptionProventos.value == 2 || selectedOptionProventos.value == 4) {
      anual = true;
    }
    else {
      anual = false;
    }
    const ultimosxAnoss = ultimosxMeses(selectedOptionTempo.value ? selectedOptionTempo.value : 15, anual);
    setUltimosxAnos(ultimosxAnoss);
  }, [selectedOptionTempo, selectedOptionProventos])

  const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
  const colorCategorias = ["#e7515a", "#00ab55", "#0c60bb", "#43efbc", "#ef7817", "#ab0000", "#008fab", "#d2d212"];

  useEffect(() => {
    setSelectedOptionPeriodo({ value: 4, label: '1 Ano' })
    setSelectedOptionPeriodicidade({ value: 2, label: 'Semanal' })
    setSelectedOptionProventos({ value: 1, label: 'Mensal' })
    setSelectedOptionTempo({ value: 1, label: '1 Ano' })
  }, [acao])

  const [data, setData] = useState([]);
  const get_data = async (stock, periodo, periodicidade) => {
    const result = await fetch('http://localhost:3000/cotacao/' + stock + '/' + periodo + '/' + periodicidade);
    const data = await result.json();
    setData(data);
  }
  useEffect(() => {
    get_data(acao, 4, 2);
  }, [acao]);


  const [dataCom, setDataCom] = useState(true);
  const provDataCom = () => {
    setDataCom(!dataCom); // Alternando entre true e false
  };

  const [tamanhoTela, setTamanhoTela] = useState({
    largura: window.innerWidth,
    altura: window.innerHeight,
  });
  const [volatilidadeAcao, setVolatilidadeAcao] = useState(0);
  const [volatilidadeIndice, setVolatilidadeIndice] = useState(0);
  const [indiceNome, setIndiceNome] = useState('');
  const cotacao = data.map(item => item.close);
  const cotacaoData = data.map(item => timestampToDate(item.data));

  const [empresasRelacionadas, setEmpresasRelacionadas] = useState([
    {
      id: 'item-1',
      title: '',
      logo: ''
    },
    {
      id: 'item-2',
      title: '',
      logo: ''
    },
    {
      id: 'item-3',
      title: '',
      logo: ''
    },
    {
      id: 'item-4',
      title: '',
      logo: ''
    },
    {
      id: 'item-5',
      title: '',
      logo: ''
    },
    {
      id: 'item-6',
      title: '',
      logo: ''
    },
    {
      id: 'item-7',
      title: '',
      logo: ''
    },
    {
      id: 'item-8',
      title: '',
      logo: ''
    },
    {
      id: 'item-9',
      title: '',
      logo: ''
    }
  ]);
  const getEmpresasRelacionadas = async (stock) => {
    const data = await fetch('http://localhost:3000/get_empresas_relacionadas/' + stock)
    const response = await data.json();

    //const datas = response.map(item => item.datas);
    if (response.length >= 1) {
      setEmpresasRelacionadas(response);
    }
    else {

      setEmpresasRelacionadas([{
        id: 'item-1',
        title: '',
        logo: ''
      }]);

    }
  }

  const [dadosProventos, setDadosProventos] = useState([]);
  const [dadosProventosValor, setDadosProventosValor] = useState([]);
  const getDadosProventos = async (stock: any) => {
    const data = await fetch('http://localhost:3000/proventos/' + stock + '/s' + '/0')
    const response = await data.json();

    const datas = response.map(item => item.datas);
    setDadosProventos(datas);
    setDadosProventosValor(response);
  }

  const [dividendos, setDividendos] = useState([]);
  const [jcp, setJcp] = useState([]);
  const [rendimentos, setRendimentos] = useState([]);
  const getDadosProventos2 = async (stock, periodo) => {
    const data = await fetch('http://localhost:3000/proventos/' + stock + '/n' + '/' + periodo)
    const response = await data.json();
    const resultado = separarTiposLabels(response);
    setDividendos(resultado.DIVIDENDO);
    setJcp(resultado.JCP);
    setRendimentos(resultado.RENDIMENTO);
  }


  const [dados, setDados] = useState<DadosType>({ ativo_nome: '', nomeSegmento: '', nomeSetor: '' });
  const get_dados = async (stock) => {
    const result = await fetch('http://localhost:3000/ativo/' + stock);
    const [data] = await result.json();
    setDados(data);
    tamanhoTela.largura <= 600 ? setVolatilidadeAcao(data.volatilidade * 0.60) : (tamanhoTela.largura <= 1000 ? setVolatilidadeAcao(data.volatilidade * 0.85) : setVolatilidadeAcao(data.volatilidade * 0.9))
    tamanhoTela.largura <= 600 ? setVolatilidadeIndice(data.ibov * 0.60) : (tamanhoTela.largura <= 1000 ? setVolatilidadeIndice(data.ibov * 0.85) : setVolatilidadeIndice(data.ibov * 0.9))
    setIndiceNome('IBOV')
  }



  const currentDate = new Date();
  const year = currentDate.getFullYear();


  const [rowData, setRowData] = useState([]);
  const getIndicadores = async (stock: any) => {
    const data = await fetch('http://localhost:3000/get_indicadores/' + stock)
    const response = await data.json();

    let dadosReestruturados: Array<any> = [];

    // Obtendo todas as chaves do primeiro objeto dos dados originais
    const chaves = Object.keys(response[0]);

    // Iterando sobre cada chave
    chaves.forEach(chave => {
      // Se a chave não for uma das excluídas, processe-a
      if (chave !== "historico_indicador_id" && chave !== "lista_ativos_id" && chave !== "ano" && chave !== "divida_bruta_patrimonio" && chave !== "payout") {
        // Criando um objeto para cada chave com a propriedade 'indicador'
        let objetoChave = { "indicador": chave };

        // Adicionando os valores de cada ano como propriedades do objeto
        response.forEach(objeto => {
          objetoChave['ano' + objeto.ano] = objeto[chave];
        });

        // Adicionando o objeto criado à lista de dados reestruturados
        dadosReestruturados.push(objetoChave);
      }
    });
    setRowData(dadosReestruturados);

    setPl(dadosReestruturados[0]['ano2024']);
setPsr(dadosReestruturados[1]['ano2024']);
setPvp(dadosReestruturados[2]['ano2024']);
setDy(dadosReestruturados[3]['ano2024']);
setMLiquida(dadosReestruturados[4]['ano2024']);
setMBruta(dadosReestruturados[5]['ano2024']);
setMEbit(dadosReestruturados[6]['ano2024']);
setMEbitda(dadosReestruturados[7]['ano2024']);
setEvEbitda(dadosReestruturados[8]['ano2024']);
setEvEbit(dadosReestruturados[9]['ano2024']);
setPEbitda(dadosReestruturados[10]['ano2024']);
setPEbit(dadosReestruturados[11]['ano2024']);
setPAtivo(dadosReestruturados[12]['ano2024']);
setPCapGiro(dadosReestruturados[13]['ano2024']);
setPAtivoCircLiq(dadosReestruturados[14]['ano2024']);
setVpa(dadosReestruturados[15]['ano2024']);
setLpa(dadosReestruturados[16]['ano2024']);
setGiroAtivos(dadosReestruturados[17]['ano2024']);
setRoe(dadosReestruturados[18]['ano2024']);
setRoic(dadosReestruturados[19]['ano2024']);
setRoa(dadosReestruturados[20]['ano2024']);
setDividaLiquidaEbtda(dadosReestruturados[21]['ano2024']);
setDividaLiquidaEbit(dadosReestruturados[22]['ano2024']);
setPatrimonioAtivos(dadosReestruturados[23]['ano2024']);
setPassivosAtivos(dadosReestruturados[24]['ano2024']);
setLiquidezCorrente(dadosReestruturados[25]['ano2024']);
setCagrReceita5Anos(dadosReestruturados[26]['ano2024']);
setCagrLucro5Anos(dadosReestruturados[27]['ano2024']);
setPegRatio(dadosReestruturados[28]['ano2024']);
setDividaLiquidaPatrimonioLiquido(dadosReestruturados[29]['ano2024']);

  }

  useEffect(() => {
    getIndicadores(acao);
  }, [acao])


  const [ultimosxAnos, setUltimosxAnos] = useState([])
  const [seriesDataTotal, setSeriesDataTotal] = useState([])
  useEffect(() => {
    getDadosProventos2(acao, 1)
    getDadosProventos(acao)
    get_dados(acao);
    getEmpresasRelacionadas(acao);
  }, [acao]);


  const [dividendosTotal, setDividendosTotal] = useState([]);
  const [jcpTotal, setJcpTotal] = useState([]);
  const [rendimentosTotal, setRendimentosTotal] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const seriesData = [];
    let tempo;
    tempo = selectedOptionTempo.value ? selectedOptionTempo.value * 12 : 15 * 12
    for (let i = 0; i < tempo; i++) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const formattedMonth = month;

      const x = `${formattedMonth}-${year}`;
      const y = 0; // Substitua 400 e 800 pelos limites desejados

      seriesData.push({ x, y });

      // Subtrai um mês da data atual
      currentDate.setMonth(currentDate.getMonth() - 1);
    }

    const updatedSeriesData = seriesData.reverse();
    for (let i = 0; i < updatedSeriesData.length; i++) {
      const element1 = updatedSeriesData[i];

      const match = dadosProventosValor.find(element2 => element2.datas === element1.x);

      if (match) {
        updatedSeriesData[i].y = updatedSeriesData[i].y + (match.rate).toFixed(2);
      }
    }
    setSeriesDataTotal(updatedSeriesData);
  }, [dadosProventosValor]);

  useEffect(() => {
    const currentDate = new Date();
    const seriesData = [];

    let tempo;
    tempo = selectedOptionTempo.value ? selectedOptionTempo.value * 12 : 15 * 12
    for (let i = 0; i < tempo; i++) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const formattedMonth = month;

      const x = `${formattedMonth}-${year}`;
      const y = 0; // Substitua 400 e 800 pelos limites desejados

      seriesData.push({ x, y });

      // Subtrai um mês da data atual
      currentDate.setMonth(currentDate.getMonth() - 1);
    }

    const updatedSeriesData = seriesData.reverse();
    for (let i = 0; i < updatedSeriesData.length; i++) {
      const element1 = updatedSeriesData[i];

      const match = dividendos.find(element2 => element2.datas === element1.x);

      if (match) {
        updatedSeriesData[i].y = updatedSeriesData[i].y + (match.rate).toFixed(2);
      }
    }
    setDividendosTotal(updatedSeriesData);
  }, [dividendos]);

  useEffect(() => {
    const currentDate = new Date();
    const seriesData = [];

    let tempo;
    tempo = selectedOptionTempo.value ? selectedOptionTempo.value * 12 : 15 * 12
    for (let i = 0; i < tempo; i++) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const formattedMonth = month;

      const x = `${formattedMonth}-${year}`;
      const y = 0; // Substitua 400 e 800 pelos limites desejados

      seriesData.push({ x, y });

      // Subtrai um mês da data atual
      currentDate.setMonth(currentDate.getMonth() - 1);
    }

    const updatedSeriesData = seriesData.reverse();
    for (let i = 0; i < updatedSeriesData.length; i++) {
      const element1 = updatedSeriesData[i];

      const match = jcp.find(element2 => element2.datas === element1.x);

      if (match) {
        updatedSeriesData[i].y = updatedSeriesData[i].y + (match.rate).toFixed(2);
      }
    }
    setJcpTotal(updatedSeriesData);
  }, [jcp]);

  useEffect(() => {
    const currentDate = new Date();
    const seriesData = [];

    let tempo;
    tempo = selectedOptionTempo.value ? selectedOptionTempo.value * 12 : 15 * 12
    for (let i = 0; i < tempo; i++) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const formattedMonth = month;

      const x = `${formattedMonth}-${year}`;
      const y = 0; // Substitua 400 e 800 pelos limites desejados

      seriesData.push({ x, y });

      // Subtrai um mês da data atual
      currentDate.setMonth(currentDate.getMonth() - 1);
    }

    const updatedSeriesData = seriesData.reverse();
    for (let i = 0; i < updatedSeriesData.length; i++) {
      const element1 = updatedSeriesData[i];

      const match = rendimentos.find(element2 => element2.datas === element1.x);

      if (match) {
        updatedSeriesData[i].y = updatedSeriesData[i].y + (match.rate).toFixed(2);
      }
    }
    setRendimentosTotal(updatedSeriesData);
  }, [rendimentos]);

  const [somaAnual, setSomaAnual] = useState([]);
  const [dividendosAnual, setDividendosAnual] = useState([]);
  const [jcpAnual, setJcpAnual] = useState([]);
  const [rendimentosAnual, setRendimentosAnual] = useState([]);
  const [resultadoMensalAgrupado, setResultadoMensalAgrupado] = useState([]);
  useEffect(() => {
    const resultadoPorAnoTipo = somarPorAnoTipo(dividendosTotal, jcpTotal, rendimentosTotal);
    setDividendosAnual(resultadoPorAnoTipo.dividendo);
    setJcpAnual(resultadoPorAnoTipo.jcp);
    setRendimentosAnual(resultadoPorAnoTipo.rendimento);
    const resultado = somarArrays(dividendosTotal, jcpTotal, rendimentosTotal);
    setResultadoMensalAgrupado(resultado);
    let dados = somarPorAno(resultado);
    setSomaAnual(dados);

    montarGrafico(selectedOptionTempo.value);
  }, [dividendosTotal, jcpTotal, rendimentosTotal, seriesDataTotal, dadosProventosValor, selectedOptionProventos, selectedOptionTempo])


  const [dadosGrafico, setDadosGrafico] = useState([]);
  useEffect(() => {
    montarGrafico(selectedOptionTempo.value);
  }, [somaAnual])

  function montarGrafico(num) {
    if ((num === 1 || num === 5 || num === 10 || num == 0) && (selectedOptionProventos.value == 1)) {
      setDadosGrafico([
        { name: "Dividendos", data: dividendosTotal },
        { name: "JCP", data: jcpTotal },
        { name: "Rendimentos", data: rendimentosTotal }
      ]);
    }
    else if ((num === 1 || num === 5 || num === 10 || num == 0) && (selectedOptionProventos.value == 2)) {
      setDadosGrafico([
        { name: "Dividendos", data: dividendosAnual },
        { name: "JCP", data: jcpAnual },
        { name: "Rendimentos", data: rendimentosAnual }
      ]);
    } else if ((num === 1 || num === 5 || num === 10 || num == 0) && (selectedOptionProventos.value == 3)) {
      setDadosGrafico([{ name: "Proventos", data: resultadoMensalAgrupado }]);
    } else if ((num === 1 || num === 5 || num === 10 || num == 0) && (selectedOptionProventos.value == 4)) {
      setDadosGrafico([{ name: "Proventos", data: somaAnual }]);
    }
  }

  const revenueChart: any = {
    series: [{
      name: acao,
      data: cotacao
    }],
    options: {
      chart: {
        height: 325,
        type: 'area',
        fontFamily: 'Nunito, sans-serif',
        stacked: true,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
        },
        xaxis: {
          tickAmount: 8,
          tickPlacement: 'between',
          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: true,
          },
          crosshairs: {
            show: true,
          },
          labels: {
            offsetX: isRtl ? 2 : 0,
            offsetY: 5,

            style: {
              fontSize: '12px',
              rotate: -10,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
        }
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: 'straight',
        width: 2,
        lineCap: 'square',
      },
      dropShadow: {
        enabled: true,
        opacity: 0.2,
        blur: 10,
        left: -7,
        top: 22,
      },
      colors: isDark ? colorCategorias : colorCategorias,
      labels: cotacaoData,
      xaxis: {
        tickAmount: 8,
        tickPlacement: 'between',
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        crosshairs: {
          show: true,
        },
        labels: {
          offsetX: isRtl ? 2 : 0,
          offsetY: 5,

          style: {
            fontSize: '12px',
            rotate: -10,
            cssClass: 'apexcharts-xaxis-title',
          },
        },
      },
      yaxis: {
        tickPlacement: 'between',
        type: 'numeric',
        tickAmount: 5,
        axisTicks: {
          show: true,
        },
        labels: {
          formatter: (value: number) => {
            return formatCurrency(value.toFixed(2))
          },
          offsetX: isRtl ? -30 : -10,
          offsetY: 0,
          style: {
            fontSize: '12px',
            cssClass: 'apexcharts-yaxis-title',
          },
        },
        opposite: isRtl ? true : false,
      },
      grid: {
        borderColor: isDark ? '#191E3A' : '#E0E6ED',
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          tickAmount: 12,
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
        fontSize: '16px',
        markers: {
          width: 10,
          height: 10,
          offsetX: -2,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5,
        },
      },
      tooltip: {
        marker: {
          show: true,
        },
        x: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: isDark ? 0.19 : 0.48,
          opacityTo: 0.05,
          stops: isDark ? [100, 100] : [45, 100],
        },
      },
    },
  };

  let chartData = {
    series: dadosGrafico,
    options: {
      dataLabels: {
        enabled: false,
      },
      chart: {
        stacked: true,
        type: 'bar',
        height: 380
      },
      yaxis: {

        labels: {
          formatter: (value: number) => {
            return formatCurrency(value.toFixed(2))
          },
          offsetX: isRtl ? -30 : -10,
          offsetY: 0,
          style: {
            fontSize: '12px',
            cssClass: 'apexcharts-yaxis-title',
          },
        }
      },
      xaxis: {
        type: 'category',
        labels: {
          formatter: function (val) {

            let valor = mesNome(val).toString();
            let novoValor;
            const tempo = selectedOptionTempo.value;
            var ano = valor.split('-');
            if ((selectedOptionProventos.value == 2 || selectedOptionProventos.value == 4)) {
              novoValor = ano[0];
            }
            else if ((tempo <= 1 && tempo != 0) && (selectedOptionProventos.value == 1 || selectedOptionProventos.value == 3)) {
              novoValor = valor;
            }
            else if (tempo <= 5 && tempo != 0) {
              novoValor = valor.substring(0, 1);
            }
            else {
              novoValor = '';
            }

            return novoValor
          }
        },
        group: {
          style: {
            fontSize: '10px',
            fontWeight: 700
          },
          groups: ultimosxAnos
        }
      },
      title: {
        text: '',
      },
      tooltip: {
        x: {
          formatter: function (val) {
            return mesNomeFull(val)
          }
        }
      },
    },
  };

  function getRandomBinary() {
    return Math.round(Math.random());
  }
  let array = Array.from({ length: 120 }, getRandomBinary);



  function dataExisteNoArray(dataProcurada, arrayDeDatas) {
    return arrayDeDatas.includes(dataProcurada);
  }

  const anoAtual = new Date().getFullYear();
  const anos: Array<any> = [];
  const percentual = new Array(13).fill(0);
  // Criar o array
  const anosEMeses = [];
  // Loop para os últimos 10 anos
  for (let ano = anoAtual; ano > anoAtual - 10; ano--) {
    // Loop para os 12 meses
    anos.push(ano);
    for (let mes = 1; mes <= 12; mes++) {
      let existe = 0;
      if (dataExisteNoArray(mes + '-' + ano, dadosProventos)) {
        existe = 1;
        percentual[mes]++;
      } else {
        existe = 0;
      }
      anosEMeses.push(existe);
    }
  }

  return (
    <div><div className='titulo-page'>AÇÕES</div>
      <ul className="flex space-x-2 rtl:space-x-reverse mb-5 mt-4">
        <li>
          <Link to="/" className="text-primary hover:underline">
            {t('Site')}
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <Link to="/acoes" className="text-primary hover:underline">
            {t('Acoes')}
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>{acao}</span>
        </li>
      </ul>
      <div className='mb-5'>
        <div className="grid 1xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-6">
          <div className="grid 1xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-4 grid-cols-1 gap-6 sm:col-span-2 ft-micro">
            <center><img src={dados.logo} height={120} width={120} /></center>
            <div className='xl:col-span-3 sm:col-span-3'>
              <div className='subtitulo-page'>{acao}</div>
              <div className='mt-1'><b>NOME:</b> {(dados.ativo_nome).toUpperCase()}</div>
              <div className='mt-1'><b>SETOR:</b> {dados.nomeSetor.toUpperCase()}</div>
              <div className='mt-1'><b>SEGMENTO:</b> {dados.nomeSegmento.toUpperCase()}</div>
              <div className='mt-1'><b>CNPJ:</b> {dados.nomeSegmento.toUpperCase()}</div>
            </div>
          </div>
          <div className='xl:col-span-2 custom-select'>
            <BoxBuscaAtivo
              acao={acao}
              categoria={1}
              categoriaNome={'ação'}
            />
          </div>
        </div>
      </div>

      <div className="grid 1xl:grid-cols-6 lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-6 xl:col-span-8">
        <div className="panel bg-orange">
          <BoxTopAcao
            nome='VALOR ATUAL'
            valor='R$54,80'
            subtitulo='ÚLTIMOS 12 MESES'
            valor2='R$4,57'
          />
        </div>
        <div className="panel">
          <BoxTopAcao
            nome='MIN. 52 SEMANAS'
            valor='R$30,23'
            subtitulo='MIN. MÊS'
            valor2='R$50,58'
          />
        </div>
        <div className="panel">
          <BoxTopAcao
            nome='MÁX. 52 SEMANAS'
            valor='R$54,80'
            subtitulo='MÁX. MÊS'
            valor2='R$54,80'
          />
        </div>
        <div className="panel">
          <BoxTopAcao
            nome='DIVIDEND YIELD'
            valor='8.34%'
            subtitulo='ÚLTIMOS 12 MESES'
            valor2='R$4,57'
          />
        </div>
        <div className="panel">
          <BoxTopAcao
            nome='VALORIZAÇÃO (12M)'
            valor='8.34%'
            subtitulo='MÊS ATUAL'
            valor2='R$4,57'
          />
        </div>
        <div className="panel">
          <BoxTopAcao
            nome='TAG ALONG'
            valor='100%'
            subtitulo='TIPO'
            valor2='ON'
          />
        </div>
      </div>
      <div className='panel mt-6 custom-select'>
        <div className="grid 1xl:grid-cols-6 lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className='flex mt-3 xl:col-span-2'>{/*<img src={dados.logo} height={40} width={40} />*/}<span className='mt-3 ml-5'><div className='subtitulo-page'>COTAÇÃO</div></span></div>
          <div></div>
          <div></div>
          <div className='flex justify-end xl:col-span-2'>
            <Select
              className='text-sm w-200 mr-5'
              name="Periodicidade"
              value={selectedOptionPeriodicidade}
              onChange={SelectChangePeriodicidade}
              options={[{ value: 1, label: 'Diário' }, { value: 2, label: 'Semanal' }, { value: 3, label: 'Mensal' }, { value: 4, label: 'Anual' }]}
              isSearchable={false}
            />
            <Select
              className='text-sm w-200'
              name="Periodo"
              value={selectedOptionPeriodo}
              onChange={SelectChangePeriodo}
              options={[{ value: 1, label: '1 Mês' }, { value: 2, label: '3 Meses' }, { value: 3, label: '6 Meses' }, { value: 4, label: '1 Ano' }, { value: 5, label: '5 Anos' }, { value: 6, label: '10 Anos' }, { value: 7, label: 'Máximo' }]}
              isSearchable={false}
            />
          </div>
        </div>
        <ReactApexChart series={revenueChart.series} options={revenueChart.options} type="area" height={550} />
      </div>

      <div className='panel mt-5'>
        <div className='subtitulo-page'>VOLATILIDADE 12 MESES</div>
        <div className='flex pt-4'>
          <div><img src='../src/assets/images/snoring-icon.svg' width={35} className='mt-1 pr-1'></img></div>
          <div className='carteira w-full' style={{ height: '5px', backgroundColor: '#eeeeee', marginTop: '20px' }}>
            <div className='base pt-1 ft-micro' style={{ marginLeft: `${volatilidadeAcao}%`, marginTop: '-30px', transform: 'rotate(180deg)', backgroundColor: calcularCorPorcentagem(volatilidadeAcao), borderBottom: calcularCorPorcentagem(volatilidadeAcao) }}><center style={{ transform: 'rotate(180deg)' }}>{acao}</center></div>
            <div className='base pt-1 ft-micro' style={{ marginLeft: `${volatilidadeIndice}%`, marginTop: '10px', backgroundColor: calcularCorPorcentagem(volatilidadeIndice), borderBottom: calcularCorPorcentagem(volatilidadeIndice) }}><center>{indiceNome}</center></div>
          </div>
          <div><img src='../src/assets/images/burning-house.svg' width={40} style={{ color: '#eeeeee' }} className='float-right pb-5'></img></div>
        </div>
      </div>

      <div className='panel mt-5'>
        <div className='subtitulo-page text-left mb-10'>PATRIMÔNIO</div>
        <div className="grid 1xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 text-center gap-5">
          <BoxDadosPatrimonio
            nome={'PATRIMÔNIO LÍQUIDO'}
            valor={165687124000}
          />
          <BoxDadosPatrimonio
            nome={'ATIVOS'}
            valor={165687124000}
          />
          <BoxDadosPatrimonio
            nome={'ATIVO CIRCULANTE'}
            valor={165687124000}
          />
          <BoxDadosPatrimonio
            nome={'DÍVIDA BRUTA'}
            valor={165687124000}
          />
          <BoxDadosPatrimonio
            nome={'DISPONIBILIDADE'}
            valor={165687124000}
          />
          <BoxDadosPatrimonio
            nome={'DÍVIDA LÍQUIDA'}
            valor={165687124000}
          />
          <BoxDadosPatrimonio
            nome={'VALOR DE MERCADO'}
            valor={165687124000}
          />
          <BoxDadosPatrimonio
            nome={'VALOR DE FIRMA'}
            valor={165687124000}
          />
          <BoxDadosPatrimonio
            nome={'QTD TOTAL DE PAPÉIS'}
            valor={165687124000}
          />
          <BoxDadosPatrimonio
            nome={'FREE FLOAT'}
            valor={165687124000}
          />
        </div>
      </div>
      <div className='panel mt-5'>
        <div className='subtitulo-page'>INDICADORES</div>
        <div className='mt-3 mb-5'><b>INDICADORES DE VALUATION</b></div>
        <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-7 sm:mt-0 gap-6">
          <Indicadores
            indicador='D.Y'
            info={FormatIndicador('dy',dy)}
          />
          <Indicadores
            indicador='P/L'
            info={FormatIndicador('pl',pl)}
          />
          <Indicadores
            indicador='P/SR'
            info={FormatIndicador('psr',psr)}
          />

          <Indicadores
            indicador='P/VP'
            info={FormatIndicador('pvp',pvp)}
          />


          <Indicadores
            indicador='PEG RATIO'
            info={FormatIndicador('peg_ratio',dy)}
          />

          <Indicadores
            indicador='EV/EBITDA'
            info={FormatIndicador('ev_ebitda',evEbitda)}
          />

          <Indicadores
            indicador='EV/EBIT'
            info={FormatIndicador('ev_ebit',evEbit)}
          />

          <Indicadores
            indicador='P/EBITDA'
            info={FormatIndicador('p_ebitda',pEbitda)}
          />

          <Indicadores
            indicador='P/EBIT'
            info={FormatIndicador('p_ebit',pEbit)}
          />

          <Indicadores
            indicador='P/ATIVO'
            info={FormatIndicador('p_ativo',pAtivo)}
          />

          <Indicadores
            indicador='LPA'
            info={FormatIndicador('lpa',lpa)}
          />

          <Indicadores
            indicador='P/CAP GIRO'
            info={FormatIndicador('p_cap_giro',pCapGiro)}
          />

          <Indicadores
            indicador='VPA'
            info={FormatIndicador('vpa',vpa)}
          />

          <Indicadores
            indicador='P/ATIVO CIRC LIQ'
            info={FormatIndicador('p_ativo_circ_liq',pAtivoCircLiq)}
          />
        </div>
      </div>
      <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className='panel mt-5'>
          <div className='mt-3 mb-5'><b>INDICADORES DE EFICIÊNCIA</b></div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 sm:mt-0 gap-6">
          <Indicadores
            indicador='MARGEM BRUTA'
            info={FormatIndicador('m_bruta',mBruta)}
          />
          <Indicadores
            indicador='MARGEM EBIT'
            info={FormatIndicador('m_ebit',mEbit)}
          />

          <Indicadores
            indicador='MARGEM EBITDA'
            info={FormatIndicador('m_ebitda',mEbitda)}
          />

          <Indicadores
            indicador='MARGEM LÍQUIDA'
            info={FormatIndicador('m_liquida',mLiquida)}
          />
          </ul>
        </div>

        <div className='panel mt-5'>
          <div className='mt-3 mb-5'><b>INDICADORES DE RENTABILIDADE</b></div>
          <ul className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-2 sm:mt-0 gap-6">
            <Indicadores
              indicador='GIRO ATIVOS'
              info={FormatIndicador('giro_ativos',giroAtivos)}
            />
            <Indicadores
              indicador='ROE'
              info={FormatIndicador('roe',roe)}
            />
            <Indicadores
              indicador='ROIC'
              info={FormatIndicador('roic',roic)}
            />
            <Indicadores
              indicador='ROA'
              info={FormatIndicador('roa',roa)}
            />

          </ul>
        </div>

        <div className='panel mt-5'>
          <div className='mt-3 mb-5'><b>INDICADORES DE CRESCIMENTO</b></div>
          <ul className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-2 sm:mt-0 gap-6">
            <Indicadores
              indicador='CAGR LUCRO 5A'
              info={FormatIndicador('cagr_lucro_5_anos',cagrLucro5Anos)}
            />
            <Indicadores
              indicador='CAGR REC. 5A'
              info={FormatIndicador('cagr_receita_5_anos',cagrReceita5Anos)}
            />
            {/* <Indicadores
              indicador='Market Cap'
              info={FormatIndicador('dy',dy)}
            />
            <Indicadores
              indicador='Market Cap'
              info={FormatIndicador('dy',dy)}
            /> */}

          </ul>
        </div>
      </div>

      <div className='panel mt-5'>
        <div className='mt-3 mb-5'><b>INDICADORES DE ENDIVIDAMENTO</b></div>
        <ul className="grid grid-cols-1 sm:grid-cols-3  xl:grid-cols-7 sm:mt-0 gap-6">
        <Indicadores
              indicador='DÍV.LÍQUIDA/PL'
              info={FormatIndicador('dividaliquida_patrimonioliquido',dividaLiquidaPatrimonioLiquido)}
            />
            <Indicadores
              indicador='DÍV.LÍQUIDA/EBITDA'
              info={FormatIndicador('divida_liquida_ebtda',dividaLiquidaEbtda)}
            />
            <Indicadores
              indicador='DÍV.LÍQUIDA/EBIT'
              info={FormatIndicador('divida_liquida_ebit',dividaLiquidaEbit)}
            />
            <Indicadores
              indicador='PL/ATIVOS'
              info={FormatIndicador('patrimonio_ativos',patrimonioAtivos)}
            />

            <Indicadores
              indicador='PASSIVOS/ATIVOS'
              info={FormatIndicador('passivos_ativos',passivosAtivos)}
            />
  
            <Indicadores
              indicador='LIQUIDEZ CORRENTE'
              info={FormatIndicador('liquidez_corrente',liquidezCorrente)}
            />
        </ul>
      </div>

      <BoxHistoricoAcao
        acao={acao}
        tabela={rowData}
      />

      <div className='panel mt-5'>
        <div className='grid 1xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 '>
          <div className='subtitulo-page lg:col-span-4 sm:col-span-2 mb-5'>MAPA DE PROVENTOS</div>
          <div className='grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3'>
            <div className='ft-micro'>{dataCom == true ? <b><center>DATA COM</center></b> : <center>DATA COM</center>}</div>
            <center className='w-70'>
              <label className="w-12 h-6 relative">
                <input onClick={() => provDataCom()} type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                <span className="bg-[#ebedf2] dark:bg-dark block h-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300 "></span>
              </label>
            </center>
            <div className='ft-micro'><center>{dataCom == false ? <b>PAGAMENTO</b> : 'PAGAMENTO'}</center></div>
          </div>
        </div>
        <div className='w-full overflow-auto'>
          <div className="grid 1xl:grid-cols-12 lg:grid-cols-12 sm:grid-cols-12 grid-cols-12 gap-6 w-min800 w-full">
            <div>
              <div><center><b><br></br></b></center></div>
              <div><center><b>ANO</b></center></div>
              {anos.map((item, index) => {
                return (
                  <div key={index} className='mt-2'><center>{item}</center></div>
                )
              })}
            </div>
            <div className='xl:col-span-11 col-span-11'>
              <div className="grid 1xl:grid-cols-12 lg:grid-cols-12 sm:grid-cols-12 grid-cols-12 text-center">
                <div className='xl:col-span-12  col-span-12'><b>MESES DO ANO</b></div>
                <div><b>Janeiro</b></div>
                <div><b>Fevereiro</b></div>
                <div><b>Março</b></div>
                <div><b>Abril</b></div>
                <div><b>Maio</b></div>
                <div><b>Junho</b></div>
                <div><b>Julho</b></div>
                <div><b>Agosto</b></div>
                <div><b>Setembro</b></div>
                <div><b>Outubro</b></div>
                <div><b>Novembro</b></div>
                <div className='mb-1'><b>Dezembro</b></div>

                {anosEMeses.map((item, index) => {
                  return (
                    (item === 1) ? <div key={index} className='bg-proventos'></div> : <div key={index} className='bg-proventos-none'></div>
                  )
                })}
                <div>{percentual['1'] * 10}%</div>
                <div>{percentual['2'] * 10}%</div>
                <div>{percentual['3'] * 10}%</div>
                <div>{percentual['4'] * 10}%</div>
                <div>{percentual['5'] * 10}%</div>
                <div>{percentual['6'] * 10}%</div>
                <div>{percentual['7'] * 10}%</div>
                <div>{percentual['8'] * 10}%</div>
                <div>{percentual['9'] * 10}%</div>
                <div>{percentual['10'] * 10}%</div>
                <div>{percentual['11'] * 10}%</div>
                <div className='mb-1'>{percentual['12'] * 10}%</div>
                <div className='xl:col-span-12  col-span-12'><b>PERCENTUAL DOS MESES COM PROVENTOS</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='panel mt-5 xl:col-span-2'>
        <div className='flex justify-between'>
          <div className='subtitulo-page'>DIVIDENDOS</div>
          <div className='flex custom-select'>

            <Select
              className='text-sm w-200 mr-10'
              name="Tempo"
              value={selectedOptionTempo}
              onChange={SelectChangeTempo}
              options={[{ value: 1, label: '1 Ano' }, { value: 5, label: '5 Anos' }, { value: 10, label: '10 Anos' }, { value: 0, label: 'Máximo' }]}
              isSearchable={false}
            />
            <Select
              className='text-sm w-200'
              name="Proventos"
              value={selectedOptionProventos}
              onChange={SelectChangeProventos}
              options={[{ value: 1, label: 'Mensal' }, { value: 2, label: 'Anual' }, { value: 3, label: 'Mensal Agrupado' }, { value: 4, label: 'Anual Agrupado' }]}
              isSearchable={false}
            />
          </div>
        </div>
        <ReactApexChart key={dadosGrafico} options={chartData.options} series={chartData.series} type="bar" height={500} />
      </div>

      <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 text-center gap-5">
        <div className='panel mt-5'>
          <div className='subtitulo-page text-left mb-10'>DIVIDENDOS</div>
          <TabelaDividendos
            rowData={dadosProventosValor}
          />
        </div>

        <div className='panel mt-5'>
          <div className='subtitulo-page text-left mb-10'>BONIFICAÇÃO</div>
          <TabelaDividendos
            rowData={dadosProventosValor}
          />
        </div>

        <div className='panel mt-5'>
          <div className='subtitulo-page text-left mb-10'>DESDOBRAMENTO/GRUPAMENTO</div>
          <TabelaDividendos
            rowData={dadosProventosValor}
          />
        </div>
      </div>

      <div className='panel mt-5'>
        <div className='subtitulo-page'><b>RESUMO DA EMPRESA</b></div>
        <div className='mt-5'><b>SOBRE O BANCO DO BRASIL</b></div>
        <div className='mt-2'>O Banco do Brasil S.A, mais conhecido como BB, é uma das maiores instituições financeiras do país, sendo sua atuação ligada ao segmento de serviços bancários.

          Criado no início do século XIX, ainda no Brasil Império, o Banco do Brasil se tornou uma das maiores instituições financeiras do país ao longo do tempo, figurando na lista dos cinco maiores bancos de varejo do Brasil.

          O Banco do Brasil é constituído como sociedade de economia mista e suas ações são negociadas na Bolsa do Brasil, a B3, sob o código BBAS3.
        </div>
        <div className='mt-8 mb-2'><b>ATUAÇÃO DO BANCO DO BRASIL</b></div>
        <div>O Banco do Brasil S.A, mais conhecido como BB, é uma das maiores instituições financeiras do país, sendo sua atuação ligada ao segmento de serviços bancários.

          Criado no início do século XIX, ainda no Brasil Império, o Banco do Brasil se tornou uma das maiores instituições financeiras do país ao longo do tempo, figurando na lista dos cinco maiores bancos de varejo do Brasil.

          O Banco do Brasil é constituído como sociedade de economia mista e suas ações são negociadas na Bolsa do Brasil, a B3, sob o código BBAS3.
        </div>
      </div>

      <div className='panel mt-5'>
        <div className='subtitulo-page'><b>POSIÇÃO ACIONÁRIA</b></div>
        <div className="grid 1xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 text-center gap-5 mt-2">
          <div className='panel mt-2'>
            <div>INVESTIDORES</div>
            <div>874.587</div>
          </div>
        </div>
      </div>

      <div className='panel mt-5'>
        <div className='subtitulo-page text-left mb-2'>EMPRESAS RELACIONADAS</div>
        <div className="grid 1xl:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 text-center gap-5">
          <BoxEmpresasRelacionadas
            empresas={empresasRelacionadas}
          />
        </div>
      </div>
    </div>

  );
};

export default Acao;