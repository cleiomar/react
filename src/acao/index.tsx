import { Link, useNavigate } from 'react-router-dom';
import React, { KeyboardEvent, ChangeEvent } from 'react';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, Fragment, useState } from 'react';
import Dropdown from '../components/Dropdown';
import IconPlus from '../components/Icon/IconPlus';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../components/Icon/IconX';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import { removeTrailingZeros } from '../data/funcoes';
import globalVars from '../data/global'

import { useTranslation } from 'react-i18next';

const Acao = () => {
  const { t } = useTranslation();


  return (
    <div><div className='titulo-page'>AÇÕES</div>
      <ul className="flex space-x-2 rtl:space-x-reverse mb-5 mt-4">
        <li>
          <Link to="/" className="text-primary hover:underline">
            {t('Site')}
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <Link to="/" className="text-primary hover:underline">
            <Link to="/" className="text-primary hover:underline">
              {t('Acoes')}
            </Link>
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>BBAS3</span>
        </li>
      </ul>

      <div className="panel">

      </div>
    </div>

  );
};

export default Acao;