import db from './db';

export function credentials() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM credentials LIMIT 10', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}