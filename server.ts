import express from 'express';
import cors from 'cors';
import { credentials } from './src/api/credentials';
import { users } from './src/api/users';
import { userid } from './src/api/userid';
import { cancelId } from './src/api/cancelid';
import { statusUser } from './src/api/status';
import { newUser } from './src/api/newuser';
import { updateUser } from './src/api/updateUser';
import { plans } from './src/api/plans';
import multer from 'multer';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.get('/api/users', async (req, res) => {
  const limit: number = req.query.limit || 10;

  try {
    const results = await users(limit);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.get('/api/userid', async (req, res) => {
  const id = req.query.id;
  try {
    const results = await userid(id);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.get('/api/cancelid', async (req, res) => {
  const id = req.query.id;
  try {
    const results = await cancelId(id);
    if (results.affectedRows === 1) {
      res.json({ message: 'User has been canceled', status: 'success' });
    } else {
      res.status(500).json({ message: 'Error User Couldn`t has been canceled', status: 'error' });
    }
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

app.get('/api/plans', async (req, res) => {
  const limit = req.query.limit || 10;

  try {
    const results = await plans(limit);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.get('/api/status', async (req, res) => {
  const limit = req.query.limit || 10;
  try {
    const results = await statusUser();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.post('/api/new_user', upload.none(), async (req, res) => {
  const data = req.body;
  try {
    const results = await newUser(data);
    res.json({ message: 'Cadastrado com Sucesso!', status: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.post('/api/update_user', upload.none(), async (req, res) => {
  const data = req.body;
  try {
    const results = await updateUser(data);
    res.json({ message: 'Alterado com Sucesso!', status: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});