import db from './db';

export function changestatus(id: number, status: number, todo: string ) {
  return new Promise((resolve, reject) => {
    // Construir a string de consulta dinamicamente
    const query = `UPDATE configstodo SET ${todo}=? WHERE credentials_id=?`;

    // Executar a consulta
    db.query(query, [status, id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}