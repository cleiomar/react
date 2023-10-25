import express from 'express';
import { realizarConsulta1 } from './src/api/credentials';
import { realizarConsulta2 } from './src/api/users.ts';

const app = express();
const port = 3000;

app.get('/api/credentials', async (req, res) => {
  try {
    const results = await realizarConsulta1();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});


app.get('/api/users', async (req, res) => {
  const limit = req.query.limit || 10; // Pode ser lido dos parâmetros da solicitação

  try {
    const results = await realizarConsulta2(limit);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});