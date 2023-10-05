import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Data from "./Data";


function App() {
  const [valor, setValor] = useState(1);
  const [imagem, setImagem] = useState('https://a-static.mlcdn.com.br/1500x1500/livro-a-sociedade-do-anel-capa-os-aneis-de-poder/magazineluiza/235381700/435e208634bd6a1344a4065ba0da771c.jpg');

  const [imagemPreview, setImagemPreview] = useState('https://genesisairway.com/wp-content/uploads/2019/05/no-image.jpg');

  const [imagemNext, setImagemNext] = useState('https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg');

  const pegarImagem = (id) => {

    const found = Data.find(obj => {
      return obj.id === id;
    });
    if (id > 10 || id < 1) {
      return "https://genesisairway.com/wp-content/uploads/2019/05/no-image.jpg";
    }
    else {
      return found['image'];
    }
  }


  const handleClickPreview = () => {
    if (valor > 1) {
      setValor(valor - 1)
      setImagem(pegarImagem(valor - 1))
      setImagemPreview(pegarImagem(valor - 2))
      setImagemNext(pegarImagem(valor))
    }
  }

  const handleClickNext = () => {
    if (valor < 10) {
      setValor(valor + 1)
      setImagem(pegarImagem(valor + 1))
      setImagemPreview(pegarImagem(valor))
      setImagemNext(pegarImagem(valor + 2))
    }
  }

  return (

    <>
      <div className='container'>
        <div className='row pt-5 imgCenter'>

          <div className='imagesPreview'>
            <img src={imagemPreview} />
          </div>

          <div className='images'>
            <img src={imagem} />
          </div>

          <div className='imagesNext'>
            <img src={imagemNext} />
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