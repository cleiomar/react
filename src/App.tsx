import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Data from "./Data";


function App() {
  const [valor, setValor] = useState(1);
  const [imagem, setImagem] = useState('https://a-static.mlcdn.com.br/1500x1500/livro-a-sociedade-do-anel-capa-os-aneis-de-poder/magazineluiza/235381700/435e208634bd6a1344a4065ba0da771c.jpg');

  const pegarImagem = (id) => {

    const found = Data.find(obj => {
      return obj.id === id;
    });
    return found['image'];
  }
  
  
  const handleClickPreview = () => {
    if (valor > 1) {
      setValor(valor - 1)
      setImagem(pegarImagem(valor-1))
    }
  }

  const handleClickNext = () => {
    if (valor < 10) {
      setValor(valor + 1)
      setImagem(pegarImagem(valor+1))
    }
  }

  return (
    
    <>
      <div className='container'>
        <div className='row pt-5 imgCenter'>
          <div className='images'>
          <img src={imagem} />

          </div>
        </div>
        <div className='row pt-5'>
          <div className='buttonClick'>
            <button className='btn btn-primary btn-qnt' onClick={handleClickPreview}>Preview</button>
            <span className='span-qnt'> {valor} </span>
            <button className='btn btn-primary btn-qnt' onClick={handleClickNext}>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App