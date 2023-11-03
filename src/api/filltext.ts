import db from './db';

export function filltext(type, id) {
  return new Promise((resolve, reject) => {
    db.query('SELECT text FROM configtexts WHERE type = ? AND credentials_id = ?',[type, id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}