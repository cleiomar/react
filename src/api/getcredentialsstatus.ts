import db from './db';

export function getCredentialsStatus() {
  return new Promise((resolve, reject) => {
    const query = `SELECT
    SUM(CASE WHEN Status = 1 THEN 1 ELSE 0 END) AS active,
    SUM(CASE WHEN Status = 2 THEN 1 ELSE 0 END) AS blocked,
    SUM(CASE WHEN Status = 3 THEN 1 ELSE 0 END) AS canceled
FROM credentials`
    db.query(query, (err, results) => {      
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}