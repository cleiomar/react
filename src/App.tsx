import { useState } from 'react'
import './App.css'


function App() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schooling, setSchooling] = useState('Médio');
  const [resume, setResume] = useState('');
  
  return (
    <>
      <form>

        <label>
          nome:
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>

        <label>
          Email:
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>

        <label>
          Escolaridade:
          <select value={schooling} onChange={({target}) => setSchooling(target.value)}>
            <option value='Médio'>Médio</option>
            <option value='Superior'>Superior</option>
            <option value='Pós-Graduação'>Pós-Graduação</option>
          </select>
        </label>
        <label>
          Resumo das suas experiencias:
          <textarea
          value={resume}
          onChange={({target}) => setResume(target.value)}          
          />
          
        </label>

      </form>
    </>
  )
}

export default App
