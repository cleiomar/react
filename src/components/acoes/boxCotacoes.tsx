import IconArrowUp from "../../components/Icon/Menu/IconArrowUp";
import IconArrowDown from "../../components/Icon/Menu/IconArrowDown";

IconArrowDown
interface BoxCotacoesProps {
    posicao: number
    operador: number
    codigo: string
    logo: string
    nome: string
    percentual: number
    valor: number
}

const BoxCotacoes = ({ posicao, operador, codigo, nome, percentual, valor, logo }: BoxCotacoesProps) => {

    return (
        <>
            <div className="h-40 p-0">
                <div className="grid 1xl:grid-cols-12 lg:grid-cols-12 sm:grid-cols-2 grid-cols-1">
                    <div className="xl:col-span-2 pl-1"><img src={logo} height={30} width={30} /></div>
                    <div className="xl:col-span-10 ft-micro"><span><b>{codigo} </b></span><span className="ft-mini">{nome}</span>
                        <div className="">
                            {(operador === 1) ? <IconArrowUp className="float-left mt-1" height="12" /> : <IconArrowDown className="float-left mt-1" height="12" />}

                            <b>{(operador === 0) && ''}{parseFloat(percentual).toFixed(2)}%</b>
                            <div className="float-right mr-2"><b>R${parseFloat(valor).toFixed(2)}</b>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default BoxCotacoes;