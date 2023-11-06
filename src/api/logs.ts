import db from './db';

export function logs() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM history', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}