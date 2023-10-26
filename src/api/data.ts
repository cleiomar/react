import db from './db';

export function dados(data: []) { // Recebe 'data' como argumento
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO credentials (Name, Email) VALUES (?, ?)';
  
        db.query(query, [data.Name, data.Email], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}