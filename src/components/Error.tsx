import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1); // Navegar para trás no histórico
      };
    
  return (
    <div className="App">
      <div className="centered-div">
        <div className='text-lg pb-10'> Error 404 - Page not found</div><img src="/assets/images/logo.svg" height="200px" width="200px" alt="Minha Imagem" /><div className='pt-10'><button onClick={back}>Back to last page</button></div>
      </div>
    </div>
  );
}

export default Error;