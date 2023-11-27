import { Link, useNavigate } from 'react-router-dom';
import { useEffect, Fragment, useState } from 'react';
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import { useLocation } from 'react-router-dom';
import { removeCurrency, removeTrailingZeros, formatCurrency, formatCurrency2, formatDate, capitalizeLetters, calcularPorcentagem, calcularResto } from '../data/funcoes';
import globalVars from '../data/global'
import 'flatpickr/dist/flatpickr.css';
import 'nouislider/distribute/nouislider.css';
import ReactApexChart from 'react-apexcharts';
import Metas from '../components/metas';
import { parseJSON } from 'date-fns';
import IconPlus from '../components/Icon/IconPlus';
import IconMinus from '../components/Icon/IconMinus';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Transacoes = () => {

    const [value, setValue] = useState<any>(0);
    const [dataToSend, setDataToSend] = useState(100);
    const [porcentagemDisponivel, setPorcentagemDisponivel] = useState<any>(100);


    const [porcentagemAcao, setPorcentagemAcao] = useState<any>(0);
    const [porcentagemFII, setPorcentagemFII] = useState<any>(0);
    const [porcentagemFIAgro, setPorcentagemFIAgro] = useState<any>(0);
    const [porcentagemETFN, setPorcentagemETFN] = useState<any>(0);
    const [porcentagemETFI, setPorcentagemETFI] = useState<any>(0);
    const [porcentagemCriptomoedas, setPorcentagemCriptomoedas] = useState<any>(0);
    const [porcentagemFixa, setPorcentagemFixa] = useState<any>(0);
    const [porcentagemCaixa, setPorcentagemCaixa] = useState<any>(0);
    const [limit, setLimit] = useState<any>(0);

    const [dataFromChild, setDataFromChild] = useState<string | null>(null);
    const handleChildData = (valor: number, categoria: number) => {
        setDataFromChild(valor);

        if (categoria === 1) {
            setPorcentagemAcao(valor);
        }
        else if (categoria === 2) {
            setPorcentagemFII(valor);
        }
        else if (categoria === 3) {
            setPorcentagemFIAgro(valor);
        }
        else if (categoria === 4) {
            setPorcentagemETFN(valor);
        }
        else if (categoria === 5) {
            setPorcentagemETFI(valor);
        }
        else if (categoria === 6) {
            setPorcentagemCriptomoedas(valor);
        }
        else if (categoria === 7) {
            setPorcentagemFixa(valor);
        }
        else if (categoria === 8) {
            setPorcentagemCaixa(valor);
        }
    };

    function salvar_configs() {

        const formData = new FormData();

        formData.append('porcentagemAcao', porcentagemAcao);
        formData.append('porcentagemFII', porcentagemFII);
        formData.append('porcentagemFIAgro', porcentagemFIAgro);
        formData.append('porcentagemETFN', porcentagemETFN);
        formData.append('porcentagemETFI', porcentagemETFI);
        formData.append('porcentagemCriptomoedas', porcentagemCriptomoedas);
        formData.append('porcentagemFixa', porcentagemFixa);
        formData.append('porcentagemCaixa', porcentagemCaixa);
        formData.append('limit', limit);

        let url = 'http://localhost:3000/config_percentual';

        const options: RequestInit = {
            method: 'PUT',
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
                    //showSuccess(data.message);
                }
                else {
                    //showError(data.message);
                }
            })
            .catch((error) => {
                console.error('Erro ao enviar a solicitação POST:', error);
            });
    }


    const handleButtonClick = (valor) => {
        const newData = valor;
        setDataToSend(newData);
    };

    useEffect(() => {
        TotalOptions();
    }, []);


    const [categoriaOptions, setCategoriaOptions] = useState([]);
    const catOptions = async () => {
        const data = await fetch('http://localhost:3000/percentual_categorias')
        const response = await data.json();
        setCategoriaOptions(response)
    }

    const [totalCatOptions, setTotalCatOptions] = useState(0);
    const TotalOptions = async () => {
        const data = await fetch('http://localhost:3000/valor_total_patrimonio')
        const response = await data.json()
        setTotalCatOptions(+response.total_valor)
    }

    useEffect(() => {
        catOptions();
        TotalOptions();
    }, []);

    const [percentualAcao, setPercentualAcao] = useState();
    const [percentualFii, setPercentualFii] = useState();
    const [percentualFiagro, setPercentualFiagro] = useState();
    const [percentualEtfn, setPercentualEtfn] = useState();
    const [percentualEtfi, setPercentualEtfi] = useState();
    const [percentualCriptomoeda, setPercentualCriptomoeda] = useState();
    const [percentualFixa, setPercentualFixa] = useState();
    const [percentualCaixa, setPercentualCaixa] = useState();
    const [configs, setConfigs] = useState([]);
    const config = async () => {
        const data = await fetch('http://localhost:3000/configs')
        const [response] = await data.json();
        setPercentualAcao(response.percentual_acao)
        setPercentualFii(response.percentual_fii)
        setPercentualFiagro(response.percentual_fiagro)
        setPercentualEtfn(response.percentual_etfn)
        setPercentualEtfi(response.percentual_etfi)
        setPercentualCriptomoeda(response.percentual_criptomoeda)
        setPercentualFixa(response.percentual_fixa)
        setPercentualCaixa(response.percentual_caixa)
        setLimit(response.porcentagem_limite)
        setConfigs(response);
    }

    useEffect(() => {
        config();
    }, []);


    const [dataGroup, setDataGroup] = useState([]);
    useEffect(() => {
        const get_group_ativos = async () => {
            const result = await fetch('http://localhost:3000/type');
            const data = await result.json();
            setDataGroup(data);
        }
        get_group_ativos();
    }, []);


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

    const colorArray = ["#e7515a", "#00ab55", "#0c60bb", "#43efbc", "#ef7817", "#ab0000", "#008fab", "#d2d212"];

    const mixedColors = getUniqueMixedColors(colorArray);
    const formatCurrency = (value: number) => {
        return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    };

    const nameGroup = categoriaOptions.map(item => item.label);
    const multipliedGroupValues = categoriaOptions.map(item => parseFloat(item.total));
    const donutGroupChart: any = {
        //series: multipliedGroupValues,dataToSend
        series: [porcentagemAcao, porcentagemFII, porcentagemFIAgro, porcentagemETFN, porcentagemETFI, porcentagemCriptomoedas, porcentagemFixa, porcentagemCaixa],
        options: {
            chart: {
                animations: {
                    enabled: false,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                },
                height: 300,
                type: 'donut',
                dropShadow: {
                    enabled: false,
                },
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
                events: {
                    dataPointSelection: (event, chartContext, config) => {
                        if (config.w.config.labels[config.dataPointIndex] == 'Ações') {
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'FII') {
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'FIAgro') {
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'ETF Nacionais') {
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'ETF Internacionais') {
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'Criptomoedas') {
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'Renda Fixa') {
                        }
                        else if (config.w.config.labels[config.dataPointIndex] == 'Caixa') {
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

    useEffect(() => {
        let somaPercentual = porcentagemAcao + porcentagemFII + porcentagemFIAgro + porcentagemETFN + porcentagemETFI + porcentagemCriptomoedas + porcentagemFixa + porcentagemCaixa;
        setPorcentagemDisponivel(calcularResto(100, somaPercentual));
        handleButtonClick(calcularResto(100, somaPercentual));
        setTimeout(() => {
            salvar_configs();
        }, 0);
    }, [porcentagemAcao, porcentagemFII, porcentagemFIAgro, porcentagemETFN, porcentagemETFI, porcentagemCriptomoedas, porcentagemFixa, porcentagemCaixa, limit])


    return (
        <div>
            <div className='titulo-page'>METAS</div>
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

                <div className="grid 1xl:grid-cols-8 lg:grid-cols-8 sm:grid-cols-2 grid-cols-1 gap-6">
                    <div className="grid 1xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:col-span-5 gap-6">
                        <div className="panel w-full xl:col-span-4 sm:col-span-2 ">
                            <div>
                                <div><div className='mb-5 ft-total w-200'>PORCENTAGEM LIMITE<Tippy trigger="mouseenter focus" content="Porcentagem limite para mais ou para menos dos ativos.">
                                    <button type="button" data-trigger="mouseenter" className="btn btn-primary rounded-full h-18 p-1 float-right">
                                        ?
                                    </button>
                                </Tippy></div>
                                    <div className="relative">
                                        <div className="flex">
                                            <button
                                                type="button"
                                                className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
                                                onClick={() => setLimit(limit > 0 ? limit - 1 : 0)}
                                            >
                                                <IconMinus className="w-5 h-5" />
                                            </button>
                                            <input
                                                type="string"
                                                className="form-input rounded-none pl-8 text-center"
                                                min={0}
                                                max={100}
                                                readOnly
                                                value={limit+'%'}
                                                onWheel={() => setLimit(limit > 0 ? limit - 1 : 0)}
                                            />
                                            <button
                                                type="button"
                                                className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
                                                onClick={() => { setLimit(limit < 100 ? limit + 1 : 100) }}
                                            >
                                                <IconPlus />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            categoriaOptions.map((item, index) => {
                                let porcent: number;

                                if (index === 0) porcent = percentualAcao;
                                else if (index === 1) porcent = percentualFii;
                                else if (index === 2) porcent = percentualFiagro;
                                else if (index === 3) porcent = percentualEtfn;
                                else if (index === 4) porcent = percentualEtfi;
                                else if (index === 5) porcent = percentualCriptomoeda;
                                else if (index === 6) porcent = percentualFixa;
                                else if (index === 7) porcent = percentualCaixa;

                                return (
                                    <Metas
                                        categoria_id={item.value}
                                        categoria={item.label}
                                        limit={limit}
                                        percentualInicial={porcent}
                                        onDataReceived={handleChildData}
                                        dataFromParent={dataToSend}
                                        percentual={calcularPorcentagem(
                                            parseFloat(item.total),
                                            parseFloat(totalCatOptions)
                                        )}
                                        key={index}
                                    />
                                );
                            })
                        }

                    </div>
                    <div className='xl:col-span-3' ><div className='w-full text-center subtitulo-page'><div>Disponível: {porcentagemDisponivel}% de 100%</div></div>
                        <ReactApexChart key={dataToSend} series={donutGroupChart.series} options={donutGroupChart.options} className="rounded-lg dark:bg-blackoverflow-hidden" type="donut" height={700} /></div>
                </div>
            </div>
        </div>
    );
};

export default Transacoes;