import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/flatpickr.css';
import { useSelector } from 'react-redux';
import 'nouislider/distribute/nouislider.css';
import { timestampToDate, formatCurrency, calcularCorPorcentagem, ultimos60Meses, mesNome, mesNomeFull, separarTiposLabels, getLast60Months } from '../data/funcoes';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BoxTopAcao from '../components/acao/BoxTopAcao';
import ReactApexChart from 'react-apexcharts';
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import Indicadores from '../components/acao/indicadores';

const Acao = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const segments = location.pathname.split('/');
  const acao = segments[segments.length - 1].toUpperCase();

  const [selectedOptionPeriodo, setSelectedOptionPeriodo] = useState([]);
  const SelectChangePeriodo = (selectedOptionPeriodo) => {
    get_data(acao, selectedOptionPeriodo.value);
    setSelectedOptionPeriodo(selectedOptionPeriodo)
  };


  const [selectedOptionProventos, setSelectedOptionProventos] = useState([]);
  const SelectChangeProventos = (selectedOptionProventos) => {
    //get_dataProventos(acao, selectedOptionProventos.value);
    setSelectedOptionProventos(selectedOptionProventos)
  };


  const [selectedOptionTempo, setSelectedOptionTempo] = useState([]);
  const SelectChangeTempo = (selectedOptionTempo) => {
    //get_dataTempo(acao, selectedOptionTempo.value);
    getDadosProventos2(acao, selectedOptionTempo.value)
    getDadosProventos(acao, selectedOptionTempo.value)
    setSelectedOptionTempo(selectedOptionTempo)
  };

  const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
  const colorCategorias = ["#e7515a", "#00ab55", "#0c60bb", "#43efbc", "#ef7817", "#ab0000", "#008fab", "#d2d212"];

  useEffect(() => {
    setSelectedOptionPeriodo({ value: '', label: 'Selecionar...' })
    setSelectedOptionProventos({ value: '', label: 'Selecionar...' })
    setSelectedOptionTempo({ value: '', label: 'Selecionar...' })
  }, [])

  const [data, setData] = useState([]);
  const get_data = async (stock, periodo) => {
    const result = await fetch('http://localhost:3000/cotacao/' + stock + '/' + periodo);
    const data = await result.json();
    setData(data);
  }
  useEffect(() => {
    get_data(acao, 1);
  }, []);


  const [tamanhoTela, setTamanhoTela] = useState({
    largura: window.innerWidth,
    altura: window.innerHeight,
  });
  const [volatilidadeAcao, setVolatilidadeAcao] = useState(0);
  const [volatilidadeIndice, setVolatilidadeIndice] = useState(0);
  const [indiceNome, setIndiceNome] = useState('');
  const cotacao = data.map(item => item.close);
  const cotacaoData = data.map(item => timestampToDate(item.data));



  const [dadosProventos, setDadosProventos] = useState([]);
  const [dadosProventosValor, setDadosProventosValor] = useState([]);
  const getDadosProventos = async (stock, periodo) => {
    const data = await fetch('http://localhost:3000/proventos/' + stock + '/s' + '/' + periodo)
    const response = await data.json();

    const resultado = separarTiposLabels(response);

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


  const [dados, setDados] = useState([]);
  const get_dados = async (stock) => {
    const result = await fetch('http://localhost:3000/ativo/' + stock);
    const [data] = await result.json();
    setDados(data);
    tamanhoTela.largura <= 600 ? setVolatilidadeAcao(data.volatilidade * 0.60) : (tamanhoTela.largura <= 1000 ? setVolatilidadeAcao(data.volatilidade * 0.85) : setVolatilidadeAcao(data.volatilidade * 0.9))
    tamanhoTela.largura <= 600 ? setVolatilidadeIndice(data.ibov * 0.60) : (tamanhoTela.largura <= 1000 ? setVolatilidadeIndice(data.ibov * 0.85) : setVolatilidadeIndice(data.ibov * 0.9))
    setIndiceNome('IBOV')
  }

  const [ultimos5Anos, setUltimos5Anos] = useState([])
  const [seriesDataTotal, setSeriesDataTotal] = useState([])
  useEffect(() => {
    getDadosProventos2('PETR4', 1)
    getDadosProventos(acao, 1)
    get_dados(acao);
    const ultimos5Anoss = ultimos60Meses();
    // const dados = getLast60Months();
    // setTimeout(() => {

    //   setSeriesData(dados);
    // }, 1000);
    setUltimos5Anos(ultimos5Anoss);
  }, []);


  const [dividendosTotal, setDividendosTotal] = useState([]);
  const [jcpTotal, setJcpTotal] = useState([]);
  const [rendimentosTotal, setRendimentosTotal] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const seriesData = [];

    for (let i = 0; i < 60; i++) {
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
        updatedSeriesData[i].y = updatedSeriesData[i].y + (match.soma).toFixed(2);
      }
    }
    setSeriesDataTotal(updatedSeriesData);
  }, [dadosProventosValor]);

  useEffect(() => {
    const currentDate = new Date();
    const seriesData = [];

    for (let i = 0; i < 60; i++) {
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

    for (let i = 0; i < 60; i++) {
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

    for (let i = 0; i < 60; i++) {
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

  useEffect(() => {
    montarGrafico(selectedOptionTempo.value)
  }, [dividendosTotal, jcpTotal, rendimentosTotal, dadosProventosValor])


  const [dadosGrafico, setDadosGrafico] = useState([]);

  function montarGrafico(num) {
    if (num === 10 || num === 0 || num === 1 || num === 2 || num === 3) {
      setDadosGrafico([
        { name: "Dividendos", data: dividendosTotal },
        { name: "JCP", data: jcpTotal },
        { name: "Rendimentos", data: rendimentosTotal }
      ]);
    } else {
      setDadosGrafico([{ name: "Proventos", data: seriesDataTotal }]);
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
        strokeDashArray: 12,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          tickAmount: 12,
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
          opacityFrom: isDark ? 0.19 : 0.48,
          opacityTo: 0.05,
          stops: isDark ? [100, 100] : [45, 100],
        },
      },
    },
  };




  const chartData = {
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
      xaxis: {
        type: 'category',
        labels: {
          formatter: function (val) {
            return mesNome(val)
          }
        },
        group: {
          style: {
            fontSize: '10px',
            fontWeight: 700
          },
          groups: ultimos5Anos
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
      <div className='panel mt-6'>
        <div className="grid 1xl:grid-cols-6 lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className='flex mt-3 xl:col-span-2'><img src={dados.logo} height={40} width={40} /><span className='mt-3 ml-5'><div className='subtitulo-page'>COTAÇÃO ({acao})</div></span></div>
          <div></div>
          <div></div>
          <div className='flex justify-end xl:col-span-2'>
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
        <div className='subtitulo-page'>INDICADORES ({acao})</div>
        <div className='mt-3 mb-5'><b>INDICADORES DE VALUATION</b></div>
        <ul className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-7 font-semibold text-white-dark sm:mt-0 gap-6">
          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />
          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />
        </ul>
      </div>
      <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className='panel mt-5'>
          <div className='mt-3 mb-5'><b>INDICADORES DE EFICIÊNCIA</b></div>
          <ul className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-2 font-semibold text-white-dark sm:mt-0 gap-6">
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />
          </ul>
        </div>
        <div className='panel mt-5'>
          <div className='mt-3 mb-5'><b>INDICADORES DE RENTABILIDADE</b></div>
          <ul className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-2 font-semibold text-white-dark sm:mt-0 gap-6">
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />

          </ul>
        </div>
        <div className='panel mt-5'>
          <div className='mt-3 mb-5'><b>INDICADORES DE CRESCIMENTO</b></div>
          <ul className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-2 font-semibold text-white-dark sm:mt-0 gap-6">
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />
            <Indicadores
              indicador='Market Cap'
              info='$22.9B'
            />

          </ul>
        </div>
      </div>
      <div className='panel mt-5'>
        <div className='mt-3 mb-5'><b>INDICADORES DE ENDIVIDAMENTO</b></div>
        <ul className="grid grid-cols-1 sm:grid-cols-3  xl:grid-cols-7 font-semibold text-white-dark sm:mt-0 gap-6">
          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />
          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />

          <Indicadores
            indicador='Market Cap'
            info='$22.9B'
          />
        </ul>
      </div>
      <div className='panel mt-5'>
        <div className='subtitulo-page'>MAPA DE PROVENTOS ({acao})</div>
        <div className='w-full overflow-auto'>
          <div className="grid 1xl:grid-cols-12 lg:grid-cols-12 sm:grid-cols-12 grid-cols-12 gap-6 mt-5 w-min800 w-full">
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
      <div className='panel mt-5'>
        <div className='flex justify-between'>
          <div className='subtitulo-page'>DIVIDENDOS ({acao})</div>
          <div className='flex'>

            <Select
              className='text-sm w-200 mr-10'
              name="Tempo"
              value={selectedOptionTempo}
              onChange={SelectChangeTempo}
              options={[{ value: 1, label: '1 Ano' }, { value: 2, label: '5 Anos' }, { value: 3, label: '10 Anos' }, { value: 0, label: 'Máximo' }]}
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
        <ReactApexChart key={dadosGrafico} options={chartData.options} series={chartData.series} type="bar" height={450} />
      </div>
    </div>

  );
};

export default Acao;