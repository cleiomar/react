import * as cron from 'node-cron';
import { exec } from 'child_process';

console.log('Cron Iniciado');

// cron.schedule('*/30 * * * * *', () => {
//   const response = exec(`tsx watch ./src/cron/dados_b3.ts`);
//   console.log('Tarefa Drawdown executada');
// });

// cron.schedule('*/30 * * * * *', () => {
//   const response = exec(`node D:/node/comunicados_acoes_b3.js`);
//   console.log('Tarefa Comunicados executada');
// });

// cron.schedule('*/5 * * * * *', () => {
//   const response = exec(`node D:/node/cnpj_fuii.js`);
//   console.log('Tarefa Cadastra CNPJ FII executada');
// });

// cron.schedule('*/10 * * * * *', () => {
//   const response = exec(`node D:/node/comunicados_fii_b3.js`);
//   console.log('Tarefa Comunicados FII executada');
// });



cron.schedule('*/10 * * * * *', () => {
  const response = exec(`node D:/node/comunicados_fii2_b3.js`);
  console.log('Tarefa Informes FII executada');
});

// cron.schedule('*/10 * * * * *', () => {
//   const response = exec(`node D:/node/drawdown.js`);
//   console.log('Tarefa Drawdown executada');
// });
