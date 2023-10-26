import express from 'express';
import cors from 'cors';
import { realizarConsulta1 } from './src/api/credentials';
import { credentials } from './src/api/users';
import { newUser } from './src/api/data';
import multer from 'multer';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.get('/api/users', async (req, res) => {
  try {
    const results = await realizarConsulta1();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});


app.get('/api/credentials', async (req, res) => {
  const limit = req.query.limit || 10;

  try {
    const results = await credentials(limit);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.post('/api/new_user', upload.none(), async (req, res) => {
  const data = req.body;
  try {
    const results = await newUser(data);
    res.json({message: 'Cadastrado com Sucesso!', status: 'success'});
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});