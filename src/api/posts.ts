import db from './db';

export function posts() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM autopost', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}