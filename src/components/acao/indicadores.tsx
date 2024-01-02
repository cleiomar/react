import Tippy from "@tippyjs/react";
import Swal from 'sweetalert2';

interface IndicadoresProps {
    indicador: string;
    info: string;
}
const Indicadores = ({ indicador, info }: IndicadoresProps) => {

    const showIndicador = async (data: string) => {
        Swal.fire({
            title: "<strong>Dividend Yield</u></strong>",
            html: `
            <div class='ft-micro ft-black text-justify' style='text-indent:25px;'>O dividend yield, ou rendimento de dividendos, é uma métrica financeira que expressa a relação entre os dividendos pagos por uma empresa e o preço de suas ações. Ele é calculado como a porcentagem do dividendo anual em relação ao preço atual da ação. Em termos simples, o dividend yield fornece aos investidores uma medida do retorno de seus investimentos em dividendos em relação ao preço atual das ações.

            A fórmula básica para calcular o dividend yield é:
            <br><br>
            <img src='../src/assets/images/formulas/dy.png'>            
            <br><br>
            O dividend yield é utilizado por investidores para avaliar o potencial retorno de investimento em dividendos, sendo uma ferramenta importante para quem busca renda estável. Um dividend yield mais alto pode indicar que uma empresa está distribuindo uma proporção maior de seus lucros aos acionistas, enquanto um yield mais baixo pode sugerir o contrário.
            
            É importante ressaltar que o dividend yield sozinho não é uma medida completa da qualidade de um investimento, e outros fatores, como a saúde financeira da empresa e seu histórico de dividendos, devem ser considerados ao avaliar a atratividade de um investimento.</div>
            `,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: `
              OK
            `
          });
      }

    return (
        
            <>
            <li className="px-4 py-1 mt-5 border dark:shadow-dark p-5"><div>
                <div className="p-5">
                    <div><b>{indicador}</b>
                    <Tippy trigger="mouseenter focus" content="Indicador">
                        <button type="button" data-trigger="mouseenter" onClick={() => showIndicador()} className="btn btn-primary rounded-full h-18 p-1 float-right">
                            ?
                        </button>
                    </Tippy></div>
                    <div className="flex justify-between mt-3">
                        <div>{info}</div>
                        <Tippy trigger="mouseenter focus" content="Gráfico do Indicador">
                            <img src="../src/assets/images/graph.svg" height={20} width={20} />
                        </Tippy>
                    </div>
                </div>
            </div>
            </li>
            </>
    )
}

export default Indicadores;