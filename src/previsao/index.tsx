import React, { useEffect, useState, ChangeEvent } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import globalVars from '../data/global'
import Dropdown from '../components/Dropdown';
import { useSelector } from 'react-redux';
import IconClock from '../components/Icon/IconClock';
import { removerFormatacaoNumero, formatoRealSemCifrao, calcularJurosCompostos, calcularJurosCompostosTabela, formatCurrency, imprimirTabela } from '../data/funcoes';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { DataTable } from 'mantine-datatable';
import Select from 'react-select';

const Previsao = () => {


    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);

    const [valorInicial, setValorinicial] = useState('0,00');
    const [valorMensal, setValorMensal] = useState('0,00');
    const [taxaJurosPercentual, setTaxaJurosPercentual] = useState('0');
    const [periodoTotal, setPeriodoTotal] = useState('0');
    const [taxaJuros, setTaxaJuros] = useState('Anual');
    const ChangeTaxaJuros = (val) => {
        setTaxaJuros(val);
    }

    const [periodo, setPeriodo] = useState('Anos');
    const ChangePeriodo = (val) => {
        setPeriodo(val);
    }

    const handleValorMensalChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = event.target.value;
        const formattedValue = formatoRealSemCifrao(inputValue);
        setValorMensal(formattedValue);
    };

    const handleValorInicialChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = event.target.value;
        const formattedValue = formatoRealSemCifrao(inputValue);
        setValorinicial(formattedValue);
    };

    const handleTaxaJurosChange = (event: ChangeEvent<HTMLInputElement>): void => {
        let inputValue = event.target.value;
        setTaxaJurosPercentual(inputValue);
    };

    const handlePeriodoChange = (event: ChangeEvent<HTMLInputElement>): void => {
        let inputValue = event.target.value;
        inputValue = parseInt(inputValue, 10).toString();
        setPeriodoTotal(inputValue);
    };

    const limpar = () => {
        setPeriodoTotal(0);
        setValorMensal('0,00');
        setValorinicial('0,00');
        setTaxaJurosPercentual(0)
    }

    const [rowData, setRowData] = useState([]);
    const [resultadoValorTotal, setResultadoValorTotal] = useState(0);
    const [resultadoValorTotalJuros, setResultadoValorTotalJuros] = useState(0);
    const [resultadoValorTotalInvestido, setResultadoValorTotalInvestido] = useState(0);
    const [graficoTotalJuros, setGraficoTotalJuros] = useState();

    const [graficoMes, setGraficoMes] = useState();
    const [graficoTotalInvestido, setGraficoTotalInvestido] = useState();
    const [graficoTotalAcumulado, setGraficoTotalAcumulado] = useState();
    const calcular = (valorinicial, valormensal, taxajuros, period) => {
        if (taxaJuros == 'Anual') {
            taxajuros = taxajuros / 12;
        }

        if (periodo == 'Anos') {
            period = period * 12;
        }
        const resultado = calcularJurosCompostos(valorinicial, valormensal, taxajuros, period);
        const data = calcularJurosCompostosTabela(valorinicial, valormensal, taxajuros, period);
        setRowData(data);
        setResultadoValorTotal(resultado.valorTotal);
        setResultadoValorTotalJuros(resultado.valorJuros);
        setResultadoValorTotalInvestido(resultado.valorTotalInvestido);

        const graficoMesArray = data.map(item => item.mes);
        const graficoJurosArray = data.map(item => item.totalJuros);
        const graficoTotalInvestidoArray = data.map(item => item.totalInvestido);
        const graficoTotalAcumuladoArray = data.map(item => item.totalAcumulado);
        setGraficoMes(graficoMesArray);
        setGraficoTotalInvestido(graficoTotalInvestidoArray);
        setGraficoTotalAcumulado(graficoTotalAcumuladoArray);
        setGraficoTotalJuros(graficoJurosArray)
    }

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100, 1000];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(rowData);
    const [recordsData, setRecordsData] = useState(initialRecords);

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        setInitialRecords(rowData);
    }, [rowData]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    const lineChart: any = {
        series: [
            {
                name: 'Valor Acumulado',
                data: graficoTotalAcumulado,
            }, {
                name: 'Valor Investido',
                data: graficoTotalInvestido,
            },
        ],
        options: {
            chart: {
                height: 600,
                type: 'line',
                toolbar: false,
            },
            colors: ['#4361EE', '#02B105'],
            tooltip: {
                marker: false,
                y: {
                    formatter(number: number) {
                        return formatCurrency(number.toFixed(2));
                    },
                },
            },
            stroke: {
                width: 2,
            },
            xaxis: {
                categories: graficoMes,
                tickAmount: 20,
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    formatter: (value: number) => {
                        return formatCurrency(value.toFixed(2));
                    },
                    offsetX: isRtl ? -20 : 0,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
    };

    const simpleColumnStacked: any = {
        series: [
            {
                name: 'Valor Investido',
                data: graficoTotalInvestido,
            }, {
                name: 'Juros Acumulado',
                data: graficoTotalJuros,
            },
        ],
        options: {
            chart: {
                height: 500,
                type: 'bar',
                stacked: true,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#02B105', '#4361EE'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 5,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            xaxis: {
                type: 'number',
                categories: graficoMes,
                tickAmount: 20,
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    formatter: (value: number) => {
                        return formatCurrency(value.toFixed(2));
                    },
                    offsetX: isRtl ? -20 : 0,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            legend: {
                position: 'right',
                offsetY: 40,
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
            },
            fill: {
                opacity: 0.8,
            },
        },
    };

    return (
        <div><div className='titulo-page'>PREVISÃO</div>
        
        <div className="panel" id="limit_tagging">
        <div className="flex items-center justify-between mb-5">
        <h5 className="font-semibold text-lg dark:text-white-light">Multiple select</h5>
        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code6')}>
            <span className="flex items-center">
                Code
            </span>
        </button>
    </div>
    <div className="mb-5">
        <Select placeholder="Select an option" isMulti isSearchable={false} />
        </div></div>


            <ul className="flex space-x-2 rtl:space-x-reverse mb-5 mt-4">
                <li>
                    <Link to="/components/tabs" className="text-primary hover:underline">
                        Accounts
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Instagram</span>
                </li>
            </ul>

            <div className="panel">
                <div className="grid grid-cols-1 xl:grid-cols-10 gap-8">
                    <div className='xl:col-span-2'>
                        <label className='subtitulo-valor3'>VALOR INICIAL</label>
                        <div className="mb-5">
                            <div className="flex">
                                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                    R$
                                </div>
                                <input type="text" value={valorInicial} placeholder="" onChange={(event) => { handleValorInicialChange(event) }} className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-2'>
                        <label className='subtitulo-valor3'>VALOR MENSAL</label>
                        <div className="mb-5">
                            <div className="flex">
                                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                    R$
                                </div>
                                <input type="text" value={valorMensal} onChange={(event) => { handleValorMensalChange(event) }} placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-2'>
                        <label htmlFor="dropdownRight" className='subtitulo-valor3'>TAXA DE JUROS</label>
                        <div className="flex">
                            <div className="flex w-full">
                                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                    %
                                </div>
                                <input type="number" value={taxaJurosPercentual} onChange={(event) => { handleTaxaJurosChange(event) }} placeholder="" className="w-full form-input rounded-l-none rounded-r-none" />
                            </div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="bg-primary ft-white w-100 flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
                                    button={taxaJuros}
                                >
                                    <ul className="!min-w-[170px]">
                                        <li>
                                            <button type="button" onClick={() => ChangeTaxaJuros('Anual')}>Anual</button>
                                        </li>
                                        <li>
                                            <button type="button" onClick={() => ChangeTaxaJuros('Mensal')}>Mensal</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-2'>
                        <label htmlFor="dropdownRight" className='subtitulo-valor3'>PERÍODO</label>
                        <div className="flex">
                            <div className="flex w-full">
                                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                    <IconClock className='p-0.5' />
                                </div>
                                <input type="number" value={periodoTotal} onChange={(event) => { handlePeriodoChange(event) }} placeholder="" className="form-input rounded-l-none rounded-r-none" />
                            </div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="bg-primary ft-white w-100 flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
                                    button={periodo}
                                >
                                    <ul className="!min-w-[170px]">
                                        <li>
                                            <button type="button" className='font-color-white' onClick={() => ChangePeriodo('Anos')}>Anos</button>
                                        </li>
                                        <li>
                                            <button type="button" onClick={() => ChangePeriodo('Meses')}>Meses</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='pt-6'>
                        <center><button type="button" onClick={() => calcular(valorInicial, valorMensal, taxaJurosPercentual, periodoTotal)} className="btn btn-primary w-full">Calcular</button></center>
                    </div>
                    <div className='pt-6'>
                        <center><button type="button" onClick={limpar} className="btn btn-outline-primary w-full">Limpar</button></center>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <div className="panel"><center><div className='subtitulo-valor3 ft-green'>VALOR TOTAL INVESTIDO</div><div className='titulo-page pt-6 pb-3'>{formatCurrency(resultadoValorTotalInvestido)}</div></center></div>
                    <div className="panel"><center><div className='subtitulo-valor3 ft-blue'>VALOR TOTAL JUROS</div><div className='titulo-page pt-6 pb-3'>{formatCurrency(resultadoValorTotalJuros)}</div></center></div>
                    <div className="panel"><center><div className='subtitulo-valor3'>VALOR TOTAL FINAL</div><div className='titulo-page pt-6 pb-3'>{formatCurrency(resultadoValorTotal)}</div></center></div>
                </div>
                <div className="mb-5 mt-20">
                    <Tab.Group>
                        <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? 'border-b !border-secondary text-secondary !outline-none' : ''}
                                                    before:inline-block' -mb-[1px] flex items-center border-transparent p-5 py-3 hover:border-b hover:!border-secondary hover:text-secondary`}
                                    >
                                        <div className='subtitulo-valor3'>GRÁFICO LINHA</div>
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? 'border-b !border-secondary text-secondary !outline-none' : ''}
                                                    before:inline-block' -mb-[1px] flex items-center border-transparent p-5 py-3 hover:border-b hover:!border-secondary hover:text-secondary`}
                                    >
                                        <div className='subtitulo-valor3'>GRÁFICO COLUNA</div>
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? 'border-b !border-secondary text-secondary !outline-none' : ''}
                                                before:inline-block' -mb-[1px] flex items-center border-transparent p-5 py-3 hover:border-b hover:!border-secondary hover:text-secondary`}
                                    >
                                        <div className='subtitulo-valor3'>TABELA</div>
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <ReactApexChart key={graficoMes} series={lineChart.series} options={lineChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="line" height={600} />
                            </Tab.Panel>
                            <Tab.Panel>
                                <ReactApexChart series={simpleColumnStacked.series} options={simpleColumnStacked.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={600} />
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="datatables">
                                    <DataTable
                                        noRecordsText="No results match your search query"
                                        highlightOnHover
                                        className="whitespace-nowrap table-hover"
                                        records={recordsData}
                                        columns={[
                                            {
                                                accessor: 'mes', title: <center>Mês</center>,
                                                render: ({ mes }) => <div className='text-small'><center>{mes}</center></div>
                                            },
                                            {
                                                accessor: 'juros', title: <center>Juros</center>,
                                                render: ({ juros }) => <div className='text-small'><center>{
                                                    formatCurrency(juros, 1)
                                                }</center></div>
                                            },
                                            {
                                                accessor: 'totalInvestido', title: <center>Total Investido</center>,
                                                render: ({ totalInvestido }) => <div className='text-small'><center>{
                                                    formatCurrency(totalInvestido, 1)
                                                }</center></div>
                                            },
                                            {
                                                accessor: 'totalJuros', title: <center>Total Juros</center>,
                                                render: ({ totalJuros }) => <div className='text-small'><center>{
                                                    formatCurrency(totalJuros, 1)
                                                }</center></div>
                                            },
                                            {
                                                accessor: 'totalAcumulado', title: <center>Total Acumulado</center>,
                                                render: ({ totalAcumulado }) => <div className='text-small'><center>{
                                                    formatCurrency(totalAcumulado, 1)
                                                }</center></div>
                                            },
                                        ]}
                                        totalRecords={rowData.length}
                                        recordsPerPage={pageSize}
                                        page={page}
                                        onPageChange={(p) => setPage(p)}
                                        recordsPerPageOptions={PAGE_SIZES}
                                        onRecordsPerPageChange={setPageSize}
                                        minHeight={200}
                                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                                    />
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>

        </div>
    )

};
export default Previsao;