import db from './db';

export function statusUser() {
  return new Promise((resolve, reject) => {
    db.query('SELECT id as value, Name as label FROM status', (err, results) => {      
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}