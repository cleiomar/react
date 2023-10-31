import db from './db';

export function todoconfig(id:number) {
  return new Promise((resolve, reject) => {
    
      const query = `SELECT * FROM configstodo WHERE credentials_id=?`;
    db.query(query, [id], (err, results) => {
      if (err) {
          reject(err);
      } else {
          resolve(results);
      }
  });
  });
}