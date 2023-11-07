import cron from 'node-cron';

console.log('Cron Iniciado');
cron.schedule('*/1 * * * *', () => {
  const response = fetch('http://localhost:3000/api/insertlog');
});