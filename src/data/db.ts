import express from "express";
import cors from "cors";
import routerAtivos from "./routes/ativos.route";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/', routerAtivos);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
export default app;