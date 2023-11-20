import { Link, useNavigate } from 'react-router-dom';
import React, { KeyboardEvent, ChangeEvent } from 'react';
import { useEffect, Fragment, useState } from 'react';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../components/Icon/IconX';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { removeCurrency, removeTrailingZeros, formatCurrency, formatCurrency2, formatDate, capitalizeLetters } from '../data/funcoes';
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

  useEffect(() => {
    fetchApiOption();
    catOptions();
  }, []);

  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

  const [ocultarDados, setOcultarDados] = useState<boolean>(!globalVars.getVariable1());
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
        fetchconfigHideValue(); // Chama a função assíncrona aqui
      }, []); // Sem dependências para garantir que seja chamado apenas uma vez
    

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
            <span className="badge bg-warning p-3 text-center mrt-3"><div className='subtitulo-page'>PATRIMÔNIO</div><div className='subtitulo-valor mt-2'>R$ 8.712.000,00</div></span>
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


        <div className="flex items-center justify-between mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light">POSIÇÃO NA CARTEIRA</h5>
        </div>
        <div className="space-y-2 font-semibold">
          {categoriaOptions.map((option, index) => (
            <Posicao
            key={index}
            hide={ocultarDados}
            categoria={option.value}
            categoria_nome={option.label}
            />
          ))}
        </div>


      </div>
    </div>
  );
};

export default Transacoes;