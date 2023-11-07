import db from './db';

export function logs(type) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM history WHERE type_action LIKE CONCAT('%', ?, '%') ORDER BY data_time DESC`, [type], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}