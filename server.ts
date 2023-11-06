import express from 'express';
import cors from 'cors';
import { credentials } from './src/api/credentials';
import { users } from './src/api/users';
import { userid } from './src/api/userid';
import { cancelId } from './src/api/cancelid';
import { statusUser } from './src/api/status';
import { newUser, newConfigUser, newConfigSpeedUser, create_activity } from './src/api/newuser';
import { updateUser } from './src/api/updateUser';
import { plans } from './src/api/plans';
import { todoconfig } from './src/api/todo';
import { changespeed } from './src/api/changespeed';
import { configspeed } from './src/api/configspeed';
import { addtext } from './src/api/addtext';
import { removetext } from './src/api/removetext';
import { changestatus } from './src/api/changestatus';
import { filltext } from './src/api/filltext';
import { profiles } from './src/api/profiles';
import { activity } from './src/api/activity_data';
import { history } from './src/api/history';
import { monthlyhistory } from './src/api/monthlyhistory';
import { changeStatusActivity } from './src/api/change_status_activity';
import { getCredentialsStatus } from './src/api/getcredentialsstatus';
import { logs } from './src/api/logs';
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

app.get('/api/activity_data', async (req, res) => {
  const id = req.query.id;
  try {
    const results = await activity(id);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});


app.get('/api/activity_profiles', async (req, res) => {
  const id = req.query.id;
  try {
    const results = await profiles(id);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.get('/api/changestatus', async (req, res) => {
  const id = req.query.id;
  const status = req.query.status;
  const todo = req.query.todo;
  try {
    const results = await changestatus(id, status, todo);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.get('/api/newstatus', async (req, res) => {
  const id = req.query.id;
  const status = req.query.status;
  try {
    const results = await changeStatusActivity(id, status);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.get('/api/changespeed', async (req, res) => {
  const id = req.query.id;
  const option = req.query.option;
  const todo = req.query.todo;
  try {
    const results = await changespeed(id, option, todo);
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

app.get('/api/logs', async (req, res) => {
  const profile = req.query.limit;

  try {
    const results = await logs(profile);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});


app.get('/api/getcredentialsstatus', async (req, res) => {

  try {
    const results = await getCredentialsStatus();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.get('/api/todoconfig', async (req, res) => {
  const id = req.query.id;
  try {
    const results = await todoconfig(id);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});

app.get('/api/configspeed', async (req, res) => {
  const id = req.query.id;
  try {
    const results = await configspeed(id);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});


app.post('/api/removetext', upload.none(), async (req, res) => {
  const id = req.body.credentials_id;
  const type = req.body.type;
  const text = req.body.text;
  try {
    const result = await removetext(id, type, text);
    res.json({ message: 'Removido com Sucesso!', status: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});


app.post('/api/addtext', upload.none(), async (req, res) => {
  const id = req.body.credentials_id;
  const type = req.body.type;
  const text = req.body.text;
  try {
    const result = await addtext(id, type, text);
    res.json({ message: 'Adicionado com Sucesso!', status: 'success' });
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

app.get('/api/filltext', async (req, res) => {
try {
  const type = req.query.type;
  const id = req.query.id;
  const results = await filltext(type, id);
  res.json(results);
} catch (error) {
  res.status(500).json({ error: 'Erro na consulta 1' });
}
});

app.post('/api/new_user', upload.none(), async (req, res) => {
  const data = req.body;
  try {
    const result = await newUser(data);
    const result2 = await newConfigUser(result.insertId);
    const result3 = await newConfigSpeedUser(result.insertId);
    const result4 = await create_activity(result.insertId);
    res.json({ message: 'Cadastrado com Sucesso!', status: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});


app.get('/api/history', async (req, res) => {
  const data = req.query;
  try {
    const result = await history(data);
    res.json({ message: 'Registro adicionado com Sucesso!', status: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta 1' });
  }
});


app.get('/api/monthlyhistory', async (req, res) => {
  const data = req.query;
  try {
    const results = await monthlyhistory(data);
    res.json(results);
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