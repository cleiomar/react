import express from 'express';
import cors from 'cors';
import multer from 'multer';
import routerAtivos  from "./src/data/routes/ativos.route";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use('/', routerAtivos);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});