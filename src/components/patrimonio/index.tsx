
import AnimateHeight from 'react-animate-height';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import globalVars from '../../data/global';
import Swal from 'sweetalert2';
import { removeTrailingZeros, formatCurrency, formatCurrency2, formatDate, capitalizeLetters, categoria_color } from '../../data/funcoes';

interface PosicaoProps {
    categoria: number;
    categoria_nome: string;
    hide: boolean;
}

type User = {
    id: number;
    ativo: string;
    categoria_prefixo: string;
    tipo_ordem_nome: string;
    broker_nome: string;
    negociacao: string;
    quantidade: any;
    preco: number;
    total: number;
    ativo_codigo: string;
    ativo_moeda: any;
  };

function Posicao({ categoria, categoria_nome, hide }: PosicaoProps) {
    
  const [ocultarDados, setOcultarDados] = useState<boolean>(!globalVars.getVariable1());

  const renderizarConteudo = (className: string, texto: string) => {
    if (ocultarDados && className === 'sensitivy-field') {
      return texto.replace(/./g, '*'); // Substitui cada letra por um asterisco
    }
    return texto;
  };

    const [userList, setUserList] = useState<User[]>([]);

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
        setOcultarDados(hide);
        getUserList();
    }, []);


    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(userList));
    const [recordsData, setRecordsData] = useState(initialRecords);


    const [search, setSearch] = useState('');

    useEffect(() => {
        setInitialRecords(sortBy(userList));
    }, [userList]);

    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>([]);
    const [active, setActive] = useState<string>('0');
    const togglePara = (value: string) => {
        setActive((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor, sortStatus.direction);
        setPage(1);
    }, [sortStatus]);

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
                    item.ativo.toLowerCase().includes(search.toLowerCase()) ||
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
    }, [search]);

    useEffect(() => {
        const handleVariable1Change = () => {
          setOcultarDados((prevState) => !prevState); // Usando uma função no setOcultarDados
        };
        globalVars.addListener(handleVariable1Change);
        return () => {
          globalVars.removeListener(handleVariable1Change);
        };
      }, []);
    
    return (
        <>
            <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
                <button
                    type="button"
                    className={`p-3 w-full flex justify-between items-center text-white-dark dark:bg-[#1b2e4b] ${active === '1' ? '!text-primary' : ''}`}
                    onClick={() => togglePara('1')}
                >
                    <div className='flex justify-between w-full'>
                        <div>
                            <div className={`${categoria_color(categoria)}`}></div>
                            <div className='ml-8'>
                                <div className='subtitulo-page'>{categoria_nome}</div>
                                <div className='subtitulo-valor3 text-left'>8 ATIVOS</div>
                            </div>
                        </div>
                        <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-6 w-50p">
                            <div>
                                <div className='subtitulo-valor3 text-end'>
                                    <div>HOJE</div>
                                </div>
                                <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3">
                                    <div className='text-rightkit pr-3 w-50p'><IconCaretDown /></div>
                                    <div className='subtitulo-valor3 w--50p'>R$ -24.441,00</div>
                                    <div className='pl-5 percentoal-positivo'>-0,79%</div>
                                </div>
                            </div>
                            <div>
                                <div className='subtitulo-valor3 text-end'>
                                    <div>TOTAL</div>
                                </div>
                                <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3">
                                    <div className='text-rightkit pr-3 w-50p'><IconCaretDown /></div>
                                    <div className='subtitulo-valor3 w--50p'>R$ -24.441,00</div>
                                    <div className='pl-5 percentoal-positivo'>-0,79%</div>
                                </div>
                            </div>
                            <div className=' mt-2'>
                                <div className='titulo-page float-left'>35,50%</div><span className='ft-total float-right'>R$ 355.048,77
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={` ltr:ml-2 rtl:mr-auto ${active === '1' ? 'rotate-180' : ''}`}>
                        <IconCaretDown />
                    </div>
                </button>
                <div>
                    <AnimateHeight duration={300} height={active === '1' ? 'auto' : 0}>
                        <div className="space-y-2 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
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
                                        { accessor: 'broker_nome', title: 'Broker' },
                                        {
                                            accessor: 'negociacao',
                                            title: 'Negociação',
                                            render: ({ negociacao }) => <div>{formatDate(negociacao)}</div>,
                                        },
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
                    </AnimateHeight>
                </div>
            </div>
        </>
    )
}

export default Posicao;