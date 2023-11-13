import db from './db';

export function profiles(userid:number, profile: string) {
  return new Promise((resolve, reject) => {
      const query = `SELECT credentials.Login, credentials.ID FROM credentials WHERE credentials.user_id=? AND credentials.Login LIKE ?`;
      profile = `%${profile}%`;
      db.query(query, [userid, profile], (err, results) => {
      if (err) {
          reject(err);
      } else {
          resolve(results);
      }
  });
  });
}