import db from './db';

export function removetext(id: number, type: number, text: string) {
  return new Promise((resolve, reject) => {
      db.query("DELETE FROM configtexts WHERE credentials_id = ? AND type = ? AND text = ?", [id, type, text], (err, results) => {
          if (err) {
              reject(err);
          } else {
              resolve(results);
          };
      });
  });
}