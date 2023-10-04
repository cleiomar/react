import { useState } from 'react'
import './App.css'

function App() {


  const [valor, setValor] = useState(0);

  const handleClickPreview = () => {
    if (valor > 0) {
      setValor(valor - 1)
    }
  }

  const handleClickNext = () => {
    if (valor < 10) {
      setValor(valor + 1)
    }
  }

  return (
    <>
      <div className='container'>
      <div className='row'>
          <div className='col-md-4'>
            Teste
          </div>
          <div>
            <button onClick={handleClickPreview}>-</button>
            <span> {valor} </span>
            <button onClick={handleClickNext}>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App