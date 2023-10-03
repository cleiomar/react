import './App.css'
import Botao from './components/Botao';

function App() {

  const handleClick = () => {
    alert('Clicou');
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  const handleClick2 = (text: string) => {
    alert(text);
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Click Aqui</button>
        <button onClick={() => alert('Testando...')}>Click Aqui 2</button>
        <button onClick={() => handleClick2('Flamengo')}>Botão 01</button>
      </div>
      <div>

        <Botao
          click={() => handleClick2('Flamengo')}
        >
          <strong>Alberto</strong>
        </Botao>

        <Botao
          click={() => handleClick2('São Paulo')}
        >
          <strong>Cleiomar</strong>
        </Botao>
      </div>
      <div>
        <input 
          onChange={(event) => handleChange(event)}
        />
        
        <input 
          onChange={({target}) => console.log(target.value)}
        />
      </div>
    </>
  )
}

export default App
