
import AnimateHeight from 'react-animate-height';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import globalVars from '../../data/global';
import Swal from 'sweetalert2';
import { removeTrailingZeros, formatCurrency, formatCurrency2, formatDate, capitalizeLetters, categoria_color, calcularPorcentagem, caixa, difference } from '../../data/funcoes';

interface PosicaoProps {
    categoria: number;
    categoria_nome: string;
    hide: boolean;
    valor_total_patrimonio: number;
}

type User = {
    id: number;
    ativo: string;
    categoria_prefixo: string;
    tipo_ordem_nome: string;
    broker_nome: string;
    negociacao: string;
    amount: any;
    price: number;
    total: number;
    ativo_codigo: string;
    ativo_moeda: any;
    historico_ativos_valor: number;
    ativo_valor: number;
};

function Posicao({ categoria, categoria_nome, hide, valor_total_patrimonio }: PosicaoProps) {
    const [ocultarDados, setOcultarDados] = useState<boolean>(!globalVars.getVariable1());

    const renderizarConteudo = (className: string, texto: string) => {
        if (ocultarDados && className === 'sensitivy-field') {
            return texto.replace(/./g, '*'); // Substitui cada letra por um asterisco
        }
        return texto;
    };

    const [userList, setUserList] = useState<User[]>([]);
    const [totalAtivos, setTotalAtivos] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);
    const [custoTotal, setCustoTotal] = useState(0);
    const [totalHoje, setTotalHoje] = useState(0);
    const [valorTotalHoje, setValorTotalHoje] = useState(0);
    const [valorTotalOntem, setValorTotalOntem] = useState(0);

    // const getUserList = async () => {
    //     try {
    //         const data = await fetch('http://localhost:3000/transacoes');
    //         const response = await data.json();
    //         setUserList(response);
    //     } catch (error) {
    //         console.error('Erro ao obter a lista de usuários:', error);
    //     }
    // }

    useEffect(() => {
        getAtivos(categoria);
        setOcultarDados(globalVars.getVariable1()   );
        //getUserList();
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


    const getAtivos = async (categoria) => {
        try {
            const data = await fetch('http://localhost:3000/get_total_ativos/' + categoria);
            const response = await data.json();
            setTotalAtivos(response.total_ativos);
            setValorTotal(response.total_valor);
            setCustoTotal(response.total_custo);
            setUserList(response.data);

            const total = response.data;
            const valoresTotais = total.map(row => {
                const totalMultiplicado = (row.ativo_valor-row.historico_ativos_valor)*row.amount;
                return parseFloat(totalMultiplicado);
            });
            const totalSoma = valoresTotais.reduce((acc, historico_ativos_valor) => acc + historico_ativos_valor, 0);
            setValorTotalHoje(totalSoma)
        } catch (error) {
            console.error('Erro ao obter a lista de usuários:', error);
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
                                <div className='subtitulo-valor3 text-left'>{totalAtivos} ATIVOS</div>
                            </div>
                        </div>
                        <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-6 w-50p">
                            <div>
                                <div className='subtitulo-valor3 text-end'>
                                    <div>HOJE</div>
                                </div>
                                <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3">
                                    <div className='text-rightkit pr-3 w-50p'><IconCaretDown /></div>
                                    <div className='subtitulo-valor3 w--50p'>{
                                    renderizarConteudo('sensitivy-field',formatCurrency2(removeTrailingZeros((parseFloat(valorTotalHoje) - parseFloat(valorTotalOntem))),1))}</div>
                                    <div className={`pl-5 ${calcularPorcentagem(valorTotalHoje,valorTotal) >= 0 ? 'percentual-positivo' : 'percentual-negativo'}`}>{calcularPorcentagem(valorTotalHoje,valorTotal)}%</div>
                                </div>
                            </div>
                            <div>
                                <div className='subtitulo-valor3 text-end'>
                                    <div>TOTAL</div>
                                </div>
                                <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3">
                                    <div className='text-rightkit pr-3 w-50p'><IconCaretDown /></div>
                                    <div className='subtitulo-valor3 w--50p'>{
                                    renderizarConteudo('sensitivy-field',formatCurrency2(removeTrailingZeros((parseFloat(valorTotal) - parseFloat(custoTotal))),1))}</div>
                                    <div className={`pl-5 ${difference(custoTotal, valorTotal) >= 0 ? 'percentual-positivo' : 'percentual-negativo'}`}>{difference(custoTotal, valorTotal)}%</div>
                                </div>
                            </div>
                            <div className=' mt-2'>
                                <div className='titulo-page float-left'>{calcularPorcentagem(valorTotal, valor_total_patrimonio)}%</div><span className='ft-total float-right'>{renderizarConteudo('sensitivy-field',formatCurrency2(removeTrailingZeros(valorTotal)))}
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
                                                    <div>{capitalizeLetters(ativo_codigo)}</div>
                                                </div>
                                            ),
                                        },
                                        { accessor: 'broker_nome', title: 'Broker' },
                                        {
                                            accessor: 'amount', title: 'Quantidade',
                                            render: ({ amount }) => <div className='sensitivy-field'>{renderizarConteudo('sensitivy-field', removeTrailingZeros(amount))}</div>,
                                        },
                                        {
                                            accessor: 'preco_medio', title: 'Preço Médio',
                                            render: ({ preco_medio, ativo_moeda }) => <div className='sensitivy-field'>{
                                                renderizarConteudo('sensitivy-field', formatCurrency2(removeTrailingZeros(preco_medio), ativo_moeda))
                                                
                                                
                                                }</div>,
                                        },
                                        {
                                            accessor: 'price', title: 'Preço Hoje',
                                            render: ({ price, ativo_moeda }) => <div className='sensitivy-field'>{
                                                renderizarConteudo('sensitivy-field', formatCurrency2(removeTrailingZeros(price), ativo_moeda))
                                                
                                                
                                                }</div>,
                                        },
                                        {
                                            accessor: 'variacao_hoje',
                                            title: 'Variação Hoje',
                                            render: ({ historico_ativos_valor, ativo_valor, amount }) => {
                                                const diff = parseFloat(ativo_valor)-parseFloat(historico_ativos_valor);
                                                const porcentagem = diff >= 0 ? 'percentual-positivo' : 'percentual-negativo';
                                                const mult = diff < 0 ? '-' : '';
                                                return (
                                                    <div>
                                                        <span className='subtitulo-valor3'>
                                                            {mult + formatCurrency(((diff * parseFloat(amount))).toFixed(2))}
                                                        </span>
                                                        <span className={porcentagem + ' ml-4 subtitulo-valor3'}>
                                                            {`${difference(historico_ativos_valor,ativo_valor)}%`}
                                                        </span>
                                                    </div>
                                                );
                                            },
                                        },
                                        {
                                            accessor: 'variacao_total',
                                            title: 'Variação Total',
                                            render: ({ ativo_valor, amount, preco_medio }) => {
                                                const diff = parseFloat(ativo_valor)-parseFloat(preco_medio);
                                                const porcentagem = diff >= 0 ? 'percentual-positivo' : 'percentual-negativo';
                                                const mult = diff < 0 ? '-' : '';
                                                return (
                                                    <div>
                                                        <span className='subtitulo-valor3'>
                                                            {mult + formatCurrency(((diff * parseFloat(amount))).toFixed(2))}
                                                        </span>
                                                        <span className={porcentagem + ' ml-4 subtitulo-valor3'}>
                                                            {`${difference(preco_medio, ativo_valor)}%`}
                                                        </span>
                                                    </div>
                                                );
                                            },
                                        },
                                        {
                                            accessor: 'total',
                                            title: 'Total',
                                            render: ({ total, ativo_moeda, type }) => (
                                                <><div className='sensitivy-field'>{
                                                    (type === 8 || type === 5) ?
                                                renderizarConteudo('sensitivy-field', caixa(removeTrailingZeros(total), ativo_moeda)):renderizarConteudo('sensitivy-field', formatCurrency2(removeTrailingZeros(total), ativo_moeda))}</div></>
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