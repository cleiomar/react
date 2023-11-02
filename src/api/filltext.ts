import db from './db';

export function filltext() {
  return new Promise((resolve, reject) => {
    db.query('SELECT text FROM configtexts WHERE credentials_id=1', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}