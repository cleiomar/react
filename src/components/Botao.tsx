type BotaoProps = {
    children: React.ReactNode;
    click: () => void;
}

function Botao({children, click}: BotaoProps) {
    return (
        <>
        <button onClick={click}> {children} </button>
        </>
    )
}

export default Botao;