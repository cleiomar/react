import { useState, useEffect } from 'react';
import { capitalizeLetters, formatCurrency2, removeTrailingZeros } from '../../data/funcoes';
import globalVars from '../../data/global';


interface BoxCategoriaProps {
    css: string;
    nome: string;
    quantidade: number;
    valor: number;
}
const BoxCategoria = ({ css, nome, quantidade, valor }: BoxCategoriaProps) => {

    const [ocultarDados, setOcultarDados] = useState<boolean>(globalVars.getVariable1());

    const renderizarConteudo = (className: string, texto: string) => {
        if (ocultarDados && className === 'sensitivy-field') {
            return texto.replace(/./g, '*'); // Substitui cada letra por um asterisco
        }
        return texto;
    };

    useEffect(() => {
        const handleVariable1Change = () => {
          setOcultarDados((prevState) => !prevState);
        };
        globalVars.addListener(handleVariable1Change);
        return () => {
          globalVars.removeListener(handleVariable1Change);
        };
      }, []);

    return (
        <>
            <div className={`${css} float-left`} style={{ height: '80px' }}></div><div className='ml-5 subtitulo-valor3'>{capitalizeLetters(nome)}</div>
            <div className='text-left pl-5 pt-1'>Quantidade de Ativos: <b>{quantidade}</b></div>
            <div className='text-left pl-5 pt-1'>Valor Investido: <b>{renderizarConteudo('sensitivy-field', formatCurrency2(valor,1))}</b></div>
        </>
    )
}

export default BoxCategoria;