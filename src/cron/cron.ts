// import cron from 'node-cron';

// console.log('Cron Iniciado');
// cron.schedule('*/1 * * * *', () => {
//   const response = fetch('http://localhost:3000/atualizar_dados_b3');
// });
import * as cron from 'node-cron';
import { exec } from 'child_process';

console.log('Cron Iniciado');

// cron.schedule('*/1 * * * *', () => {
  cron.schedule('0 11 * * *', () => {
    const response = exec(`node D:/node/indicadores.js`);
    console.log('Tarefa Indicadores executada');
  });

  cron.schedule('5 11 * * *', () => {
    const response2 = exec(`tsx watch ./src/cron/adicionar_historico_cliente.ts`);
    console.log('Tarefa Adicionar Historico Clientes executada');
  });

  cron.schedule('10 11 * * *', () => {
    const response3 = exec(`tsx watch ./src/cron/adicionar_historico.ts`);
    console.log('Tarefa Adicionar Historico executada');
  });

  cron.schedule('15 11 * * *', () => {
    const response4 = exec(`tsx watch ./src/cron/b3.ts`);
    console.log('Tarefa Atualizar Preços B3 executada');
  });

  
  cron.schedule('0 16 * * *', () => {
    const response2 = exec(`tsx watch ./src/cron/adicionar_historico_cliente.ts`);
    const response3 = exec(`tsx watch ./src/cron/adicionar_historico.ts`);
    console.log('Tarefa Adicionar Historico executada');
  });

  
  cron.schedule('0 16 * * *', () => {
    const response4 = exec(`tsx watch ./src/cron/b3.ts`);
    console.log('Tarefa Atualizar Preços B3 executada');
  });

  cron.schedule('20 11 * * *', () => {
    const response5 = exec(`node D:/node/ibov.js`);
    console.log('Tarefa Atualizar IBOV executada');
  });

  cron.schedule('21 11 * * *', () => {
    const response6 = exec(`node D:/node/update_stocks.js`);
    const response7 = exec(`node D:/node/update_currency.js`);
    const response9 = exec(`node D:/node/update_cripto.js`);
    console.log('Tarefa Stocks, Currency e Cripto executada');
  });

  cron.schedule('25 11 * * *', () => {
    const response10 = exec(`node D:/node/tesouro.js`);
    console.log('Tarefa Tesouro executada');
  });
  
  cron.schedule('5 23 * * *', () => {
    const response2 = exec(`tsx watch ./src/cron/adicionar_historico_cliente.ts`);
    const response3 = exec(`tsx watch ./src/cron/adicionar_historico.ts`);
    console.log('Tarefa Adicionar Historico executada');
  });
  
  cron.schedule('6 23 * * *', () => {
    const response4 = exec(`tsx watch ./src/cron/b3.ts`);
    console.log('Tarefa Atualizar Preços B3 executada');
  });

  // cron.schedule('*/30 * * * * *', () => {
  //   const response = exec(`node D:/node/update_cotacoes.js`);
  //   console.log('Tarefa Dados B3 executada');
  // });
