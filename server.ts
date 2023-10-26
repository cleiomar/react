import express from 'express';
import cors from 'cors';
import { realizarConsulta1 } from './src/api/credentials';
import { credentials } from './src/api/users';
import { dados } from './src/api/data';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/users', async (req, res) => {
  try {
    const results = await realizarConsulta1();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});


app.get('/api/credentials', async (req, res) => {
  const limit = req.query.limit || 10; // Pode ser lido dos parâmetros da solicitação

  try {
    const results = await credentials(limit);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});


app.post('/api/dados', async (req, res) => {
  const data = req.body;
  console.log(data);
  /*try {
    const results = await dados(data); // Passar os dados para a função 'dados'
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }*/
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});