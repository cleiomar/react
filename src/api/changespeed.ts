import db from './db';

export function changespeed(id: number, option: number, todo: string ) {
  return new Promise((resolve, reject) => {
    // Construir a string de consulta dinamicamente
    const query = `UPDATE configspeed SET ${todo}=? WHERE credentials_id=?`;

    // Executar a consulta
    db.query(query, [option, id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}