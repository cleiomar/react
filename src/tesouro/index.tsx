import React, { useEffect, useState, ChangeEvent, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import globalVars from '../data/global'
import { useSelector } from 'react-redux';
import { converterDataParaBrasil, calcularVariaveis } from '../data/funcoes';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';


interface BondMarket {
    opngDtTm: string;
    clsgDtTm: string;
}

interface BondInfo {
    TrsrBdMkt: BondMarket;
    untrInvstmtVal: number;
    anulInvstmtRate: number;
    untrRedVal: number;
    anulRedRate: number;
}

interface TreasuryBond {
    TrsrBd: {
        PrcgLst: BondInfo[];
    };
}


const Tesouro = () => {
    
    const { t } = useTranslation();
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [dados2, setData2] = useState([]);
    const getTreasure = async (codigo, periodo) => {
        const data = await fetch('http://localhost:3000/treasure/' + codigo + '/' + periodo)
        const response = await data.json()
        if (response.length === 0) {
            setResultado(false)
        }
        else {
            setResultado(true)
        }
        setTimeout(() => {
            setLoading(false);
        }, 500);
        setData2(response);
    }

    const [dados3, setData3] = useState([]);
    const getTreasureNames = async () => {
        const data = await fetch('http://localhost:3000/treasure_names/')
        const response = await data.json()
        setData3(response);
    }

    const [nomeTesouro, setNomeTesouro] = useState();
    const [selectedOptionCategoria, setSelectedOptionCategoria] = useState([]);
    const [selectedOptionCategoriaNum, setSelectedOptionCategoriaNum] = useState(0);
    const SelectChangeCategoria = (selectedOptionCategoria) => {
        setNomeTesouro(selectedOptionCategoria.label);
        setSelectedOptionCategoriaNum(selectedOptionCategoria.value);
        setLoading(true)
        setSelectedOptionCategoria(selectedOptionCategoria);
    };

    const [selectedOptionRange, setSelectedOptionRange] = useState([]);
    const [selectedOptionPeriodo, setSelectedOptionPeriodo] = useState(1);
    const SelectChangeRange = (selectedOptionRange) => {
        setSelectedOptionPeriodo(selectedOptionRange.value)
        setLoading(true)
        setSelectedOptionRange(selectedOptionRange)
    };

    const [acumulador, setAcumulador] = useState(0);
    const [tamanho, setTamanho] = useState(0);
    const [media, setMedia] = useState(0);
    const [data, setData] = useState([]);
    const [dataTime, setDataTime] = useState([]);
    const [dataNomes, setDataNomes] = useState([]);

    useEffect(() => {
        getTreasure(selectedOptionCategoriaNum, selectedOptionPeriodo)
    }, [selectedOptionPeriodo, selectedOptionCategoriaNum]);

    useEffect(() => {
        getTreasureNames()
    }, []);

    useEffect(() => {
        const jsonTreasure = dados3.map((item, index) => ({
            'value': item.codigo_tesouro,
            'label': item.nome.toString(),
        }));
        setDataNomes(jsonTreasure);
    }, [dados3]);

    useEffect(() => {
        setSelectedOptionRange({ value: '', label: 'Selecionar...' })
        setSelectedOptionCategoria({ value: '', label: 'Selecionar...' })
    }, [])

    useEffect(() => {
        const jsonData = dados2.map(item => item.tesouro_valor.toString());
        setData(jsonData);

        const jsonDataTime = dados2.map(item => converterDataParaBrasil(item.tesouro_data.toString()));
        setDataTime(jsonDataTime);

        const somarTaxas = () => {
            const soma = dados2.reduce((acc, item) => {
                const data = item.tesouro_data;
                if (data !== undefined) {
                    return acc + +item.tesouro_valor;
                }
                return acc;
            }, 0);
            setAcumulador(soma);
            setTamanho(dados2.length);
            setMedia(soma / (dados2.length));
        };
        somarTaxas();

    }, [dados2]);

    const findMinMaxRates = (data: Data) => {
        const prcgList = data || [];

        if (prcgList.length === 0) {
            return { minRate: undefined, maxRate: undefined };
        }

        const rates = prcgList.map(item => item.tesouro_valor);
        const minRate = Math.min(...rates);
        const maxRate = Math.max(...rates);

        return { minRate, maxRate };
    };

    const [minRate, setMinRate] = useState(0);
    const [maxRate, setMaxRate] = useState(0);
    const [pessimo, setPessimo] = useState(0);
    const [pessimo2, setPessimo2] = useState(0);
    useEffect(() => {
        const { minRate, maxRate } = findMinMaxRates(dados2);
        setMinRate(minRate);
        setMaxRate(maxRate);
    }, [dados2])

    const [loading, setLoading] = useState(true);
    const [resultado, setResultado] = useState(true);

    const annotations = {
        yaxis: [{
            y: parseFloat(media).toFixed(2),
            borderColor: '#000000',
            borderWidth: 6, // Ajuste a largura da linha conforme necessário
            label: {
                borderColor: '#000000',
                style: {
                    color: '#FFFFFF',
                    background: '#000000'
                },
                text: 'Média: ' + parseFloat(media).toFixed(2) + '%'
            }
        },
        {
            y: parseFloat((((maxRate - minRate) / 6) * 2) + media).toFixed(2), // Valor inicial da faixa
            y2: maxRate * 2, // Valor final da faixa
            fillColor: '#00ab55', // Cor de fundo da faixa
            nome: 'Ótima',
            opacity: 0.3, // Opacidade da faixa
        }, {
            y: parseFloat((((maxRate - minRate) / 6)) + media).toFixed(2), // Valor inicial da faixa
            y2: parseFloat((((maxRate - minRate) / 6) * 2) + media).toFixed(2), // Valor final da faixa
            fillColor: '#0c60bb', // Cor de fundo da faixa
            nome: 'Bom',
            opacity: 0.3, // Opacidade da faixa
        }, {
            y: media, // Valor inicial da faixa
            y2: parseFloat((((maxRate - minRate) / 6)) + media).toFixed(2), // Valor final da faixa
            fillColor: '#454545', // Cor de fundo da faixa
            nome: 'Normal',
            opacity: 0.3, // Opacidade da faixa
        }, {
            y: parseFloat(((4 / 5) * media)).toFixed(2), // Valor inicial da faixa
            y2: media, // Valor final da faixa
            fillColor: '#ef7817', // Cor de fundo da faixa
            nome: 'Ruim',
            opacity: 0.3, // Opacidade da faixa
        }, {
            y: 0.00, // Valor inicial da faixa
            y2: parseFloat(((4 / 5) * media)).toFixed(2), // Valor final da faixa
            fillColor: '#e7515a', // Cor de fundo da faixa
            nome: 'Péssima',
            opacity: 0.3, // Opacidade da faixa
        },
        ],
    };

    const colorCategorias = ["#CE0300"];
    const areaChart: any = {
        series: [
            {
                name: nomeTesouro,
                data: data,
            }
        ],
        options: {
            annotations: annotations,
            chart: {
                height: 325,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                stacked: false,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,//Barra para Salvar Imagens
                },
            },

            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'straight',
                width: 2,
                lineCap: 'square',
            },
            dropShadow: {
                enabled: true,
                opacity: 1,
                blur: 10,
                left: -7,
                top: 22,
            },
            colors: isDark ? colorCategorias : colorCategorias,
            labels: dataTime,
            xaxis: {
                tickAmount: 7,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                },
                crosshairs: {
                    show: true,
                },
                labels: {
                    offsetX: isRtl ? 25 : 25,
                    offsetY: 5,

                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-xaxis-title',
                    },
                },
            },
            yaxis: {
                tickAmount: 7,

                min: minRate - (minRate*0.1),
                max: maxRate + (minRate*0.1),
                axisTicks: {
                    show: true,
                },
                labels: {
                    formatter: (value: number) => {
                        return `${parseFloat(value).toFixed(2)}%`;
                    },
                    offsetX: isRtl ? -30 : -10,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
                opposite: isRtl ? true : false,
                title: {
                    text: 'Taxa de Juros (%)',
                    style: {
                        fontSize: '14px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                }
            },
            grid: {
                borderColor: isDark ? '#191E3A' : '#E0E6ED',
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
                fontSize: '16px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
                x: {
                    show: false,
                },
            },
            fill: {
                type: 'solid',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: isDark ? 1 : 1,
                    opacityTo: 1,
                    stops: isDark ? [100, 100] : [100, 100],
                },
            },
        },
    };

    return (
        <><div>
            <div className='titulo-page'>TESOURO</div>
            <ul className="flex space-x-2 rtl:space-x-reverse mb-5 mt-4">
                <li>
                    <Link to="/" className="text-primary hover:underline">
                    {t('Site')}
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Tesouro</span>
                </li>
            </ul>

            <div className="panel">
                <div className="grid 1xl:grid-cols-7 lg:grid-cols-7 sm:grid-cols-7 grid-cols-1 gap-6  custom-select">
                    <div className='text-sm xl:col-span-4 col-span-4 sm:col-span-4'></div>
                    <Select
                        className='text-sm xl:col-span-2 col-span-2 sm:col-span-2'
                        name="categoria"
                        value={selectedOptionCategoria}
                        onChange={SelectChangeCategoria}
                        options={dataNomes}
                        isSearchable={false}
                    />
                    <Select
                        className='text-sm xl:col-span-1 col-span-1 sm:col-span-1'
                        name="categoria"
                        value={selectedOptionRange}
                        onChange={SelectChangeRange}
                        options={[{ 'value': 1, 'label': '1 Ano' }, { 'value': 0, 'label': 'Todos os Anos ' }]}
                        isSearchable={false}
                    />
                </div>
                <div className="grid 1xl:grid-cols-8 lg:grid-cols-8 sm:grid-cols-8 grid-cols-1 mb-10">
                    <div className='ft-total xl:col-span-7 col-span-7 sm:col-span-6'>
                        <div className='pt-5 ft-total'><center>{nomeTesouro}</center></div>

                        {(selectedOptionCategoriaNum != 0) ?
                            (
                                <>

                                    {loading ? (
                                        // Mostra o indicador de carregamento enquanto o gráfico está sendo carregado
                                        <div className="loader flex flex-col items-center justify-center h-full">
                                            <div className="loader text-center">Carregando<br></br><span className="animate-[spin_3s_linear_infinite] border-8 border-r-warning border-l-primary border-t-danger border-b-success rounded-full w-24 h-24 inline-block align-middle m-auto mb-10"></span></div>
                                        </div>
                                    ) : (
                                        // Renderiza o gráfico quando o carregamento estiver concluído
                                        <>
                                            {resultado ? (
                                                <><div className='titulo-page'>TESOURO</div>
                                                    <ReactApexChart series={areaChart.series} options={areaChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="line" height={500} />
                                                </>
                                            ) :
                                                <>
                                                    <div className="loader flex flex-col items-center justify-center h-full">
                                                        <div className='titulo-page'>Sem resultado</div>
                                                    </div>
                                                </>
                                            }

                                        </>
                                    )}
                                </>
                            ) :
                            <>
                                <div className="loader flex flex-col items-center justify-center h-full">
                                    <div className='titulo-page'>Aguardando seleção.</div>
                                </div>
                            </>}
                    </div>
                    <div className='xl:col-span-1 col-span-1 sm:col-span-2'>
                        <div className='pt-5 pb-2 ft-total'><center>Janela</center></div>
                        {annotations.yaxis.map((annotation, index) => (
                            <div key={index} className='p-1'>
                                <center><div style={{ backgroundColor: annotation.fillColor, width: '20px', height: '20px', opacity: '0.5' }} className='p-7'><div className='pl-12 mb-2' style={{ marginTop: '-10px' }}><b>{annotation.nome}</b></div></div></center>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div></>
    )

};
export default Tesouro;