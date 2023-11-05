import db from './db';

export function changeStatusActivity(id: number, status: number) {
  return new Promise((resolve, reject) => {
    // Construir a string de consulta dinamicamente
    const query = `UPDATE configstodo SET Status=? WHERE ID=?`;

    // Executar a consulta
    db.query(query, [status, id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve({success: true});
      }
    });
  });
}