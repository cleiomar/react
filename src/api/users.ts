import db from './db';

export function realizarConsulta2(limit: number) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM credentials LIMIT ${limit}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}