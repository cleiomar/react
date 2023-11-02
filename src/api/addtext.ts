import db from './db';

export function addtext(id: number, type: number, text: string) {
  return new Promise((resolve, reject) => {
      db.query("INSERT IGNORE INTO configtexts (credentials_id, type, text) SELECT ?, ?, ? FROM DUAL WHERE NOT EXISTS( SELECT 1 FROM configtexts WHERE credentials_id = ? AND type = ? AND text = ? )", [id, type, text, id, type, text], (err, results) => {
          if (err) {
              reject(err);
          } else {
              resolve(results);
          };
      });
  });
}