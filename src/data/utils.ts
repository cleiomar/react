import { useState } from 'react';

export const useOcultarDados = () => {
  const [ocultarDados, setOcultarDados] = useState<boolean>(false);

  const handleClickOcultarDados = () => {
    setOcultarDados((prevState) => !prevState);
  };

  const renderizarConteudo = (className: string, texto: string) => {
    if (ocultarDados && className === 'sensitivy-field') {
      return texto.replace(/./g, '*'); // Substitui cada letra por um asterisco
    }
    return texto;
  };

  return {
    ocultarDados,
    handleClickOcultarDados,
    renderizarConteudo,
    setOcultarDados,
  };
};