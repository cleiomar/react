import { useState } from 'react'
import './App.css'


function App() {

  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    schooling: 'Médio',
    resume: ''
  });

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formInfo);
    clearForm();
  }

  const clearForm = () => {
    setFormInfo({
      name: '',
      email: '',
      schooling: 'Médio',
      resume: ''
    });
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label>
          nome:
          <input
            value={formInfo.name}
            name='name'
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label>
          Email:
          <input
            value={formInfo.email}            
            name='email'
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label>
          Escolaridade:
          <select value={formInfo.schooling} name='schooling' onChange={handleChange}>
            <option value='Médio'>Médio</option>
            <option value='Superior'>Superior</option>
            <option value='Pós-Graduação'>Pós-Graduação</option>
          </select>
        </label>
        <br></br>

        <label>
          Resumo das suas experiencias:
          <textarea
            value={formInfo.resume}
            name='resume'
            onChange={handleChange}
          />
          <br></br>

        </label>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default App
