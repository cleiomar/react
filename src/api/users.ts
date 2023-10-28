import db from './db';

export function users(limit: number) {
  return new Promise((resolve, reject) => {
    //db.query(`SELECT * FROM credentials LIMIT ${limit}`, (err, results) => {      
    db.query(`SELECT credentials.ID as id, credentials.Name, credentials.Login, credentials.Email, credentials.Phone, credentials.BirthDate, plans.Name as Plan, credentials.NextBilling, credentials.Status FROM credentials, plans WHERE credentials.Plan=plans.ID`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}