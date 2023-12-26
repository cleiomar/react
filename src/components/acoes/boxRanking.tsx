interface BoxRankingProps {
    posicao: number
}

const BoxRanking = ({ posicao }: BoxRankingProps) => {

    return (
        <>
            <div className="h-40 p-0">
                <div className="grid 1xl:grid-cols-10 lg:grid-cols-10 sm:grid-cols-2 grid-cols-1">
                    <div className="xl:col-span-2 pl-1"><img src="https://s3-symbol-logo.tradingview.com/banco-do-brasil--big.svg" height={30} width={30} /></div>
                    <div className="xl:col-span-6 ft-micro"><b>BBAS3</b><div className="ft-micro">Banco do Brasil</div></div>
                    <div className="xl:col-span-2 mt-3 mr-2 text-end"><b>{posicao}</b></div>
                </div>
            </div>
        </>
    )

}

export default BoxRanking;