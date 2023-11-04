import cron from 'node-cron';

console.log('Cron Iniciado');
cron.schedule('*/1 14 * * *', () => {
  console.log('Ação automática executada às 14:00 todos os dias.');
});