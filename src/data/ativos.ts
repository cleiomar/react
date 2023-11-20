import db from './db';

export function users(limit: number) {
  return new Promise((resolve, reject) => {     
    db.query(`SELECT * FROM ativos`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}