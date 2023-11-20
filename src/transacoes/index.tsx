import { Link, useNavigate } from 'react-router-dom';
import React, { KeyboardEvent, ChangeEvent } from 'react';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, Fragment, useState } from 'react';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import sortBy from 'lodash/sortBy';
import Dropdown from '../components/Dropdown';
import IconPlus from '../components/Icon/IconPlus';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../components/Icon/IconX';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import IconSettings from '../components/Icon/IconSettings';
import IconEdit from '../components/Icon/IconEdit';
import IconXCircle from '../components/Icon/IconXCircle';
import IconCashBanknotes from '../components/Icon/IconCashBanknotes';
import { useLocation } from 'react-router-dom';
import { removeCurrency, removeTrailingZeros } from '../data/funcoes';
import globalVars from '../data/global'
import { log } from 'console';

const Transacoes = () => {

  const [ocultarDados, setOcultarDados] = useState<boolean>(!globalVars.getVariable1());

  const renderizarConteudo = (className: string, texto: string) => {
    if (ocultarDados && className === 'sensitivy-field') {
      return texto.replace(/./g, '*'); // Substitui cada letra por um asterisco
    }
    return texto;
  };

  useEffect(() => {
    //(!) ?  setOcultarDados((prevState) => !prevState) : ''
    const handleVariable1Change = () => {
      setOcultarDados((prevState) => !prevState); // Usando uma função no setOcultarDados
    };
    globalVars.addListener(handleVariable1Change);
    return () => {
      globalVars.removeListener(handleVariable1Change);
    };
  }, []);

  const location = useLocation();
  const params = location.state;
  const userid = params.userid;
  const [userList, setUserList] = useState([]);

  const getUserList = async () => {
    try {
      const data = await fetch('http://localhost:3000/transacoes');
      const response = await data.json();
      setUserList(response);
    } catch (error) {
      console.error('Erro ao obter a lista de usuários:', error);
    }
  }

  useEffect(() => {
    getUserList();
  }, []);


  const [modal4, setModal4] = useState(false);
  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(sortBy(userList));
  const [recordsData, setRecordsData] = useState(initialRecords);


  const [search, setSearch] = useState('');
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>([]);

  useEffect(() => {
    setInitialRecords(sortBy(userList));
  }, [userList]);
  
  
  useEffect(() => {
    const data = sortBy(initialRecords, sortStatus.columnAccessor, sortStatus.direction);
    setPage(1);
  }, [sortStatus]);
  
  const [configHideValue, setConfigHideValue] = useState(null);

  const fetchconfigHideValue = async () => {
    try {
      const data = await fetch('http://localhost:3000/configs');
      const responseArray = await data.json();

      if (responseArray && responseArray.length > 0) {
        const firstConfig = responseArray[0];
        const hideValues = firstConfig.hideValues;

        if (hideValues !== undefined) {
          setConfigHideValue(hideValues);
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


  const [options, setOptions] = useState([]);
  const fetchApiOption = async () => {
    const data = await fetch('http://localhost:3000/brokers')
    const response = await data.json()
    setOptions(response)
  }


  const [optionsAtivos, setOptionsAtivos] = useState([]);
  const fetchApiOptionAtivos = async (id) => {
    try {
      const data = await fetch('http://localhost:3000/lista_ativos?id=' + id);
      const response = await data.json();
      setOptionsAtivos(response);
      setSelectedOptionAtivos({ value: '', label: 'Selecionar...' })
      return response; // Adicione esta linha para retornar a resposta como uma Promise
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error; // Se ocorrer um erro, propague-o para quem chama a função
    }
  };

  const [active, setActive] = useState([]);
  const [blocked, setBlocked] = useState([]);
  const [canceled, setCanceled] = useState([]);
  // const fetchApiStatus = async () => {
  //   const data = await fetch('http://localhost:3000/api/getcredentialsstatus')
  //   const [response] = await data.json()
  //   setActive(response.active)
  //   setBlocked(response.blocked)
  //   setCanceled(response.canceled)
  // }

  useEffect(() => {
    //fetchApiStatus();
    fetchApiOption();
    fetchconfigHideValue();
  }, []);

  function capitalizeLetters(name: string): string {
    return name.toUpperCase();
  }


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
      return userList.filter((item) => {
        return (
          item.ativo_codigo.toLowerCase().includes(search.toLowerCase()) ||
          item.categoria_prefixo.toLowerCase().includes(search.toLowerCase()) ||
          item.tipo_ordem_nome.toLowerCase().includes(search.toLowerCase()) ||
          item.broker_nome.toLowerCase().includes(search.toLowerCase()) ||
          formatDate(item.negociacao).toLowerCase().includes(search.toLowerCase()) ||
          item.quantidade.toLowerCase().includes(search.toLowerCase()) ||
          formatCurrency(removeTrailingZeros(item.preco)).toLowerCase().includes(search.toLowerCase()) ||
          formatCurrency(removeTrailingZeros(item.total)).toLowerCase().includes(search.toLowerCase())
        );
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);


  const formatDate = (date: string | number | Date) => {
    if (date) {
      const dt = new Date(date);
      const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
      const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
      return day + '/' + month + '/' + dt.getFullYear();
    }
    return '';
  };

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


  function AddNew() {
    const form = document.getElementById('NovaTransacao') as HTMLFormElement;

    const formData = new FormData(form);

    formData.append('id', id); //Logged user
    let url;
    if (id === 0) {
      url = 'http://localhost:3000/nova_transacao';
    }
    else {
      url = 'http://localhost:3000/update_transacao';
    }

    const options: RequestInit = {
      method: 'POST',
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
        }
        else {
          showError(data.message);
        }
        getUserList();
      })
      .catch((error) => {
        console.error('Erro ao enviar a solicitação POST:', error);
      });
  }

  const [categoriaOptions, setCategoriaOptions] = useState([]);
  const catOptions = async () => {
    const data = await fetch('http://localhost:3000/categorias')
    const response = await data.json()
    setCategoriaOptions(response)
  }

  const [tipoOptions, setTipoOptions] = useState([{ value: 1, label: 'Compra' }, { value: 2, label: 'Venda' }]);
  const [selectedTipoOption, setSelectedTipoOption] = useState([]);
  const SelectTipoChange = (selectedTipoOption) => {
    setSelectedTipoOption(selectedTipoOption)
    const id = selectedTipoOption.value
  };

  const [selectedCategoriaOption, setSelectedCategoriaOption] = useState([]);
  const SelectCategoriaChange = (selectedCategoriaOption) => {
    setSelectedCategoriaOption(selectedCategoriaOption)
    const id = selectedCategoriaOption.value
    fetchApiOptionAtivos(id);
  };

  const [edit, setEdit] = useState(0);

  const [selectedOption, setSelectedOption] = useState([]);
  const SelectChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  };

  const [selectedOptionAtivos, setSelectedOptionAtivos] = useState([]);
  const SelectChangeAtivos = (selectedOptionAtivos) => {
    setSelectedOptionAtivos(selectedOptionAtivos)
  };




  useEffect(() => {
    catOptions();
  }, []);


  const [DateOption, setDateOption] = useState(null);

  const DateChange = (DateOption: any) => {
    setDateOption(DateOption);
  };


  //formData Clean
  const [title, setTitle] = useState('Adicionar Ativo');
  useEffect(() => {
    if (modal4) {
    } else {

      setTitle('Adicionar Ativo')
      setEdit(0)
      setID(0)
      setDateOption(null)
      setSelectedOptionAtivos({ value: '', label: 'Selecionar...' })
      setSelectedOption({ value: '', label: 'Selecionar...' })
      setSelectedCategoriaOption({ value: '', label: 'Selecionar...' })
      setSelectedTipoOption({ value: '', label: 'Selecionar...' })
      setEmolumentos('');
      setCorretagem('');
      setPreco('');
      setImpostos('');
      setFormData({
        ativo: "",
        negociacao: "",
        quantidade: "",
        preco: "",
        corretagem: "",
        emolumentos: "",
        impostos: ""
      })
    }
  }, [modal4]);

  const [formData, setFormData] = useState({
    ativo: "",
    negociacao: "",
    quantidade: "",
    preco: "",
    corretagem: "",
    emolumentos: "",
    impostos: ""
  });

  const [id, setID] = useState(0); /// quantidade
  const fetchApiTrancacao = async (id: number) => {
    try {

      const data = await fetch('http://localhost:3000/transacao_id?id=' + id);
      if (data.ok) {
        const response = await data.json();

        const updatedFormData: [] = response.map(async (item: any) => {
          setPreco(formatCurrency2(item.preco))
          setCorretagem(formatCurrency2(item.corretagem))
          setEmolumentos(formatCurrency2(item.emolumentos))
          setQuantidade(removeTrailingZeros(item.quantidade))
          setImpostos(formatCurrency2(item.impostos))

          setFormData({
            ...formData,
            ['ativo']: capitalizeLetters(item.ativo),
            ['negociacao']: item.negociacao,
            ['quantidade']: removeTrailingZeros(item.quantidade)
          })
          await fetchApiOptionAtivos(item.categoria)
          setID(item.id)
          setSelectedOptionAtivos({ value: item.ativo, label: item.ativo_codigo })
          setSelectedOption({ value: item.broker, label: item.broker_nome })
          setSelectedCategoriaOption({ value: item.categoria, label: item.categoria_prefixo })
          setSelectedTipoOption({ value: item.tipo_ordem, label: item.tipo_ordem_nome })
          setTitle('Editar Transação')
          setEdit(item.id)
          setModal4(true)

        })

      } else {
        console.error('Erro na requisição à API');
      }
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };


  const cancelId = async (id: number) => {
    Swal.fire({
      icon: 'warning',
      title: 'Tem certeza?',
      text: "Esta ação é irreversível!",
      showCancelButton: true,
      confirmButtonText: 'Excluir',
      confirmButtonColor: "#DD6B55",
      cancelButtonText: 'cancelar',
      padding: '2em',
      customClass: 'sweet-alerts',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {

          const response = await fetch(`http://localhost:3000/delete_transacao`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              // Adicione headers adicionais, se necessário (por exemplo, autenticação)
            },
            body: JSON.stringify({ id: id }),
          });

          if (response.ok) {
            const responseData = await response.json();
            getUserList();
            Swal.fire({
              icon: 'success',
              title: 'Done!',
              text: responseData.message,
              padding: '2em',
              customClass: 'sweet-alerts',
              timer: 3000,
              showConfirmButton: false
            });
            //fetchApiStatus();
          } else {
            console.error('Erro na requisição à API. Status:', response.status);
            // Adicione lógica para lidar com erros específicos, se necessário
          };
        } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
        }
      }
    }
    )
  };

  const navigate = useNavigate();
  const userSettings = (username: string, id: number) => {
    navigate('/InstaUserSettings', { state: { texto: username, id: id } });
  };



  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;



  const [quantidade, setQuantidade] = useState(0); /// quantidade
  const [preco, setPreco] = useState(0);
  const [corretagem, setCorretagem] = useState(0);
  const [emolumentos, setEmolumentos] = useState(0);
  const [impostos, setImpostos] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const somar = () => {
    const quantidadeValue = parseFloat(quantidade);
    const precoValue = parseFloat(removeCurrency(preco));
    const corretagemValue = parseFloat(removeCurrency(corretagem));
    const emolumentosValue = parseFloat(removeCurrency(emolumentos));
    const impostosValue = parseFloat(removeCurrency(impostos));
    let valor = (quantidadeValue * precoValue) + corretagemValue + emolumentosValue + impostosValue;
    valor = valor.toFixed(2);
    valor = valor.toString();
    if (!isNaN(valor) && valor >= 0) {
      setValorTotal(formatCurrency(valor));
    }
  }

  const [num, setNum] = useState(0); /// quantidade
  const handleNumChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9.]/g, '');
    const parts = inputValue.split('.');
    let integerPart = parts[0] || '';
    let decimalPart = parts[1] || '';
    integerPart = integerPart.slice(0, 12);
    decimalPart = decimalPart.slice(0, 8);
    const limitedValue = decimalPart ? `${integerPart}.${decimalPart}` : integerPart;

    if (!isNaN(+limitedValue)) {
      setNum(+limitedValue);
      setQuantidade(+limitedValue)
    }
  };

  useEffect(() => {
    somar();
  }, [quantidade, preco, corretagem, emolumentos, impostos]);

  const formatCurrency2 = (value: string | undefined | null, moeda: number): string => {
    // Verifica se value é uma string e não é undefined ou null
    if (typeof value === 'string' && value !== undefined && value !== null) {
      const numericValue = parseFloat(value);

      let currencyCode;
      switch (moeda) {
        case 1:
          currencyCode = 'BRL'; // Real
          break;
        case 2:
          currencyCode = 'USD'; // Dólar
          break;
        case 3:
          currencyCode = 'EUR'; // Euro
          break;
        default:
          currencyCode = 'BRL'; // Real (padrão)
          break;
      }

      const formattedValue = numericValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      return formattedValue;
    } else {
      // Retorna uma string padrão ou faz algo apropriado se value não for uma string
      return 'Valor Inválido';
    }
  };

  const formatCurrency = (value: string | undefined | null): string => {
    // Verifica se value é uma string e não é undefined ou null
    if (typeof value === 'string' && value !== undefined && value !== null) {
      const numericValue = value.replace(/[^0-9]/g, '');
      const formattedValue = Number(Number(numericValue) / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

      return formattedValue;
    } else {
      // Retorna uma string padrão ou faz algo apropriado se value não for uma string
      return 'Valor Inválido';
    }
  };

  const handlePrecoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    setPreco(formatCurrency(inputValue));
  };

  const handleCorretagemChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    setCorretagem(formatCurrency(inputValue));
  };

  const handleQuantidadeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    setCorretagem(formatCurrency(inputValue));
  };

  const handleEmolumentosChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    setEmolumentos(formatCurrency(inputValue));
  };

  const handleImpostosChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    setImpostos(formatCurrency(inputValue));
  };


  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    const keyCode = event.keyCode || event.which;
    const isCtrlKey = event.ctrlKey || event.metaKey; // Verifica se a tecla CTRL está pressionada

    if (
      // Teclas permitidas
      (keyCode === 8 || // Backspace
        keyCode === 46 || // Delete
        (keyCode >= 37 && keyCode <= 40) || // Setas de direção
        (keyCode >= 96 && keyCode <= 105) || // Teclas numéricas no teclado numérico
        keyCode === 190 || // Ponto (.)
        /^\d+$/.test(String.fromCharCode(keyCode))) || // Dígitos numéricos
      // Teclas especiais permitidas
      (isCtrlKey && (keyCode === 67 || keyCode === 86)) || // CTRL + C, CTRL + V
      keyCode === 9 // TAB
    ) {
      return; // Permite a ação padrão
    } else {
      event.preventDefault();
    }
  };


  const formHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  return (
    <div><div className='titulo-page'>TRANSAÇÕES</div>
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

        <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 mb-10 gap-6">
          <div className="grid xl:grid-cols-3 gap-6">
            <button type="button" onClick={() => setModal4(true)} className="btn btn-outline-secondary btn-sm"><IconPlus />Adicionar Ativo</button>
            <div className="xl:col-span-2">
              <div className="ltr:ml-auto rtl:mr-auto gap-6">
                <input type="text" className="form-input w-100p h-40" placeholder="Search User..." value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:col-span-2 sm:col-span-2 gap-6">
            <div className="panel p-2.5 ht-30 rounded-md flex items-center group">
              <div className="w-10 ht-30 -m-2.5 ltr:mr-4 rtl:ml-4 ltr:rounded-l-md rtl:rounded-r-md transition-all duration-700 group-hover:scale-110 bg-success">
              </div>
              <div className="grid 1xl:grid-cols-5 lg:grid-cols-2 sm:grid-cols-2 grid-cols-2 w-100-p">
                <h5 className="sm:text-base mt-1">Active</h5>
                <span className="text-lg text-white-dark ml-100 text-end mt-1">{active}</span>
              </div>
            </div>


            <div className="panel p-2.5 ht-30 rounded-md flex items-center group">
              <div className="w-10 ht-30 -m-2.5 ltr:mr-4 rtl:ml-4 ltr:rounded-l-md rtl:rounded-r-md transition-all duration-700 group-hover:scale-110 bg-danger">
              </div>
              <div className="grid 1xl:grid-cols-5 lg:grid-cols-2 sm:grid-cols-2 grid-cols-2 w-100-p">
                <h5 className="sm:text-base mt-1">Blocked</h5>
                <span className="text-lg text-white-dark ml-100 text-end mt-1">{blocked}</span>
              </div>
            </div>


            <div className="panel p-2.5 ht-30 rounded-md flex items-center group">
              <div className="w-10 ht-30 -m-2.5 ltr:mr-4 rtl:ml-4 ltr:rounded-l-md rtl:rounded-r-md transition-all duration-700 group-hover:scale-110 bg-dark">
              </div>
              <div className="grid 1xl:grid-cols-5 lg:grid-cols-2 sm:grid-cols-2 grid-cols-2 w-100-p">
                <h5 className="sm:text-base mt-1">Canceled</h5>
                <span className="text-lg text-white-dark ml-100 text-end mt-1">{canceled}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="datatables">
          <DataTable
            className="whitespace-nowrap table-hover"
            records={recordsData}
            columns={[
              {
                accessor: 'categoria_prefixo', title: 'Categoria',
                render: ({ categoria_prefixo }) => ((categoria_prefixo == 'Ações') ?
                  <><div className={`categoria-color-acoes float-left`}></div><div className='ml-5'>{categoria_prefixo}</div></>
                  : (categoria_prefixo == 'FII') ?
                    <><div className={`categoria-color-fii float-left`}></div><div className='ml-5'>{categoria_prefixo}</div></>
                    : (categoria_prefixo == 'FIAgro') ?
                      <><div className={`categoria-color-fiagro float-left`}></div><div className='ml-5'>{categoria_prefixo}</div></>
                      : (categoria_prefixo == 'ETF Nacionais') ?
                        <><div className={`categoria-color-etfn float-left`}></div><div className='ml-5'>{categoria_prefixo}</div></>
                        : (categoria_prefixo == 'ETF Internacionais') ?
                          <><div className={`categoria-color-etfi float-left`}></div><div className='ml-5'>{categoria_prefixo}</div></>
                          : (categoria_prefixo == 'Criptomoedas') ?
                            <><div className={`categoria-color-criptomoedas float-left`}></div><div className='ml-5'>{categoria_prefixo}</div></>
                            : (categoria_prefixo == 'Renda Fixa') ?
                              <><div className={`categoria-color-fixa float-left`}></div><div className='ml-5'>{categoria_prefixo}</div></>
                              : (categoria_prefixo == 'Caixa') ?
                                <><div className={`categoria-color-caixa float-left`}></div><div className='ml-5'>{categoria_prefixo}</div></>
                                : <>Outro...</>
                )
              },
              {
                accessor: 'ativo_codigo',
                title: 'Ativo',
                render: ({ ativo_codigo, id }) => (
                  <div className="flex items-center w-max">
                    {/* <img className="w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover" src={`/assets/images/profile-${id}.jpeg`} alt="" /> */}
                    <div>{capitalizeLetters(ativo_codigo)}</div>
                  </div>
                ),
              },
              {
                accessor: 'tipo_ordem', title: 'Ordem',
                render: ({ tipo_ordem_nome }) => (
                  tipo_ordem_nome === 'Compra' ? (
                    <span className={`badge bg-success`}>Compra</span>
                  ) :
                    tipo_ordem_nome === 'Venda' ? (
                      <span className={`badge bg-danger`}>Venda</span>
                    ) : <span className={`badge bg-dark`}>Outro</span>
                )
              },
              { accessor: 'broker_nome', title: 'Broker'},
              {
                accessor: 'negociacao',
                title: 'Negociação',
                render: ({ negociacao }) => <div>{formatDate(negociacao)}</div>,
              },
              // {
              //   accessor: 'vencimento',
              //   title: 'Vencimento',
              //   sortable: true,
              //   render: ({ vencimento }) => <div>{formatDate(vencimento)? formatDate(vencimento) : '-'}</div>,
              // },
              {
                accessor: 'quantidade', title: 'Quantidade',
                render: ({ quantidade }) => <div className='sensitivy-field'>{renderizarConteudo('sensitivy-field', removeTrailingZeros(quantidade))}</div>,
              },
              {
                accessor: 'preco', title: 'Preço',
                render: ({ preco, ativo_moeda }) => <div className='sensitivy-field'>{renderizarConteudo('sensitivy-field', formatCurrency2(removeTrailingZeros(preco), ativo_moeda))}</div>,
              },
              {
                accessor: 'total',
                title: 'Total',
                render: ({ total, ativo_moeda }) => (
                  <><div className='sensitivy-field'>{renderizarConteudo('sensitivy-field', formatCurrency2(removeTrailingZeros(total), ativo_moeda))}</div></>
                ),
              },
              {
                accessor: '. . .',
                title: '. . .',
                titleClassName: '!text-center',
                render: ({ id, Login }) => (
                  <div className="flex items-center w-max mx-auto">
                    <div className="dropdown">
                      <Dropdown
                        offset={[0, 5]}
                        placement={'bottom-end'}
                        button={
                          <svg xmlns="http://www.w3.org/2000/svg" className='grey-css ml-4' fill="currentColor" viewBox="0 0 50 50" width="15px" height="15px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" /></svg>
                        }
                      >
                        <ul>
                          <li>
                            <button type="button" onClick={() => fetchApiTrancacao(id)}><IconEdit className='pr-1 mr-5' />Edit</button>
                          </li>
                          <li>
                            <button type="button" onClick={() => cancelId(id)}><IconXCircle className='pr-1 mr-5' /> Cancel</button>
                          </li>
                        </ul>
                      </Dropdown>
                    </div>
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
      <div className="panel">
        <Transition appear show={modal4} as={Fragment}>
          <Dialog as="div" open={modal4} onClose={() => setModal4(false)}>
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
            <div className="fixed inset-0 z-[999] bg-[black]/60 px-4">
              <div className="flex min-h-screen items-start justify-center px-4">
                <Dialog.Panel className="panel my-8 w-full overflow-hidden overflowY-auto h-30 size-cad rounded-lg border-0 p-0 text-black dark:text-white-dark">
                  <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                    <h5 className="text-lg font-bold">{title}</h5>
                    <button type="button" onClick={() => setModal4(false)} className="text-white-dark hover:text-dark">
                      <IconX />
                    </button>
                  </div>
                  <form id='NovaTransacao' className='height-60' action='http://localhost:3000/api/dados' method="POST">

                    <div className='panel'>

                      <div>

                        <div className="grid 1xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                          <div>
                            <div className="grid 1xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                              <div className='p-2'>
                                <label htmlFor="Categoria">Categoria</label>
                                <Select
                                  className='text-sm'
                                  name="categoria"
                                  value={selectedCategoriaOption}
                                  onChange={SelectCategoriaChange}
                                  options={categoriaOptions}
                                  formatOptionLabel={categoriaOptions => (
                                    (categoriaOptions.value === 1) ?
                                      <><div className={`categoria-color-acoes float-left`}></div><div className='ml-5'>{categoriaOptions.label}</div></>
                                      : (categoriaOptions.value === 2) ?
                                        <><div className={`categoria-color-fii float-left`}></div><div className='ml-5'>{categoriaOptions.label}</div></>
                                        : (categoriaOptions.value === 3) ?
                                          <><div className={`categoria-color-fiagro float-left`}></div><div className='ml-5'>{categoriaOptions.label}</div></>
                                          : (categoriaOptions.value === 4) ?
                                            <><div className={`categoria-color-etfn float-left`}></div><div className='ml-5'>{categoriaOptions.label}</div></>
                                            : (categoriaOptions.value === 5) ?
                                              <><div className={`categoria-color-etfi float-left`}></div><div className='ml-5'>{categoriaOptions.label}</div></>
                                              : (categoriaOptions.value === 6) ?
                                                <><div className={`categoria-color-criptomoedas float-left`}></div><div className='ml-5'>{categoriaOptions.label}</div></>
                                                : (categoriaOptions.value === 7) ?
                                                  <><div className={`categoria-color-fixa float-left`}></div><div className='ml-5'>{categoriaOptions.label}</div></>
                                                  : (categoriaOptions.value === 8) ?
                                                    <><div className={`categoria-color-caixa float-left`}></div><div className='ml-5'>{categoriaOptions.label}</div></>
                                                    : <>Selecionar...</>
                                  )}
                                  isSearchable={false}
                                />
                              </div>

                              <div className='p-2'>
                                <label htmlFor="tipo">Tipo</label>
                                <Select
                                  className='text-sm'
                                  name="tipo"
                                  value={selectedTipoOption}
                                  onChange={SelectTipoChange}
                                  options={tipoOptions}
                                  formatOptionLabel={tipoOptions => (
                                    (tipoOptions.value === 1) ?
                                      <><div className={`tipo-color-compra`}><div className='ml-5'>Compra</div></div></>
                                      : (tipoOptions.value === 2) ?
                                        <><div className={`tipo-color-venda`}><div className='ml-5'>Venda</div></div></>
                                        : <>{tipoOptions.label}</>


                                  )}
                                  isSearchable={false}
                                />
                              </div>
                            </div>

                            <div className="p-2">
                              <label htmlFor="Corretora">Corretora</label>
                              <Select
                                className='text-sm'
                                name="corretora"
                                value={selectedOption}
                                onChange={SelectChange}
                                options={options}
                                isSearchable={false}
                              />
                            </div>

                            <div className="p-2">
                              <label htmlFor="Ativo">Ativo</label>
                              <Select
                                className='text-sm'
                                name="ativo"
                                value={selectedOptionAtivos}
                                onChange={SelectChangeAtivos}
                                formatOptionLabel={optionsAtivos => (
                                  (optionsAtivos.ativo_categoria === 1) ?
                                    <><div className={`categoria-color-acoes float-left`}></div><div className='ml-5'>{optionsAtivos.label}</div></>
                                    : (optionsAtivos.ativo_categoria === 2) ?
                                      <><div className={`categoria-color-fii float-left`}></div><div className='ml-5'>{optionsAtivos.label}</div></>
                                      : (optionsAtivos.ativo_categoria === 3) ?
                                        <><div className={`categoria-color-fiagro float-left`}></div><div className='ml-5'>{optionsAtivos.label}</div></>
                                        : (optionsAtivos.ativo_categoria === 4) ?
                                          <><div className={`categoria-color-etfn float-left`}></div><div className='ml-5'>{optionsAtivos.label}</div></>
                                          : (optionsAtivos.ativo_categoria === 5) ?
                                            <><div className={`categoria-color-etfi float-left`}></div><div className='ml-5'>{optionsAtivos.label}</div></>
                                            : (optionsAtivos.ativo_categoria === 6) ?
                                              <><div className={`categoria-color-criptomoedas float-left`}></div><div className='ml-5'>{optionsAtivos.label}</div></>
                                              : (optionsAtivos.ativo_categoria === 7) ?
                                                <><div className={`categoria-color-fixa float-left`}></div><div className='ml-5'>{optionsAtivos.label}</div></>
                                                : (optionsAtivos.ativo_categoria === 8) ?
                                                  <><div className={`categoria-color-caixa float-left`}></div><div className='ml-5'>{optionsAtivos.label}</div></>
                                                  : <>{optionsAtivos.label}</>

                                )}
                                options={optionsAtivos}
                                isSearchable={true}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="grid 1xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1">

                              <div className="p-2">
                                <label htmlFor="Negociação">Negociação</label>
                                <Flatpickr
                                  name="negociacao"
                                  value={formData.negociacao || DateOption}
                                  onChange={(e) => {
                                    DateChange(e);
                                  }}
                                  options={{ dateFormat: 'd/m/Y', position: isRtl ? 'auto right' : 'auto left' }}
                                  className="form-input p-2"
                                />
                              </div>
                              <div className="p-2">
                                <label htmlFor="Quantidade">Quantidade</label>
                                <input name="quantidade" value={formData.quantidade} onKeyDown={handleKeyPress} onChange={(event) => {
                                  handleNumChange(event);
                                  formHandleChange(event);
                                }}
                                  type="text" placeholder="0" className="form-input" />
                              </div>
                              <div className="p-2">
                                <label htmlFor="Preço">Preço</label>
                                <input name="preco" value={preco} onChange={(event) => {
                                  handlePrecoChange(event);
                                  formHandleChange(event);
                                }}
                                  type="text" placeholder="R$ 0,00" className="form-input" />
                              </div>

                              <div className="p-2">
                                <label htmlFor="Corretagem">Corretagem</label>
                                <input name="corretagem" value={corretagem} onChange={(event) => {
                                  handleCorretagemChange(event);
                                  formHandleChange(event);
                                }} type="text" placeholder="R$ 0,00" className="form-input" />
                              </div>
                              <div className="p-2">
                                <label htmlFor="Emolumentos">Emolumentos</label>
                                <input name="emolumentos" value={emolumentos} onChange={(event) => {
                                  handleEmolumentosChange(event);
                                  formHandleChange(event);
                                }} type="text" placeholder="R$ 0,00" className="form-input" />
                              </div>
                              <div className="p-2">
                                <label htmlFor="Impostos">Impostos</label>
                                <input name="impostos" value={impostos} onChange={(event) => {
                                  handleImpostosChange(event);
                                  formHandleChange(event);
                                }} type="text" placeholder="R$ 0,00" className="form-input mb-5" />

                              </div>
                            </div>
                          </div>
                              <div className='totalBox xl:col-span-2'>
                                <div className="grid xl:grid-cols-4 sm:grid-cols-4 grid-cols-4 gap-6">
                                  <div className='text-total'>Total:</div>
                                  <div className='text-total col-span-3 text-right pad-total'>{valorTotal}</div>
                                </div>
                              </div>
                        </div>

                      </div><div className="mt-7 pb-2 flex items-center justify-around">
                        <button onClick={() => setModal4(false)} onChange={formHandleChange} type="button" className="btn btn-outline-primary">
                          Cancel
                        </button>
                        <button type="button" onClick={() => { AddNew(); }} className="btn btn-outline-success ltr:ml-4 rtl:mr-4">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div></div>
  );
};

export default Transacoes;