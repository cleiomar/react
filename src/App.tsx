import { useState } from 'react';
import './App.css'

function App() {


  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [index, setIndex] = useState(0);
  const [list, setList] = useState(toolKit);
  const [inputValue, setInputValue] = useState('');

  const handlePreviewClick = () => {
    if(index-1 >= 0)
    {
      setIndex(index-1)
    }
    else{
      setIndex(list.length-1)
    }
  }

  const handleNextClick = () => {
    if(index+1 < list.length){
      setIndex(index+1)
    }
    else{
      setIndex(0)
    }
  }

  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if(inputValue){
      setList([inputValue, ...list]);
      clear();
    }
  }

  const clear = () => {
    setInputValue('');
  }
  

  return (
    <>
    <h1>Caixa de Ferramentas de uma pessoa desenvolvedora</h1>
    <h2> {list[index]} </h2>
    <button onClick={handlePreviewClick}>Preview</button>
    <button onClick={handleNextClick}>Next</button>
    <br></br>
    <h3>Adicione novas ferramentas</h3>
    <input value={inputValue} onChange={({target}) => setInputValue(target.value)} />
    <button onClick={(event) => handleAddClick(event)}> Adicionar </button>
    <br></br>
    <h3>Lista do Carousel</h3>
    <ul>
      {
        list.length > 0 ? (
          list.map((e) => (
            <li key={e}>{e}</li>
          ))
        ) : (
          <span>Não existe ferramentas.</span>
        )
      }
    </ul>
    </>
  )
}

export default App
