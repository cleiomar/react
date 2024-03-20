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

const Compras = () => {
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
    const data = await fetch('http://localhost:3000/get_estatisticas/' + codigo)
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
      <div className='titulo-page'>COMPRAS</div>
      <ul className="flex space-x-2 rtl:space-x-reverse mb-5 mt-4">
        <li>
          <Link to="/" className="text-primary hover:underline">
            {t('Site')}
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Compras</span>
        </li>
      </ul>

      <div className="grid 1xl:grid-cols-8 lg:grid-cols-8 sm:grid-cols-2 grid-cols-1 mb-10 gap-6">
          <button type="button" className="btn btn-outline-primary">Fornecedores</button>
          <button type="button" className="btn btn-outline-primary">Materiais</button>
        </div>

      <div className="panel">
        <div className="grid 1xl:grid-cols-8 lg:grid-cols-8 sm:grid-cols-2 grid-cols-1 gap-6">
          <button type="button" className="btn btn-outline-primary">Fornecedores</button>
          <button type="button" className="btn btn-outline-primary">Materiais</button>
        </div>
      </div>
    </div>

  );
};

export default Compras;