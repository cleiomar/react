interface boxAcaoInfoProps {
    nome: string;
    valor: string;
}
const BoxAcaoInfo = ({nome, valor}: boxAcaoInfoProps) => {
    return(
        <>
        <center><div>
        <div className="subtitulo-valor4 pb-4">{nome}</div>
        <div className="titulo-page pb-4">{valor}</div>
        </div></center>
        </>
    )
}

export default BoxAcaoInfo;