import { Link, useNavigate } from 'react-router-dom';
import React, { KeyboardEvent, ChangeEvent } from 'react';
import { useEffect, Fragment, useState } from 'react';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { removeCurrency, removeTrailingZeros, formatCurrency, formatCurrency2, formatDate, capitalizeLetters, calcularPorcentagem } from '../data/funcoes';
import globalVars from '../data/global'
import Posicao from '../components/patrimonio';

const Transacoes = () => {

  const location = useLocation();
  const params = location.state;
  const userid = params.userid;

  const [selectedOption, setSelectedOption] = useState([]);
  const SelectChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  };


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
    const data = await fetch('http://localhost:3000/categorias')
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

  return (
    <div><div className='titulo-page'>PATRIMÔNIO</div>
      <ul className="flex space-x-2 rtl:space-x-reverse mb-5 mt-4">
        <li>
          <Link to="/components/Patromonio" className="text-primary hover:underline">
            Accounts
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Instagram</span>
        </li>
      </ul>

      <div className="panel">
        <div className="grid 1xl:grid-cols-7 lg:grid-cols-7 sm:grid-cols-1 grid-cols-1">
          <div className="grid 1xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 mb-3 xl:col-span-4">
            <span className="badge bg-warning p-3 text-center mrt-3"><div className='subtitulo-page'>PATRIMÔNIO</div><div className='subtitulo-valor mt-2'>{renderizarConteudo('sensitivy-field', formatCurrency2(removeTrailingZeros(valorTotal)))}</div></span>
            <div className="panel rounded-md items-center group xl:col-span-1 col-span-3 p-1 mrtop-3">
              <div className='ml-4'><b>CRESCIMENTO</b></div>
              <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3 ml-4">
                <div className='mt-15'>6 MESES<div className='subtitulo-valor2'>5,80%</div></div><div>12 MESES<div className='subtitulo-valor2'>16,67%</div></div><div>24 MESES<div className='subtitulo-valor2'>16,81%</div></div>
              </div>
            </div>
          </div>
          <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-6 mb-8 xl:col-span-3 pt-5 zi-3">
            <Select
              className='text-sm'
              name="corretora"
              value={selectedOption}
              onChange={SelectChange}
              options={categoriaOptions}
              isSearchable={false}
            />
            <Select
              className='text-sm'
              name="corretora"
              value={selectedOption}
              onChange={SelectChange}
              options={categoriaOptions}
              isSearchable={false}
            />
            <Select
              className='text-sm'
              name="corretora"
              value={selectedOption}
              onChange={SelectChange}
              options={categoriaOptions}
              isSearchable={false}
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-base">Basic</h3>
          <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
            <div style={acao} className="h-4 ltr:rounded-l-full rtl:rounded-r-full w-1/12 text-center text-white text-xs"></div>
            <div style={fii} className="h-4 text-center text-white text-xs"></div>
            <div style={fiagro} className="h-4 text-center text-white text-xs"></div>
            <div style={etfn} className="h-4 text-center text-white text-xs"></div>
            <div style={etfi} className="h-4 text-center text-white text-xs"></div>
            <div style={criptomoeda} className="h-4 text-center text-white text-xs"></div>
            <div style={fixa} className="h-4 text-center text-white text-xs"></div>
            <div style={caixa} className="h-4 ltr:rounded-r-full rtl:rounded-l-full w-1/12 text-center text-white text-xs"></div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-5">

          <h5 className="font-semibold text-lg dark:text-white-light">POSIÇÃO NA CARTEIRA</h5>
        </div>
        <div className="space-y-2 font-semibold">
          {categoriaOptions.map((option, index) => {
            return (
              <Posicao
                key={index}
                hide={ocultarDados}
                categoria={option.value}
                categoria_nome={option.label}
                valor_total_patrimonio={valorTotal}
              />
            );
          })}
        </div>


      </div>
    </div>
  );
};

export default Transacoes;