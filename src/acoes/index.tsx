import { Link, useNavigate } from 'react-router-dom';
import React, { KeyboardEvent, ChangeEvent } from 'react';
import { useEffect, Fragment, useState } from 'react';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import { useTranslation } from 'react-i18next';
import BoxCotacoes from '../components/acoes/boxCotacoes';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import BoxRanking from '../components/acoes/boxRanking';

const Acoes = () => {
  const { t } = useTranslation();

  const [dataIndice, setDataIndice] = useState([]);
  const getDataIndice = async () => {
    const data = await fetch('http://localhost:3000/lista_indices_b3/')
    const response = await data.json()
    const json = response.map((item, index) => ({
      'value': item.indices_b3_id,
      'label': item.nome.toString(),
    }));
    setDataIndice(json);
  }

  const [estatisticasMin, setEstatisticasMin] = useState([]);
  const [estatisticasMax, setEstatisticasMax] = useState([]);
  const [estatisticasAtual, setEstatisticasAtual] = useState([]);
  const getEstatisticas = async (codigo) => {
    const data = await fetch('http://localhost:3000/get_estatisticas/'+codigo)
    const response = await data.json()
    setEstatisticasMin(response[0].minima);
    setEstatisticasMax(response[0].maxima);
    setEstatisticasAtual(response[0].atual);
  }

  const [selectedOptionIndice, setSelectedOptionIndice] = useState([]);
  const SelectChangeIndice = (selectedOptionIndice) => {
    getDadosRanking(selectedOptionIndice.value);
    setSelectedOptionIndice(selectedOptionIndice);
  };
  const dados = [1, 1, 1, 1, 1];

  const [dadosRanking, setDadosRanking] = useState([]);
  const getDadosRanking = async (indice) => {
    const data = await fetch('http://localhost:3000/get_lista_indice/' + indice)
    const response = await data.json()
    setDadosRanking(response);
  }

  useEffect(() => {
    getDataIndice();
    getDadosRanking(1);
    getEstatisticas('IBOV');
    setSelectedOptionIndice({ value: '', label: 'Selecionar...' })
  }, [])

  return (
    <div>
      {/* <div className='titulo-page'>AÇÕES</div>
      <ul className="flex space-x-2 rtl:space-x-reverse mb-5 mt-4">
        <li>
          <Link to="/" className="text-primary hover:underline">
            {t('Site')}
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          {t('Acoes')}
        </li>
      </ul> */}
      <div className="grid 1xl:grid-cols-7 lg:grid-cols-7 sm:grid-cols-2 grid-cols-1 gap-6 custom-select">

        <div className='panel h-30 mb-5 xl:col-span-2'><div className='mt-3'><b>FILTRO POR ÍNDICE</b></div>
          <Select
            className='text-sm xl:col-span-2 col-span-2 sm:col-span-2 mt-3'
            name="indice"
            value={selectedOptionIndice}
            onChange={SelectChangeIndice}
            options={dataIndice}
            isSearchable={false}
          />
        </div>


        <div className='panel mb-5 xl:col-span-3'>
          <div className="grid 1xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
            <center>
              <div className='text-gray ft-large mt-3'>IBOVESPA</div>
              <div className='ft-xlarge mt-6'>{Math.round(estatisticasAtual).toLocaleString('pt-BR')}</div>
            </center>
            <div>
              <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                <img width='20' style={{ marginLeft: '70px' }} src='./src/assets/images/outros/down.png' className='mt-4' />
                <div className='xl:col-span-2 ft-micro mt-4'><b>{Math.round(estatisticasMax).toLocaleString('pt-BR')}</b> Min.52 semanas</div>
                <img width='20' style={{ marginLeft: '70px' }} src='./src/assets/images/outros/up.png' />
                <div className='xl:col-span-2 ft-micro xl:col-span-2'><b>{Math.round(estatisticasMin).toLocaleString('pt-BR')}</b> Min.52 semanas</div>

              </div>
            </div>
          </div>
          <div className="grid 1xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6 mt-5">

            <div></div>
          </div>
        </div>
        <div className='panel mb-5'><center><div className='text-gray ft-large mt-4'>SETORES</div><div className='ft-xlarge mt-5'>10</div></center></div>
        <div className='panel mb-5'><center><div className='text-gray ft-large mt-4'>EMPRESAS</div><div className='ft-xlarge mt-5'>434</div></center></div>
      </div>
      <div className="grid 1xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-6 mt-7">
        <div className='titulo-page pb-5 xl:col-span-2'>COTAÇÕES DE HOJE</div>
        <div className='titulo-page pb-5 xl:col-span-3 pl-3'>RANK DE AÇÕES</div>
      </div>

      <div className="grid 1xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-1 grid-cols-1 gap-6">
        <div className="grid 1xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 xl:col-span-2 pr-3">
          <div>
            <div className='ft-total w-100'>
              <div className="pb-2">ALTAS
                <Tippy trigger="mouseenter focus" content="Maiores altas do mercado.">
                  <button type="button" data-trigger="mouseenter" className="btn btn-primary rounded-full h-18 p-1 float-right">
                    ?
                  </button>
                </Tippy>
              </div>
            </div>
            <div className="panel pt-5 p-0">
              {(() => {
                const RankingAlta = dadosRanking.slice(0, 5);
                return RankingAlta.map((item, index) => (
                  <React.Fragment key={index}>
                    <BoxCotacoes
                      posicao={(index + 1) + 'º'}
                      codigo={item.ativo_codigo_b3}
                      nome={item.ativo_nome}
                      logo={item.logo}
                      percentual={item.percentual}
                      valor={item.ativo_valor}
                      operador={1}
                    />
                    {index < 4 ? (
                      <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b] my-4"></div>
                    ) : (<div className='p-2'></div>)}
                  </React.Fragment>
                ));
              })()}
            </div>
            <button className='panel h-30 mt-3 ver_lista w-full'><center>VER LISTA COMPLETA</center></button>
          </div>
          <div>
            <div className='ft-total w-100'>
              <div className="pb-2">BAIXAS
                <Tippy trigger="mouseenter focus" content="Maiores baixas do mercado.">
                  <button type="button" data-trigger="mouseenter" className="btn btn-primary rounded-full h-18 p-1 float-right">
                    ?
                  </button>
                </Tippy>
              </div>
            </div>
            <div className="panel pt-5 p-0">
            {(() => {
                const rankingBaixa = dadosRanking.reverse().slice(0, 5);
                return rankingBaixa.map((item, index) => (
                  <React.Fragment key={index}>
                    <BoxCotacoes
                      posicao={(index + 1) + 'º'}
                      codigo={item.ativo_codigo_b3}
                      nome={item.ativo_nome}
                      logo={item.logo}
                      percentual={item.percentual}
                      valor={item.ativo_valor}
                      operador={0}
                    />
                    {index < 4 ? (
                      <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b] my-4"></div>
                    ) : (<div className='p-2'></div>)}
                  </React.Fragment>
                ));
              })()}
            </div>
            <button className='panel h-30 mt-3 ver_lista w-full'><center>VER LISTA COMPLETA</center></button>
          </div>
        </div>

        <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 xl:col-span-3 pl-3">
          <div>
            <div className='ft-total w-200'>
              <div className="pb-2">MAIS POPULARES
                <Tippy trigger="mouseenter focus" content={<center><span>Ranking das ações mais<br />populares do Ibovespa.</span></center>}>
                  <button type="button" data-trigger="mouseenter" className="btn btn-primary rounded-full h-18 p-1 float-right">
                    ?
                  </button>
                </Tippy>
              </div>
            </div>
            <div className="panel pt-5 p-0">
              {dados.map((item, index) => (
                <React.Fragment key={index}>
                  <BoxRanking
                    posicao={(index + 1) + 'º'}
                  />
                  {index < 4 ? (
                    <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b] my-4"></div>
                  ) : (<div className='p-2'></div>)}
                </React.Fragment>
              ))}
            </div>
            <button className='panel h-30 mt-3 ver_lista w-full'><center>VER LISTA COMPLETA</center></button>

          </div>
          <div>
            <div className='ft-total w-200'>
              <div className="pb-2">MAIORES LUCROS
                <Tippy trigger="mouseenter focus" content={<center><span>Ranking dos maiores<br />lucros do Ibovespa.</span></center>}>
                  <button type="button" data-trigger="mouseenter" className="btn btn-primary rounded-full h-18 p-1 float-right">
                    ?
                  </button>
                </Tippy>
              </div>
            </div>
            <div className="panel pt-5 p-0">
              {dados.map((item, index) => (
                <React.Fragment key={index}>
                  <BoxRanking
                    posicao={(index + 1) + 'Bi'}
                  />
                  {index < 4 ? (
                    <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b] my-4"></div>
                  ) : (<div className='p-2'></div>)}
                </React.Fragment>
              ))}
            </div>
            <button className='panel h-30 mt-3 ver_lista w-full'><center>VER LISTA COMPLETA</center></button>
          </div>
          <div>
            <div className='ft-total w-200'>
              <div className="pb-2">MAIORES DIVIDENDOS
                <Tippy trigger="mouseenter focus" content={<center><span>Ranking das maiores dividendos<br /> pagos pelas empresas.</span></center>}>
                  <button type="button" data-trigger="mouseenter" className="btn btn-primary rounded-full h-18 p-1 float-right">
                    ?
                  </button>
                </Tippy>
              </div>
            </div>
            <div className="panel pt-5 p-0">
              {dados.map((item, index) => (
                <React.Fragment key={index}>
                  <BoxRanking
                    posicao={(index + 1) + 'º'}
                  />
                  {index < 4 ? (
                    <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b] my-4"></div>
                  ) : (<div className='p-2'></div>)}
                </React.Fragment>
              ))}
            </div>
            <button className='panel h-30 mt-3 w-full ver_lista'><center>VER LISTA COMPLETA</center></button>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Acoes;