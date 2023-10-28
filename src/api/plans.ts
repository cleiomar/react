import db from './db';

export function plans() {
  return new Promise((resolve, reject) => {
    db.query('SELECT ID as value, Name as label FROM plans', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}