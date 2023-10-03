type BotaoProps = {
    children: React.ReactNode;
    click: () => void;
    tipo: string;
}

function Botao({children, click, tipo}: BotaoProps) {
    return (
        <>
        <button onClick={click} className={tipo}> {children} </button>
        </>
    )
}

export default Botao;