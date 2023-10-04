import { useState } from 'react'
import './App.css'

function App() {


  const [valor, setValor] = useState(0);
  const [nome, setNome] = useState('');

  const handleClickPreview = () => {
    if(valor > 0)
    {
      setValor(valor-1)
    }
  }

  const handleClickNext = () => {
    if(valor < 10)
    {
      setValor(valor+1)
    }
  }

  /*const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    const {target} = event
    setNome(target.value)
  }*/

  return (
    <>
        {/*<button onClick={() => setValor(valor-1)}>-</button>
        <span> {valor} </span>
        <button onClick={() => setValor(valor+1)}>+</button><br></br>*/}
        <button onClick={handleClickPreview}>-</button>
        <span> {valor} </span>
        <button onClick={handleClickNext}>+</button><br></br>
        <input
          value={nome}
          onChange={({target}) => setNome(target.value)}
        />
        <span> {nome} </span>

    </>
  )
}

export default App
