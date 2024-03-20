import { Link, useNavigate } from 'react-router-dom';
import { useEffect, Fragment, useState } from 'react';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { removeCurrency, removeTrailingZeros, formatCurrency, formatCurrency2, formatDate, capitalizeLetters, calcularPorcentagem, getLastDayMonths, obterArrayMesesAbreviados } from '../data/funcoes';
import globalVars from '../data/global'
import Box from '../components/proventos/box';
import ReactApexChart from 'react-apexcharts';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useTranslation } from 'react-i18next';
import WaterUsageChart from './graph';

const Proventos = () => {

  const { t } = useTranslation();
  const location = useLocation();
  const params = location.state;

  const [quantidadeMeses, setQuantidadeMeses] = useState([]);
  const [selectedOptionAno, setSelectedOptionAno] = useState([]);
  const [optionAno, setOptionAno] = useState(1);
  const SelectChangeAno = (selectedOptionAno) => {
    fetchResultados(selectedOptionAno.value, optionCategoria);
    setSelectedOptionAno(selectedOptionAno)
    setOptionAno(selectedOptionAno.value)
  };

  const [selectedOptionCategoria, setSelectedOptionCategoria] = useState([]);
  const [optionCategoria, setOptionCategoria] = useState(0);
  const SelectChangeCategoria = (selectedOptionCategoria) => {
    fetchResultados(optionAno, selectedOptionCategoria.value);
    setSelectedOptionCategoria(selectedOptionCategoria)
    setOptionCategoria(selectedOptionCategoria.value)
  };

  const [selectedOptionPeriodicidade, setSelectedOptionPeriodicidade] = useState([]);
  const [optionPeriodicidade, setOptionPeriodicidade] = useState(0);
  const SelectChangePeriodicidade = (selectedOptionPeriodicidade) => {
    setSelectedOptionPeriodicidade(selectedOptionPeriodicidade)
    setOptionPeriodicidade(selectedOptionPeriodicidade.value)
  };

  const [selectedOptionTipo, setSelectedOptionTipo] = useState([]);
  const [optionTipo, setOptionTipo] = useState(0);
  const SelectChangeTipo = (selectedOptionTipo) => {
    setSelectedOptionTipo(selectedOptionTipo)
    setOptionTipo(selectedOptionTipo.value)
  };

  useEffect(() => {
    setSelectedOptionCategoria({ value: '0', label: 'COMPLETO' })
    setSelectedOptionAno({ value: '0', label: '1 ANO' })
    setSelectedOptionPeriodicidade({ value: '0', label: 'MENSAL' })
    setSelectedOptionTipo({ value: '0', label: 'PAGAMENTO' })
  }, [])

  const [valorTotal, setValorTotal] = useState(0);
  let total: number;
  const getValorTotal = async () => {
    try {
      const data = await fetch('http://localhost:3000/valor_total_patrimonio/');
      const response = await data.json();
      total = response.total_valor;
      setValorTotal(response.total_valor);
    } catch (error) {
      console.error('Erro ao obter a lista de usuários:', error);
    }
  }

  const [options, setOptions] = useState([]);
  const fetchApiOption = async () => {
    const data = await fetch('http://localhost:3000/brokers')
    const response = await data.json()
    setOptions(response)
  }
  const [categoriaOptions, setCategoriaOptions] = useState([]);
  const catOptions = async () => {
    const data = await fetch('http://localhost:3000/categorias/proventos')
    const response = await data.json()
    setCategoriaOptions(response)
  }

  const getAtivos = async () => {
    try {
      const data = await fetch('http://localhost:3000/percentual_categorias/');
      const response = await data.json();
      response.forEach((item, index) => {
        switch (item.categoria_prefixo) {
          case "Ações":
            setStyleAcao(calcularPorcentagem(parseFloat(item.total), parseFloat(total)));
            break;
          case "FII":
            setStyleFii(calcularPorcentagem(parseFloat(item.total), parseFloat(total)));
            break;
          case "FIAgro":
            setStyleFiagro(calcularPorcentagem(parseFloat(item.total), parseFloat(total)));
            break;
          case "ETF Nacionais":
            setStyleEtfn(calcularPorcentagem(parseFloat(item.total), parseFloat(total)));
            break;
          case "ETF Internacionais":
            setStyleEtfi(calcularPorcentagem(parseFloat(item.total), parseFloat(total)));
            break;
          case "Criptomoedas":
            setStyleCriptomoeda(calcularPorcentagem(parseFloat(item.total), parseFloat(total)));
            break;
          case "Renda Fixa":
            setStyleFixa(calcularPorcentagem(parseFloat(item.total), parseFloat(total)));
            break;
          case "Caixa":
            { setStyleCaixa(calcularPorcentagem(parseFloat(item.total), parseFloat(total))); }
            break;
          default:
            break;
        }
      });
    } catch (error) {
      console.error('Erro ao obter a lista de usuários:', error);
    }
  }

  useEffect(() => {
    getValorTotal();
    fetchApiOption();
    catOptions();
    setOcultarDados(globalVars.getVariable1());
    getAtivos();
  }, []);

  const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

  const [ocultarDados, setOcultarDados] = useState<boolean>(!globalVars.getVariable1());

  const renderizarConteudo = (className: string, texto: string) => {
    if (ocultarDados && className === 'sensitivy-field') {
      return texto.replace(/./g, '*'); // Substitui cada letra por um asterisco
    }
    return texto;
  };
  const fetchconfigHideValue = async () => {
    try {
      const data = await fetch('http://localhost:3000/configs');
      const responseArray = await data.json();

      if (responseArray && responseArray.length > 0) {
        const firstConfig = responseArray[0];
        const hideValues = firstConfig.hideValues;

        if (hideValues !== undefined) {
          setOcultarDados(hideValues)
        } else {
          console.error('Chave hideValues não encontrada no objeto de configuração.');
        }
      } else {
        console.error('Resposta vazia ou não no formato esperado.');
      }
    } catch (error) {
      console.error('Erro ao buscar configHideValue:', error);
    }
  }

  useEffect(() => {
    const handleVariable1Change = () => {
      setOcultarDados((prevState) => !prevState); // Usando uma função no setOcultarDados
    };
    globalVars.addListener(handleVariable1Change);
    return () => {
      globalVars.removeListener(handleVariable1Change);
    };
  }, []);

  useEffect(() => {
    fetchconfigHideValue(); // Chama a função assíncrona aqui
  }, []); // Sem dependências para garantir que seja chamado apenas uma vez


  const [styleAcao, setStyleAcao] = useState(0);
  const [styleFii, setStyleFii] = useState(0);
  const [styleFiagro, setStyleFiagro] = useState(0);
  const [styleEtfn, setStyleEtfn] = useState(0);
  const [styleEtfi, setStyleEtfi] = useState(0);
  const [styleCriptomoeda, setStyleCriptomoeda] = useState(0);
  const [styleFixa, setStyleFixa] = useState(0);
  const [styleCaixa, setStyleCaixa] = useState(0);
  const acao = { 'backgroundColor': 'rgb(231, 81, 90)', width: styleAcao + '%' };
  const fii = { 'backgroundColor': '#00AB55', width: styleFii + '%' };
  const fiagro = { 'backgroundColor': '#0c60bb', width: styleFiagro + '%' };
  const etfn = { 'backgroundColor': '#43efbc', width: styleEtfn + '%' };
  const etfi = { 'backgroundColor': '#ef7817', width: styleEtfi + '%' };
  const criptomoeda = { 'backgroundColor': '#ab0000', width: styleCriptomoeda + '%' };
  const fixa = { 'backgroundColor': '#008fab', width: styleFixa + '%' };
  const caixa = { 'backgroundColor': '#d2d212', width: styleCaixa + '%' };




  const [resultados, setResultados] = useState<Resultado[]>([]);

  const fetchResultados = async (meses: any, modo: any) => {
    try {
      const dadosDaAPI = await fetch('http://localhost:3000/get_relatorio/' + meses + '/' + modo);
      const resultadosDaAPI = await dadosDaAPI.json();
      setResultados(resultadosDaAPI);
      const mesesAbreviados = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];

      const mesesArray: string[] = [];
      let ultimoMes: string | null = null;

      resultadosDaAPI.forEach(item => {
        const data = new Date(item.historico_clientes_data);
        const mesAbreviado = mesesAbreviados[data.getUTCMonth()];

        // Adiciona ao array apenas se não for o mesmo mês consecutivo
        if (mesAbreviado !== ultimoMes) {
          mesesArray.push(mesAbreviado);
          ultimoMes = mesAbreviado;
        }
      });

      setQuantidadeMeses(mesesArray)
    } catch (error) {
      console.error('Erro ao buscar resultados:', error);
    }
  };

  useEffect(() => {
    fetchResultados(1, 0);
  }, []);


  const organizarResultados = (): { categoria_nome: string; total_valor: number[] }[] => {
    const resultadoPorCategoria: { [key: string]: number[] } = {};

    resultados.forEach((resultado) => {
      const categoria = resultado.categoria_nome;
      const totalValor = parseFloat(resultado.total_valor);

      if (!resultadoPorCategoria[categoria]) {
        resultadoPorCategoria[categoria] = [];
      }

      resultadoPorCategoria[categoria].push(totalValor);
    });

    // Convertendo o objeto para o formato desejado
    const mapResultados = Object.keys(resultadoPorCategoria).map((categoria) => ({
      categoria_nome: categoria,
      total_valor: resultadoPorCategoria[categoria],
    }));

    return mapResultados;
  };

  const mapResultados = organizarResultados();

  const colorCategorias = ["#e7515a", "#00ab55", "#0c60bb", "#43efbc", "#ef7817", "#ab0000", "#008fab", "#d2d212"];
  const revenueChart: any = {
    series: mapResultados.map((item, index) => ({
      name: `${item.categoria_nome}`,
      data: item.total_valor,
    })),
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
      labels: quantidadeMeses,
      xaxis: {
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
            cssClass: 'apexcharts-xaxis-title',
          },
        },
      },
      yaxis: {
        tickAmount: 7,
        axisTicks: {
          show: true,
        },
        labels: {
          formatter: (value: number) => {
            return (ocultarDados != true) ?
              formatCurrency(value.toFixed(2)) : 'R$ ********'
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
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
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
          opacityFrom: isDark ? 0.19 : 0.28,
          opacityTo: 0.05,
          stops: isDark ? [100, 100] : [45, 100],
        },
      },
    },
  };

  return (
    <div><div className='titulo-page'>PROVENTOS</div>
      <ul className="flex space-x-2 rtl:space-x-reverse mb-5 mt-4">
        <li>
          <Link to="/" className="text-primary hover:underline">
            {t('Site')}
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Proventos</span>
        </li>
      </ul>

      <div className="panel">
        <div className="grid 1xl:grid-cols-12 lg:grid-cols-12 sm:grid-cols-1 grid-cols-1 gap-6">
          <div className="grid 1xl:grid-cols-7 lg:grid-cols-7 sm:grid-cols-3 grid-cols-1 mb-3 xl:col-span-6">
            <span style={{ height: '60px' }} className="badge bg-warning p-2 text-center mrt-3 xl:col-span-2 col-span-2 ">
              <div className=''><b>TOTAL RECEBIDO</b></div>
              <div className='subtitulo-valor mt-2'>{renderizarConteudo('sensitivy-field', formatCurrency2(removeTrailingZeros(valorTotal)))}</div>
            </span>
            <div className="panel ft-mini2 rounded-md items-center group xl:col-span-5 col-span-5 p-1 mrtop-3 mt-1" style={{ height: '60px' }} >
              <div className="grid 1xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 col-span-5 xl:col-span-5">
                <div className='mt-1'><center><b>TOTAL PERIODO</b></center><div className='ft-micro mt-1'><center>R$ 100.000,12</center></div></div>
                <div className='mt-1'><center><b>TOTAL 6 MESES</b></center><div className='ft-micro mt-1'><center>R$ 100.000,12</center></div></div>
                <div className='mt-1'><center><b>TOTAL 12 MESES</b></center><div className='ft-micro mt-1'><center>R$ 100.000,12</center></div></div>
                <div className='mt-1'><center><b>TOTAL 24 MESES</b></center><div className='ft-micro mt-1'><center>R$ 100.000,12</center></div></div>
              </div>
            </div>
          </div>
          <div className="grid 1xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-4 grid-cols-1 gap-6 mb-8 xl:col-span-6 pt-5 zi-3 custom-select">

            <Select
              className='text-sm'
              name="ano"
              value={selectedOptionPeriodicidade}
              onChange={SelectChangePeriodicidade}
              options={[{ 'value': 1, 'label': 'MENSAL' }, { 'value': 2, 'label': 'TRIMESTRAL' }, { 'value': 3, 'label': 'SEMESTRAL' }, { 'value': 4, 'label': 'ANUAL' }]}
              isSearchable={false}
            />
            <Select
              className='text-sm'
              name="ano"
              value={selectedOptionTipo}
              onChange={SelectChangeAno}
              options={[{ 'value': 1, 'label': 'PAGAMENTO' }, { 'value': 2, 'label': 'DATA COM' }]}
              isSearchable={false}
            />
            <Select
              className='text-sm'
              name="categoria"
              value={selectedOptionCategoria}
              onChange={SelectChangeCategoria}
              options={[{ 'value': 0, 'label': 'COMPLETO' }, { 'value': 1, 'label': 'POR CATEGORIA' }, { 'value': 2, 'label': 'POR SEGMENTO' }, { 'value': 1, 'label': 'POR ATIVO' }]}
              isSearchable={false}
            />
            <Select
              className='text-sm'
              name="ano"
              value={selectedOptionAno}
              onChange={SelectChangeAno}
              options={[{ 'value': 1, 'label': '1 ANO' }, { 'value': 2, 'label': '2 ANOS' }, { 'value': 3, 'label': '3 ANOS' }, { 'value': 4, 'label': '5 ANOS' }, { 'value': 5, 'label': 'TUDO' }]}
              isSearchable={false}
            />
          </div>
        </div>
        <ReactApexChart key={quantidadeMeses} series={revenueChart.series} options={revenueChart.options} type="area" height={325} />
        <div className="space-y-2">
          <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
            <Tippy trigger="mouseenter focus" content={"Ação - " + styleAcao + "%"}>
              <div style={acao} className="h-4 ltr:rounded-l-full rtl:rounded-r-full w-1/12 text-center text-white text-xs"></div>
            </Tippy>

            <Tippy trigger="mouseenter focus" content={"FII - " + styleFii + "%"}>
              <div style={fii} className="h-4 text-center text-white text-xs"></div>
            </Tippy>
            <Tippy trigger="mouseenter focus" content={"FIAgro - " + styleFiagro + "%"}>
              <div style={fiagro} className="h-4 text-center text-white text-xs"></div>
            </Tippy>
            <Tippy trigger="mouseenter focus" content={"ETF Nacional - " + styleEtfn + "%"}>
              <div style={etfn} className="h-4 text-center text-white text-xs"></div>
            </Tippy>
            <Tippy trigger="mouseenter focus" content={"ETF Internacional - " + styleEtfi + "%"}>
              <div style={etfi} className="h-4 text-center text-white text-xs"></div>
            </Tippy>
            <Tippy trigger="mouseenter focus" content={"Criptomoeda - " + styleCriptomoeda + "%"}>
              <div style={criptomoeda} className="h-4 text-center text-white text-xs"></div>
            </Tippy>
            <Tippy trigger="mouseenter focus" content={"Renda Fixa - " + styleFixa + "%"}>
              <div style={fixa} className="h-4 text-center text-white text-xs"></div>
            </Tippy>
            <Tippy trigger="mouseenter focus" content={"Caixa - " + styleCaixa + "%"}>
              <div style={caixa} className="h-4 ltr:rounded-r-full rtl:rounded-l-full w-1/12 text-center text-white text-xs"></div>
            </Tippy>
          </div>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-bold text-lg dark:text-white-light mt-5">ATIVOS POR CATEGORIA</h5>
        </div>

        <div className="grid 1xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-1 grid-cols-1 gap-6">
          <div className='xl:col-span-2 col-span-2'>
            <WaterUsageChart />
          </div>
          <div className="space-y-2 font-semibold xl:col-span-3 col-span-3">
            {categoriaOptions.map((option, index) => {
              return (
                <Box
                  hide={ocultarDados}
                  categoria={option.value}
                  categoria_nome={option.label}
                  valor_total_patrimonio={valorTotal}
                  key={index}
                />
              );
            })}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Proventos;