import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';

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

    return (
        <div>
            <div className="datatables">
                <DataTable
                    noRecordsText="No results match your search query"
                    highlightOnHover
                    striped
                    className="whitespace-nowrap table-hover"
                    records={recordsData}
                    columns={[
                        { accessor: 'label', title: 'TIPO', cellsClassName:'stickyColumn',
                        render: ({ label }) => <div className='ft-micro'>{label}</div>},
                        { accessor: 'lastDatePrior', title: 'DATA COM', 
                        render: ({ lastDatePrior }) => <div className='ft-micro'>{lastDatePrior}</div>},
                        { accessor: 'paymentDate', title: 'PAGAMENTO', 
                        render: ({ paymentDate }) => <div className='ft-micro'>{paymentDate}</div>},
                        { accessor: 'rate', title: 'VALOR',
                        render: ({ rate }) => <div className='ft-micro'>{rate}</div>},
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
    );
};

export default TabelaDividendos;
