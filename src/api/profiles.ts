import db from './db';

export function profiles(userid:number) {
  return new Promise((resolve, reject) => {
    
      const query = `SELECT credentials.Login, credentials.ID FROM credentials WHERE credentials.user_id=?`;
    db.query(query, [userid], (err, results) => {
      if (err) {
          reject(err);
      } else {
          resolve(results);
      }
  });
  });
}