// import cron from 'node-cron';

// console.log('Cron Iniciado');
// cron.schedule('*/1 * * * *', () => {
//   const response = fetch('http://localhost:3000/atualizar_dados_b3');
// });
import * as cron from 'node-cron';
import { exec } from 'child_process';

console.log('Cron Iniciado');

cron.schedule('*/1 * * * *', () => {
  const response = exec(`node D:/node/update_cotacoes.js`); // Certifique-se de ajustar o caminho do arquivo compilado
  console.log('Tarefa cron executada');
});