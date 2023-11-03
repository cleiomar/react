import db from './db';

export function activity(credentials_id:number) {
  return new Promise((resolve, reject) => {
    
      const query = `SELECT activity.*, credentials.Login FROM credentials, activity WHERE credentials.id=activity.credentials_id AND credentials.ID=?`;
    db.query(query, [credentials_id], (err, results) => {
      if (err) {
          reject(err);
      } else {
          resolve(results);
      }
  });
  });
}