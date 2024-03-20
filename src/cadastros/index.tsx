import { Link, useNavigate } from 'react-router-dom';
import React, { KeyboardEvent, ChangeEvent } from 'react';
import { useEffect, Fragment, useState } from 'react';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import { useTranslation } from 'react-i18next';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Tab } from '@headlessui/react';
import IconHome from '../components/Icon/IconHome';
import IconXCircle from '../components/Icon/IconXCircle';
import IconPhone from '../components/Icon/IconPhone';
import IconX from '../components/Icon/IconX';
import { Dialog, Transition } from '@headlessui/react';
import MaskedInput from 'react-text-mask';
import sortBy from 'lodash/sortBy';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import Swal from 'sweetalert2';
import IconEdit from '../components/Icon/IconEdit';
import IconEye from '../components/Icon/IconEye';
import { Rating } from '@mantine/core';
import { TagsInput } from "react-tag-input-component";

const Compras = () => {

  const [produtos, setProdutos] = useState([]);
  const [rowData, setRowData] = useState([]);
  const getFornecedores = async () => {
    try {
      const data = await fetch('http://localhost:3000/get_fornecedores/');
      const response = await data.json();
      setRowData(response);
    } catch (error) {
      console.error('Erro ao obter a lista de usuários:', error);
    }
  }

  const { t } = useTranslation();

  const [modal1, setModal1] = useState(false);

  const formHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [formData, setFormData] = useState([]);
  const [ramo, setRamo] = useState([]);

  const getFornecedoresID = async (id) => {
    setModal1(true);
    try {
      const data = await fetch('http://localhost:3000/get_fornecedores_id/' + id);
      const response = await data.json();

      const updatedFormData: [] = response.map(async (item: any) => {
        setFormData({
          ...formData,
          ['nome']: item.nome_fornecedor,
          ['cnpj']: item.cnpj_fornecedor,
          ['ie']: item.ie_fornecedor,
          ['responsavel']: item.responsavel_fornecedor,
          ['cpf']: item.cpf_fornecedor,
          ['email']: item.email_fornecedor,
          ['cep']: item.cep_fornecedor,
          ['endereco']: item.endereco_fornecedor,
          ['cidade']: item.cidade_fornecedor,
          ['estado']: item.estado_fornecedor,
          ['setor']: item.setor_fornecedor,
          ['vendedor']: item.vendedor_fornecedor,
          ['tel_vendas']: item.tel_vendas_fornecedor,
          ['tel_financeiro']: item.tel_financeiro_fornecedor,
          ['whatsapp']: item.whatsapp_fornecedor,
          ['id']: item.fornecedor_id,
          ['avaliacao']: item.avaliacao_fornecedor,
          //['status']: item.nome_fornecedor
        })
        
        setRamo({ value: item.ramo_fornecedor, label: item.nome_ramo })
        setProdutos((produtos) => {
          // Mapeie os elementos e adicione os textos ao estado
          let Prod = item.produtos_fornecedor;
          console.log(Prod);
          Prod = Prod.split(",");
          const updatedSelected = Prod.map((option, index) => option);

          // Adicione os textos ao estado
          return [...updatedSelected];
        });
      });
    } catch (error) {
      console.error('Erro ao obter a lista de usuários:', error);
    }
  }

  useEffect(() => {
    getFornecedores();
  }, [])

  useEffect(() => {
    setFormData({
      nome: "",
      cnpj: "",
      ie: "",
      responsavel: "",
      cpf: "",
      email: "",
      cep: "",
      endereco: "",
      cidade: "",
      setor: "",
      estado: "",
      vendedor: "",
      tel_vendas: "",
      tel_financeiro: "",
      whatsapp: "",
      avaliacao: "",
      id: "0",
      //status: ""
    });
    setProdutos([]);
  }, [modal1])


  const [tabs, setTabs] = useState<string[]>([]);
  const toggleCode = (name: string) => {
    if (tabs.includes(name)) {
      setTabs((value) => value.filter((d) => d !== name));
    } else {
      setTabs([...tabs, name]);
    }
  };

  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'nome_fornecedor'));
  const [recordsData, setRecordsData] = useState(initialRecords);

  const [search, setSearch] = useState('');
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: 'nome_fornecedor',
    direction: 'asc',
  });

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecordsData([...initialRecords.slice(from, to)]);
  }, [page, pageSize, initialRecords]);

  useEffect(() => {
    setInitialRecords(() => {
      return rowData.filter((item) => {
        return (
          item.nome_fornecedor.toLowerCase().includes(search.toLowerCase()) ||
          item.ramo_fornecedor.toLowerCase().includes(search.toLowerCase()) ||
          item.vendedor_fornecedor.toString().toLowerCase().includes(search.toLowerCase()) ||
          item.cadastro_fornecedor.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase()) ||
          item.whatsapp_fornecedor.toLowerCase().includes(search.toLowerCase()) ||
          item.status_fornecedor.toLowerCase().includes(search.toLowerCase())
        );
      });
    });
  }, [search]);

  useEffect(() => {
    setInitialRecords(sortBy(rowData));
  }, [rowData]);

  useEffect(() => {
    const data = sortBy(initialRecords, sortStatus.columnAccessor);
    setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    setPage(1);
  }, [sortStatus]);

  const formatDate = (date: string | number | Date) => {
    if (date) {
      const dt = new Date(date);
      const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
      const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
      return day + '/' + month + '/' + dt.getFullYear();
    }
    return '';
  };

  const [optionsRamos, setOptionsRamos] = useState([]);
  const fetchApioptionsRamos = async () => {
    try {
      const data = await fetch('http://localhost:3000/get_ramos/');
      const response = await data.json();
      setOptionsRamos(response);
      console.log(response);
      return response; // Adicione esta linha para retornar a resposta como uma Promise
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error; // Se ocorrer um erro, propague-o para quem chama a função
    }
  };

  useEffect(() => {
    fetchApioptionsRamos();
  },[])

  const showSuccess = async (data: string) => {

    Swal.fire({
      icon: 'success',
      title: 'Done!',
      text: data,
      padding: '2em',
      customClass: 'sweet-alerts',
      timer: 3000,
      showConfirmButton: false
    });
  }

  const showError = async (data: string) => {

    Swal.fire({
      icon: 'error',
      title: 'erro!',
      text: data,
      padding: '2em',
      customClass: 'sweet-alerts',
      timer: 3000,
      showConfirmButton: false
    });
  }


  function AddFornecedor() {

    const form = document.getElementById('dados_fornecedor') as HTMLFormElement;
    const formData = new FormData(form);

    formData.append('produtos', produtos);
    let url;
    let method;
    if (formData.id == 0) {
      url = 'http://localhost:3000/novo_fornecedor';
      method = 'POST';
    }
    else {
      url = 'http://localhost:3000/update_fornecedor';
      method = 'PUT';
    }

    const options: RequestInit = {
      method: method,
      body: formData,
    };

    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro na solicitação POST');
        }
      })
      .then((data) => {
        if (data.success) {
          showSuccess(data.message);
          getFornecedores();
        }
        else {
          showError(data.message);
        }
        setModal1(false)
        //getUserList();
      })
      .catch((error) => {
        console.error('Erro ao enviar a solicitação POST:', error);
      });
  }

  const addtext = (word: any) => {
    setProdutos(produtos => [...produtos, word]);
    return true;
  }

  const removetext = (wordToRemove: any) => {
    setProdutos(produtos => produtos.filter(word => word !== wordToRemove));
  };

  const [selectedOption, setSelectedOption] = useState([]);
  const SelectChange = (selectedOption) => {
    setRamo(selectedOption)
  };

  const [value, setValue] = useState<number | null>(0); // Estado para controlar o valor selecionado

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setFormData(prevFormData => ({...prevFormData, avaliacao: newValue})); // Atualiza o estado com o novo valor selecionado
  };

  return (
    <div>
      <div className='titulo-page'>CADASTROS</div>
      <ul className="flex space-x-2 rtl:space-x-reverse mb-5 mt-4">
        <li>
          <Link to="/" className="text-primary hover:underline">
            {t('Site')}
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Cadastros</span>
        </li>
      </ul>

      <div className="panel" id="pills">
        <div className="mb-5">
          <Tab.Group>
            <Tab.List className="mt-3 mr-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${selected ? '!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''}
                                                dark:hover:border-b-black' -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger ft-tab`}
                  >
                    <IconHome className="ltr:mr-2 rtl:ml-2" />
                    FORNECEDORES
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${selected ? '!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''}
                                                dark:hover:border-b-black' -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger ft-tab`}
                  >
                    <IconPhone className="ltr:mr-2 rtl:ml-2" />
                    MATERIAIS
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="active pt-5">
                  <div className="grid 1xl:grid-cols-8 lg:grid-cols-8 sm:grid-cols-2 grid-cols-1 mb-5 gap-6">
                    <button type="button" className="btn btn-outline-primary" onClick={() => setModal1(true)} >NOVO</button>
                  </div>
                  <div className="datatables">
                    <DataTable
                      className="whitespace-nowrap table-hover"
                      records={recordsData}
                      columns={[
                        {
                          accessor: 'nome_fornecedor',
                          title: 'Empresa',
                          sortable: true,
                          render: ({ nome_fornecedor, lastName, id }) => (
                            <div className="flex items-center w-max">
                              <img className="w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover" src={`/assets/images/profile-${id}.jpeg`} alt="" />
                              <div>{nome_fornecedor}</div>
                            </div>
                          ),
                        },
                        { accessor: 'ramo_fornecedor', title: 'Ramo', sortable: true },
                        { accessor: 'vendedor_fornecedor', title: 'Vendedor', sortable: true },
                        { accessor: 'whatsapp_fornecedor', title: 'WhatApp.', sortable: true },
                        { accessor: 'email_fornecedor', title: 'Email', sortable: true },
                        {
                          accessor: 'cadastro_fornecedor',
                          title: 'Data Cadastro',
                          sortable: true,
                          render: ({ cadastro_fornecedor }) => <div>{formatDate(cadastro_fornecedor)}</div>,
                        },
                        {
                          accessor: 'status_fornecedor',
                          title: 'Status',
                          sortable: true,
                          render: ({ status_fornecedor }) => ((status_fornecedor == 1) ? <span className='badge bg-success'>Ativo
                          </span> : ''),
                        },
                        {
                          accessor: 'ramo_fornecedor', title: 'Avaliação  ', sortable: true,
                          render: () => <span>
                            <Rating name="no-value" value={null} /></span>,
                        },
                        {
                          accessor: 'action',
                          title: 'Action',
                          titleClassName: '!text-center',
                          render: ({ fornecedor_id }) => (
                            <div className="flex items-center w-max mx-auto">
                              <Tippy content="Ver Fornecedor">
                                <button type="button" className='mr-3' onClick={() => getFornecedoresID(fornecedor_id)}>
                                  <IconEye className="w-4.5 h-4.5" />
                                </button>
                              </Tippy>
                              <Tippy content="Editar">
                                <button type="button" className='mr-3'>
                                  <IconEdit className="w-4.5 h-4.5" />
                                </button>
                              </Tippy>
                              <Tippy content="Apagar">
                                <button type="button">
                                  <IconXCircle />
                                </button>
                              </Tippy>
                            </div>
                          ),
                        },
                      ]}
                      totalRecords={initialRecords.length}
                      recordsPerPage={pageSize}
                      page={page}
                      onPageChange={(p) => setPage(p)}
                      recordsPerPageOptions={PAGE_SIZES}
                      onRecordsPerPageChange={setPageSize}
                      sortStatus={sortStatus}
                      onSortStatusChange={setSortStatus}
                      minHeight={200}
                      paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div>
                  <div className="flex items-start pt-5">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                      <img
                        src="/assets/images/profile-34.jpeg"
                        alt="img"
                        className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                      />
                    </div>
                    <div className="flex-auto">
                      <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                      <p className="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

      </div>
      <div className="panel">
        <div className="mb-5">
          <Transition appear show={modal1} as={Fragment}>
            <Dialog as="div" open={modal1} onClose={() => setModal1(false)}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0" />
              </Transition.Child>
              <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                <div className="flex min-h-screen items-center justify-center px-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel as="div" className="panel my-8 w-full max-w-5xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                      <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                        <h5 className="text-lg font-bold">NOVO FORNECEDOR</h5>
                        <button type="button" className="text-white-dark hover:text-dark" onClick={() => setModal1(false)}>
                          <IconX />
                        </button>
                      </div>
                      <div className="p-5">
                        <form id='dados_fornecedor' method="POST">

                          <div className="grid 1xl:grid-cols-12 lg:grid-cols-12 sm:grid-cols-2 grid-cols-1 mb-5 gap-6">
                            <div className='xl:col-span-6 col-span-6'>
                              <label className='ft-micro'>EMPRESA</label>
                              <input type="text" name='nome' value={formData.nome} onChange={formHandleChange} placeholder="" className="form-input" />
                            </div>
                            <div className='mb-5 xl:col-span-3 col-span-3'>
                              <label className='ft-micro'>CNPJ</label>
                              <input type="text" name='cnpj' placeholder="" value={formData.cnpj} onChange={formHandleChange} className="form-input" />
                            </div>
                            <div className='mb-5 xl:col-span-3 col-span-3'>
                              <label className='ft-micro'>I.E.</label>
                              <input type="text" name='ie' placeholder="" value={formData.ie} onChange={formHandleChange} className="form-input" />
                            </div>
                          </div>
                          <div className="grid 1xl:grid-cols-12 lg:grid-cols-12 sm:grid-cols-6 grid-cols-1 mb-5 gap-6">

                            <div className='xl:col-span-6 col-span-6'>
                              <label className='ft-micro'>RESPONSÁVEL</label>
                              <input type="text" name='responsavel' placeholder="" value={formData.responsavel} onChange={formHandleChange} className="form-input" />
                            </div>
                            <div className='xl:col-span-2 col-span-2'>
                              <label className='ft-micro'>CPF</label>
                              <MaskedInput
                                name="cpf"
                                type="text"
                                value={formData.cpf} onChange={formHandleChange}
                                placeholder="___.___.___-__"
                                className="form-input"
                                mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]}
                              />
                            </div>
                            <div className='xl:col-span-4 col-span-4'>
                              <label className='ft-micro'>EMAIL</label>
                              <input type="text" name='email' value={formData.email} onChange={formHandleChange} placeholder="" className="form-input" />
                            </div>
                          </div>

                          <div className="grid 1xl:grid-cols-7 lg:grid-cols-7 sm:grid-cols-6 grid-cols-1 mb-5 gap-6">

                            <div className='mb-5'>
                              <label className='ft-micro'>CEP</label>
                              <MaskedInput
                                name="cep"
                                type="text"
                                value={formData.cep} onChange={formHandleChange}
                                placeholder="_____-___"
                                className="form-input"
                                mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/]}
                              />
                            </div>
                            <div className='mb-5 xl:col-span-4 col-span-4'>
                              <label className='ft-micro'>ENDEREÇO</label>
                              <input type="text" name='endereco' value={formData.endereco} onChange={formHandleChange} placeholder="" className="form-input" />
                            </div>
                            <div className='mb-5 xl:col-span-2 col-span-2'>
                              <label className='ft-micro'>CIDADE</label>
                              <input type="text" name='cidade' value={formData.cidade} onChange={formHandleChange} placeholder="" className="form-input" />
                            </div>
                          </div>
                          <div className="grid 1xl:grid-cols-12 lg:grid-cols-12 sm:grid-cols-6 grid-cols-1 mb-5 gap-6">
                            <div className='mb-5 xl:col-span-3 col-span-3'>
                              <label className='ft-micro'>SETOR</label>
                              <input type="text" name='setor' value={formData.setor} onChange={formHandleChange} placeholder="" className="form-input" />
                            </div>
                            <div className='mb-5 xl:col-span-1 col-span-1'>
                              <label className='ft-micro'>ESTADO</label>
                              <input type="text" name='estado' value={formData.estado} onChange={formHandleChange} placeholder="" className="form-input" />
                            </div>
                            <div className='mb-5 xl:col-span-2 col-span-2'>
                              <label className='ft-micro'>VENDEDOR</label>
                              <input type="text" name='vendedor' value={formData.vendedor} onChange={formHandleChange} placeholder="" className="form-input" />
                            </div>
                            <div className='xl:col-span-2 col-span-2'>
                              <label className='ft-micro'>TEL.VENDAS</label>
                              <MaskedInput
                                name="tel_vendas"
                                type="text"
                                value={formData.tel_vendas} onChange={formHandleChange}
                                placeholder="(__) _____-____"
                                className="form-input"
                                mask={['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                              />
                            </div>

                            <div className='xl:col-span-2 col-span-2'>
                              <label className='ft-micro'>TEL. FINANCEIRO</label>
                              <MaskedInput
                                name="tel_financeiro"
                                type="text"
                                value={formData.tel_financeiro} onChange={formHandleChange}
                                placeholder="(__) _____-____"
                                className="form-input"
                                mask={['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                              />
                            </div>
                            <div className='xl:col-span-2 col-span-2'>
                              <label className='ft-micro'>WHATSAPP</label>
                              <MaskedInput
                                name="whatsapp"
                                type="text"
                                value={formData.whatsapp} onChange={formHandleChange}
                                placeholder="(__) _____-____"
                                className="form-input"
                                mask={['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                              />
                            </div>
                          </div>
                          <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 mb-5 gap-6">
                            <div className='mb-5 xl:col-span-2 col-span-2'>
                              <label className='ft-micro'>PRODUTOS OFERECIDOS</label>
                              <TagsInput
                                value={produtos}
                                onRemoved={removetext}
                                beforeAddValidate={addtext}
                              />
                            </div>
                            <div>
                              <div className='mb-5'>
                                <label className='ft-micro'>RAMO</label>
                                <Select
                                  defaultValue={0}
                                  name='ramo'
                                  value={ramo} onChange={SelectChange}
                                  options={optionsRamos}
                                  isSearchable={false}
                                  menuPlacement="top"
                                />
                              </div>
                              <div className='mb-5 xl:col-span-3 col-span-3'>
                                <label className='ft-micro'>AVALIAÇÃO</label>
                                <Rating
                                  name="avaliacao"
                                  className='pt-2'
                                  value={formData.avaliacao}
                                  onChange={() => {
                                    handleRatingChange();
                                    formHandleChange();
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='mb-5 xl:col-span-2 col-span-2'>
                            <input type="hidden" name='id' value={formData.id} id='id' />
                          </div>
                        </form>
                        <div className="mt-8 flex items-center justify-end">
                          <button type="button" className="btn btn-outline-danger" onClick={() => setModal1(false)}>
                            Cancelar
                          </button>
                          <button type="button" className="btn btn-success ltr:ml-4 rtl:mr-4" onClick={() => AddFornecedor()}>
                            Adicionar
                          </button>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition >
        </div >

      </div >
    </div >

  );
};

export default Compras;