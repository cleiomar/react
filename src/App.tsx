import { useState } from 'react'
import './App.css'


function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schooling, setSchooling] = useState('Médio');
  const [resume, setResume] = useState('');

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Feito com sucesso!');
    clearForm();
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setSchooling('Médio');
    setResume('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label>
          nome:
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <br></br>

        <label>
          Email:
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <br></br>

        <label>
          Escolaridade:
          <select value={schooling} onChange={({ target }) => setSchooling(target.value)}>
            <option value='Médio'>Médio</option>
            <option value='Superior'>Superior</option>
            <option value='Pós-Graduação'>Pós-Graduação</option>
          </select>
        </label>
        <br></br>

        <label>
          Resumo das suas experiencias:
          <textarea
            value={resume}
            onChange={({ target }) => setResume(target.value)}
          />
          <br></br>

        </label>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default App
