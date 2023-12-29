interface boxTopAcaoProps {
    nome: string;
    valor: string;
    subtitulo: string;
    valor2: string;
}

const BoxTopAcao = ({nome, valor, valor2, subtitulo}: boxTopAcaoProps) => {
    return(
        <>
        <center><div>
        <div className="subtitulo-valor4">{nome}</div>
        <div className="titulo-page pb-3">{valor}</div>
        <div className="ft-micro"><span><b>{subtitulo}</b></span><br></br>{valor2}</div>
        </div></center>
        </>
    )
}

export default BoxTopAcao;