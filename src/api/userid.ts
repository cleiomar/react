import db from './db';

export function userid(id:number) {
  return new Promise((resolve, reject) => {
    
      const query = `SELECT credentials.ID as id, credentials.Name as full_name, credentials.Login as username, credentials.Email as email, credentials.Phone as phone, credentials.BirthDate as birth_date, plans.Name as plan, plans.ID as planid, credentials.Status as statusid, status.Name as status FROM credentials, plans, status WHERE status.id=credentials.Status AND credentials.Plan=plans.ID AND credentials.ID=?`;
    db.query(query, [id], (err, results) => {
      if (err) {
          reject(err);
      } else {
          resolve(results);
      }
  });
  });
}