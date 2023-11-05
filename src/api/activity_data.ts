import db from './db';

export function activity(credentials_id:number) {
  return new Promise((resolve, reject) => {
    
      const query = `SELECT activity.*, credentials.Login, configstodo.Status FROM credentials, activity, configstodo WHERE credentials.ID=configstodo.credentials_id AND credentials.id=activity.credentials_id AND credentials.ID=?`;
    db.query(query, [credentials_id], (err, results) => {
      if (err) {
          reject(err);
      } else {
          resolve(results);
      }
  });
  });
}