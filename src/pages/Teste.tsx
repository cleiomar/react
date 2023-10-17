import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnviarProps: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/InstaUserSettings', { state: { texto: 'Isso é um texto de exemplo' } });
  };

  return (
    <div>
      <h2>Enviar Props</h2>
      <button onClick={handleClick}>Ir para Receber Props</button>
    </div>
  );
};

export default EnviarProps;