import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/flatpickr.css';
import { useSelector } from 'react-redux';
import 'nouislider/distribute/nouislider.css';
import { timestampToDate, formatCurrency, calcularCorPorcentagem } from '../data/funcoes';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BoxTopAcao from '../components/acao/BoxTopAcao';
import ReactApexChart from 'react-apexcharts';
import Tippy from "@tippyjs/react";
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

  const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
  const colorCategorias = ["#e7515a", "#00ab55", "#0c60bb", "#43efbc", "#ef7817", "#ab0000", "#008fab", "#d2d212"];

  useEffect(() => {
    setSelectedOptionPeriodo({ value: '', label: 'Selecionar...' })
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

  const [dados, setDados] = useState([]);
  const get_dados = async (stock) => {
    const result = await fetch('http://localhost:3000/ativo/' + stock);
    const [data] = await result.json();
    setDados(data);
    tamanhoTela.largura <= 600 ? setVolatilidadeAcao(data.volatilidade * 0.60) : (tamanhoTela.largura <= 1000 ? setVolatilidadeAcao(data.volatilidade * 0.85) : setVolatilidadeAcao(data.volatilidade * 0.9))
    tamanhoTela.largura <= 600 ? setVolatilidadeIndice(data.ibov * 0.60) : (tamanhoTela.largura <= 1000 ? setVolatilidadeIndice(data.ibov * 0.85) : setVolatilidadeIndice(data.ibov * 0.9))
    setIndiceNome('IBOV')
  }
  useEffect(() => {
    get_dados(acao);
  }, []);



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
          opacityFrom: isDark ? 0.19 : 0.48,
          opacityTo: 0.05,
          stops: isDark ? [100, 100] : [45, 100],
        },
      },
    },
  };

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
          <div className='flex mt-3 xl:col-span-2'><img src={dados.logo} height={40} width={40} /><span className='mt-3 ml-5'><div className='subtitulo-page'>COTAÇÃO DO {acao}</div></span></div>
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
        <div className='subtitulo-page'>INDICADORES {acao}</div>
        <div className='mt-3'>INDICADORES DE VALUATION</div>
        <ul className="ltr:md:ml-auto rtl:md:mr-auto grid grid-cols-1 sm:grid-cols-3  xl:grid-cols-7 font-semibold divide-x ltr:divide-x-reverse divide-[#ebedf2] dark:divide-[#253b5c] text-white-dark mt-5 sm:mt-0">
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
    </div>

  );
};

export default Acao;