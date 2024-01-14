import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { retrocederAnos } from '../../data/funcoes';
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
interface TabelaDividendosProps {
    rowData: Array<any>;
}

const TabelaDividendos = ({ rowData }: TabelaDividendosProps) => {
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [recordsData, setRecordsData] = useState(rowData.slice(0, pageSize));

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
                    <div className='ft-micro'>{hiddenCol == false ? <b><center>5 ANOS</center></b> : <center>5 ANOS</center>}</div>
                    <center className='w-70'>
                        <label className="w-12 h-6 relative">
                            <input onClick={() => provHiddenCol()} type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                            <span className="bg-[#ebedf2] dark:bg-dark block h-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300 "></span>
                        </label>
                    </center>
                    <div className='ft-micro'><center>{hiddenCol == true ? <b>10 ANOS</b> : '10 ANOS'}</center></div>
                </div>
                <div className="datatables xl:col-span-5 col-span-5 sm:col-span-5">
                    <DataTable
                        noRecordsText="No results match your search query"
                        highlightOnHover
                        withColumnBorders
                        striped
                        className="whitespace-nowrap table-hover"
                        records={recordsData}
                        columns={[
                            {
                                accessor: 'label', title: '', width: 170, cellsClassName: 'stickyColumn dark:[mantine-1s8spa1]',
                                render: ({ label }) => <div className="grid 1xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3">
                                    <div className='ft-micro lg:col-span-2 sm:col-span-2 col-span-2'>{label}</div>
                                    <div className='flex justify-end'>
                                        <Tippy trigger="mouseenter focus" content={<span>Sinopse do <strong>INDICADOR</strong></span>}>
                                            <button type="button" data-trigger="mouseenter" className="btn btn-primary rounded-full h-18 p-1 mr-2">
                                                ?
                                            </button>
                                        </Tippy>
                                        
                                        <Tippy className='ml-1' trigger="mouseenter focus" content="Gráfico do Indicador">
                                            <img className='' src="../src/assets/images/graph.svg" height={15} width={15} />
                                        </Tippy></div>
                                </div>
                            },
                {
                    accessor: 'lastDatePrior', title: <center>{retrocederAnos(0)}</center>,
                render: ({lastDatePrior}) => <div className='ft-micro'><center>{lastDatePrior}</center></div>
                            },
                {
                    accessor: 'paymentDate1', title: <center>{retrocederAnos(1)}</center>,
                render: ({paymentDate}) => <div className='ft-micro'><center>{paymentDate}</center></div>
                            },
                {
                    accessor: 'paymentDate2', title: <center>{retrocederAnos(2)}</center>,
                render: ({paymentDate}) => <div className='ft-micro'><center>{paymentDate}</center></div>
                            },
                {
                    accessor: 'paymentDate3', title: <center>{retrocederAnos(3)}</center>,
                render: ({paymentDate}) => <div className='ft-micro'><center>{paymentDate}</center></div>
                            },
                {
                    accessor: 'paymentDate4', title: <center>{retrocederAnos(4)}</center>,
                render: ({paymentDate}) => <div className='ft-micro'><center>{paymentDate}</center></div>
                            },
                {
                    accessor: 'paymentDate5', title: <center>{retrocederAnos(5)}</center>,
                render: ({paymentDate}) => <div className='ft-micro'><center>{paymentDate}</center></div>
                            },
                {
                    accessor: 'paymentDate6', title: <center>{retrocederAnos(6)}</center>, hidden: !hiddenCol,
                render: ({paymentDate}) => <div className='ft-micro'><center>{paymentDate}</center></div>
                            },
                {
                    accessor: 'paymentDate7', title: <center>{retrocederAnos(7)}</center>, hidden: !hiddenCol,
                render: ({paymentDate}) => <div className='ft-micro'><center>{paymentDate}</center></div>
                            },
                {
                    accessor: 'paymentDate8', title: <center>{retrocederAnos(8)}</center>, hidden: !hiddenCol,
                render: ({paymentDate}) => <div className='ft-micro'><center>{paymentDate}</center></div>
                            },
                {
                    accessor: 'paymentDate9', title: <center>{retrocederAnos(9)}</center>, hidden: !hiddenCol,
                render: ({paymentDate}) => <div className='ft-micro'>{paymentDate}</div>
                            },
                {
                    accessor: 'paymentDate10', title: <center>{retrocederAnos(10)}</center>, hidden: !hiddenCol,
                render: ({paymentDate}) => <div className='ft-micro'>{paymentDate}</div>
                            }
                        ]}
                totalRecords={rowData.length}
                recordsPerPage={pageSize}
                page={page}
                onPageChange={(p) => setPage(p)}
                recordsPerPageOptions={PAGE_SIZES}
                onRecordsPerPageChange={setPageSize}
                minHeight={150}
                height={500}
                    //paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
            </div>
        </div>
        </div >
    );
};

export default TabelaDividendos;
