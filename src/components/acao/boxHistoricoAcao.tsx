import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { retrocederAnos, nomeIndicador, FormatIndicador } from '../../data/funcoes';
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { createRoot } from 'react-dom/client';

interface TabelaDividendosProps {
    acao: string;
    tabela: Array<any>;
}

const TabelaDividendos = ({ acao, tabela }: TabelaDividendosProps) => {

    const [rowData, setRowData] = useState(tabela);
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [recordsData, setRecordsData] = useState(rowData.slice(0, pageSize));

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
   

    const chartDataIndicador = {
        series: [{
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            type: 'line',
            height: 350
          },
          stroke: {
            width: 2 // Ajuste este valor para controlar a espessura da linha
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
          },
          annotations: {
            yaxis: [{
              y: 80,
              borderColor: '#000',
              label: {
                borderColor: '#000',
                style: {
                  color: '#FFF',
                  background: '#000'
                },
                text: 'Média'
              }
            }]
          }
        }
      };
      
      const showGraphIndicador = async (data: string) => {
        const chart = (
          <div className='p-2'><ReactApexChart
            options={chartDataIndicador.options}
            series={chartDataIndicador.series}
            type="line"
            height={300}
            width={650}
          /></div>
        );
    
        // Criar um elemento div para renderizar o gráfico
        const div = document.createElement('div');
    
        // Usar createRoot para renderizar o componente
        const root = createRoot(div);
        root.render(chart);
    
        await Swal.fire({
            title: "<strong>"+nomeIndicador(data)+"</strong>",
            html: div,
            showCancelButton: false,
            showConfirmButton: false,
            customClass: 'swal',
            width: 700
        });
    }

    useEffect(() => {
        setRowData(tabela);
    }, [tabela]);

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData(rowData.slice(from, to));
    }, [page, pageSize, rowData]);

    // Adicionando um novo efeito para monitorar alterações nos dados da tabela
    useEffect(() => {
        setRecordsData(rowData.slice(0, pageSize));
    }, [rowData, pageSize]);

    const [hiddenCol, setHiddenCol] = useState(false);

    const provHiddenCol = () => {
        setHiddenCol(!hiddenCol); // Alternando entre true e false
    };

    return (
        <div className='panel mt-5'>
            <div className='grid 1xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-1 grid-cols-1 '>
                <div className='subtitulo-page lg:col-span-4 sm:col-span-2 col-span-5 mb-5'>HISTÓRICO DE INDICADORES FUNDAMENTALISTAS</div>
                <div className='grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3'>
                    <div className='ft-micro'>{hiddenCol == false ? <b><center>10 ANOS</center></b> : <center>10 ANOS</center>}</div>
                    <center className='w-70'>
                        <label className="w-12 h-6 relative">
                            <input onClick={() => provHiddenCol()} type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                            <span className="bg-[#ebedf2] dark:bg-dark block h-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300 "></span>
                        </label>
                    </center>
                    <div className='ft-micro'><center>{hiddenCol == true ? <b>TOTAL</b> : 'TOTAL'}</center></div>
                </div>
                <div className="datatables xl:col-span-5 col-span-5 sm:col-span-5">
                    <DataTable
                        noRecordsText="No results match your search query"
                        highlightOnHover
                        withColumnBorders
                        striped
                        className="whitespace-nowrap table-hover"
                        records={rowData}
                        columns={[
                            {
                                accessor: 'indicador', title: '', width: 250, cellsClassName: 'stickyColumn dark:[mantine-1s8spa1]',
                                render: ({ indicador }) => <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3">
                                    <div className='ft-micro lg:col-span-2 sm:col-span-2 col-span-2'><b>{nomeIndicador(indicador)}</b></div>
                                    <div className='flex justify-end'>
                                        <Tippy trigger="mouseenter focus" content={<span>Sinopse do <strong>INDICADOR</strong></span>}>
                                            <button type="button" data-trigger="mouseenter" className="btn btn-primary rounded-full h-18 p-1 mr-2">
                                                ?
                                            </button>
                                        </Tippy>

                                        <Tippy className='ml-1' trigger="mouseenter focus" content="Gráfico do Indicador">
                                            <button>
                                                <img  onClick={() => showGraphIndicador(indicador)} src="../src/assets/images/graph.svg" height={15} width={15} />
                                            </button>
                                        </Tippy></div>
                                </div>
                            },
                            {
                                accessor: `1`, title: <center><b>ATUAL</b></center>,
                                render: ({ indicador, ano2024 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2024)}</center></div>
                            },
                            {
                                accessor: '2', title: <center><b>{retrocederAnos(1)}</b></center>,
                                render: ({ indicador, ano2023 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2023)}</center></div>
                            },
                            {
                                accessor: '3', title: <center><b>{retrocederAnos(2)}</b></center>,
                                render: ({ indicador, ano2022 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2022)}</center></div>
                            },
                            {
                                accessor: '4', title: <center><b>{retrocederAnos(3)}</b></center>,
                                render: ({ indicador, ano2021 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2021)}</center></div>
                            },
                            {
                                accessor: '5', title: <center><b>{retrocederAnos(4)}</b></center>,
                                render: ({ indicador, ano2020 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2020)}</center></div>
                            },
                            {
                                accessor: '6', title: <center><b>{retrocederAnos(5)}</b></center>,
                                render: ({ indicador, ano2019 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2019)}</center></div>
                            },
                            {
                                accessor: '7', title: <center><b>{retrocederAnos(6)}</b></center>,
                                render: ({ indicador, ano2018 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2018)}</center></div>
                            },
                            {
                                accessor: '8', title: <center><b>{retrocederAnos(7)}</b></center>,
                                render: ({ indicador, ano2017 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2017)}</center></div>
                            },
                            {
                                accessor: '9', title: <center><b>{retrocederAnos(8)}</b></center>,
                                render: ({ indicador, ano2016 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2016)}</center></div>
                            },
                            {
                                accessor: '0', title: <center><b>{retrocederAnos(9)}</b></center>,
                                render: ({ indicador, ano2015 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2015)}</center></div>
                            },
                            {
                                accessor: '10', title: <center><b>{retrocederAnos(10)}</b></center>,
                                render: ({ indicador, ano2014 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2014)}</center></div>
                            },
                            {
                                accessor: '11', title: <center><b>{retrocederAnos(11)}</b></center>, hidden: !hiddenCol,
                                render: ({ indicador, ano2013 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2013)}</center></div>
                            },
                            {
                                accessor: '12', title: <center><b>{retrocederAnos(12)}</b></center>, hidden: !hiddenCol,
                                render: ({ indicador, ano2012 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2012)}</center></div>
                            },
                            {
                                accessor: '13', title: <center><b>{retrocederAnos(13)}</b></center>, hidden: !hiddenCol,
                                render: ({ indicador, ano2011 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2011)}</center></div>
                            },
                            {
                                accessor: '14', title: <center><b>{retrocederAnos(14)}</b></center>, hidden: !hiddenCol,
                                render: ({ indicador, ano2010 }) => <div className='ft-micro'><center>{FormatIndicador(indicador, ano2010)}</center></div>
                            }
                        ]}
                        totalRecords={rowData.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        minHeight={150}
                        height={800}
                    //paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                </div>
            </div>
        </div >
    );
};

export default TabelaDividendos;
