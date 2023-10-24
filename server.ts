import express, { Request, Response } from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors()); // Permitir requisições CORS

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '12345678',
  database: 'service',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ' + err.message);
  } else {
    console.log('Conexão ao MySQL estabelecida.');
  }
});

app.get('/users', (req: Request, res: Response) => {
  const query = 'SELECT ID, Login FROM credentials LIMIT 30';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro na consulta: ' + err.message);
      res.status(500).json({ error: 'Erro na consulta.' });
      return;
    }

    // Verificar se results é um array
    if (Array.isArray(results)) {
      // Se for um array, podemos usar map
      const usersData = results.map((user: any) => {
        return {
          ID: user.ID, // Adiciona o campo user.ID
          Login: user.Login,
        };
      });
      res.json(usersData);
    } else {
      // Se não for um array, responder com um erro ou manipular de outra forma
      console.error('Resultado da consulta não é um array.');
      res.status(500).json({ error: 'Resultado da consulta não é um array.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});