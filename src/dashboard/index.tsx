import React, { useEffect, useState, ChangeEvent } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import globalVars from '../data/global'

const Dashboard = () => {

    const [ocultarDados, setOcultarDados] = useState<boolean>(!globalVars.getVariable1());
    const [tooltipConfig, setTooltipConfig] = useState(null);

    useEffect(() => {
        const initializeTooltipConfig = () => {
            setOcultarDados((prevState) => !prevState);
            const newTooltipConfig = globalVars.getVariable1()
                ? {
                    formatter: (value, { series, seriesIndex, dataPointIndex, w }) => {
                        if (w && w.globals && w.globals.seriesNames) {
                            return w.globals.seriesNames[seriesIndex];
                        }
                        return '*******';
                    },
                }
                : {
                    formatter: (value, { series, seriesIndex, dataPointIndex, w }) => {
                        if (w && w.globals && w.globals.seriesNames) {
                            return w.globals.seriesNames[seriesIndex];
                        }
                        return formatCurrency(value);
                    },
                };

            setTooltipConfig(newTooltipConfig);
        };

        initializeTooltipConfig();
    }, []);

    const [ocultarValor, setOcultarValor] = useState<boolean>(true);
    useEffect(() => {
        const handleVariable1Change = () => {
            setOcultarDados((prevState) => !prevState);
            (globalVars.getVariable1()) ?
                setTooltipConfig({
                    formatter: (value, { series, seriesIndex, dataPointIndex, w }) => {
                        // Verifica se 'w' e 'w.globals.seriesNames' estão definidos
                        if (w && w.globals && w.globals.seriesNames) {
                            return w.globals.seriesNames[seriesIndex];
                        }
                        return '*******'; // Retorna o valor original se algo estiver indefinido
                    },
                }) :
                setTooltipConfig({
                    formatter: (value, { series, seriesIndex, dataPointIndex, w }) => {
                        // Verifica se 'w' e 'w.globals.seriesNames' estão definidos
                        if (w && w.globals && w.globals.seriesNames) {
                            return w.globals.seriesNames[seriesIndex];
                        }
                        return formatCurrency(value); // Retorna o valor original se algo estiver indefinido
                    },
                })
        };
        globalVars.addListener(handleVariable1Change);
        return () => {
            globalVars.removeListener(handleVariable1Change);
        };
    }, []);

    const get_ativos = async (type) => {
        const result = await fetch('http://localhost:3000/ativos/' + type + '/g');
        const data = await result.json();
        setData(data);
    }

    useEffect(() => {
        get_ativos(1);
    }, []);

    const [data, setData] = useState([]);
    const [dataGroup, setDataGroup] = useState([]);
    useEffect(() => {
        const get_group_ativos = async () => {
            const result = await fetch('http://localhost:3000/percentual_categorias');
            const data = await result.json();
            setDataGroup(data);
        }
        get_group_ativos();
    }, []);


    const tickers = data.map(item => item.ativo_codigo);
    const multipliedValues = data.map(item => parseFloat((item.amount * item.price).toFixed(2)));


    const nameGroup = dataGroup.map(item => item.categoria_prefixo);
    const multipliedGroupValues = dataGroup.map(item => parseFloat(item.total));

    // Array inicial de cores
    function getUniqueMixedColors(colorArray: Array<ChangeEvent>) {
        const shuffledColors = colorArray.slice().sort(() => Math.random() - 0.5);
        const mixedColors = [];

        for (let i = 0; i < shuffledColors.length; i += 2) {
            mixedColors.push(shuffledColors[i]);
            if (i + 1 < shuffledColors.length) {
                mixedColors.push(shuffledColors[i + 1]);
            }
        }

        return mixedColors;
    }

    const colorArray = ["#b11573", "#4bb473", "#75d89e", "#2f3f94", "#2f7b99", "#da967d", "#34891f", "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177", "#0d5ac1",
        "#f205e6", "#1c0365", "#14a9ad", "#4ca2f9", "#a4e43f", "#d298e2", "#6119d0",
        "#d2737d", "#c0a43c", "#f2510e", "#651be6", "#79806e", "#61da5e", "#cd2f00",
        "#9348af", "#01ac53", "#c5a4fb", "#996635", "#b0d87b", "#ca4751", "#7e50a8",
        "#c4d647", "#e0eeb8", "#11dec1", "#289812", "#566ca0", "#ffdbe1", "#2f1179",
        "#935b6d", "#916988", "#513d98", "#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
        "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
        "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
        "#5be4f0", "#57c4d8", "#a4d17a", "#be608b", "#96b00c", "#088baf",
        "#f158bf", "#e145ba", "#ee91e3"];

    const colorArrayGrupo = ["#e7515a", "#00ab55", "#0c60bb", "#43efbc", "#ef7817", "#ab0000", "#008fab", "#d2d212"];

    const mixedColors = getUniqueMixedColors(colorArray);
    const formatCurrency = (value: number) => {
        return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    };


    const donutChart: any = {
        series: multipliedValues,
        options: {
            chart: {
                height: 300,
                type: 'donut',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                show: true,
            },
            labels: tickers,
            dataLabels: {
                enabled: true,
                enabledOnSeries: undefined,
                textAnchor: 'middle',
                distributed: false,
                offsetX: 0,
                offsetY: 0,
            },
            tooltip: {
                enabled: true,
                enabledOnSeries: undefined,
                shared: true,
                followCursor: false,
                intersect: false,
                inverseOrder: false,
                custom: undefined,
                fillSeriesColor: true,
                theme: true,
                style: {
                    fontSize: '12px',
                    fontFamily: undefined
                },
                onDatasetHover: {
                    highlightDataSeries: true,
                },
                y: tooltipConfig,
                marker: {
                    show: true,
                },
                fixed: {
                    enabled: false,
                    position: 'topRight',
                    offsetX: 0,
                    offsetY: 0,
                },
            },
            colors: colorArray,
            responsive: [
                {
                    breakpoint: 380,
                    options: {
                        chart: {
                            width: 500,
                        },
                    },
                },
            ],
            legend: {
                position: 'bottom',
            },
        },
    };


    const donutGroupChart: any = {
        series: multipliedGroupValues,
        options: {
            chart: {
                height: 300,
                type: 'donut',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
                events: {
                    dataPointSelection: (event, chartContext, config) => {
                        if (config.w.config.labels[config.dataPointIndex] == 'Ações') {
                            get_ativos(1);
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'FII') {
                            get_ativos(2);
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'FIAgro') {
                            get_ativos(3);
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'ETF Nacionais') {
                            get_ativos(4);
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'ETF Internacionais') {
                            get_ativos(5);
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'Criptomoedas') {
                            get_ativos(6);
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'Renda Fixa') {
                            get_ativos(7);
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'Caixa') {
                            get_ativos(8);
                        }
                    }
                }
            },
            stroke: {
                show: true,
            },
            labels: nameGroup,
            dataLabels: {
                enabled: true,
                enabledOnSeries: undefined,
                textAnchor: 'middle',
                distributed: false,
                offsetX: 0,
                offsetY: 0,
            },
            tooltip: {
                enabled: true,
                enabledOnSeries: undefined,
                shared: true,
                followCursor: false,
                intersect: false,
                inverseOrder: false,
                fillSeriesColor: true,
                theme: true,
                style: {
                    fontSize: '12px',
                    fontFamily: undefined
                },
                onDatasetHover: {
                    highlightDataSeries: true,
                },
                y: tooltipConfig,
                marker: {
                    show: true,
                },
                fixed: {
                    enabled: false,
                    position: 'topRight',
                    offsetX: 0,
                    offsetY: 0,
                },
            },
            colors: colorArrayGrupo,
            responsive: [
                {
                    breakpoint: 380,
                    options: {
                        chart: {
                            width: 500,
                        },
                    },
                },
            ],
            legend: {
                position: 'bottom',
            },
        },
    };

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://brapi.dev/api/quote/PETR4?token=7fRjckesBySAepeEseSBg5');
    //             setData(response.data.results[0]);
    //         } catch (error) {
    //             console.error('Erro ao buscar dados dos usuários:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);


    return (
        <div><div className='titulo-page'>DASHBOARD</div>
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

                {data.length > 0 ? (
                    <div className="grid 1xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 mb-10 gap-6">
                        <ReactApexChart key={ocultarDados + '1'} series={donutGroupChart.series} options={donutGroupChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="donut" height={700} />
                        <ReactApexChart key={ocultarDados + '2'} series={donutChart.series} options={donutChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="donut" height={700} />
                    </div>
                ) : (
                    // Se os dados ainda não foram carregados, pode exibir um indicador de carregamento ou uma mensagem.
                    <div>Carregando...</div>
                )}
            </div>
        </div>
    )

};
export default Dashboard;