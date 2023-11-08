import { Console } from 'console';
import db from './db';

export function logs(type, profiles, limit) {
  let values = '';
  return new Promise((resolve, reject) => {
    if (profiles != null && profiles != undefined && profiles != '') {
      values = `AND credentials_id IN (${profiles})`; // Converte o array em uma string separada por vírgulas
    }
    else
    {
      values = '';
    }
    
    db.query(`SELECT * FROM history WHERE type_action LIKE CONCAT('%', ?, '%') ${values} ORDER BY data_time DESC LIMIT ${limit},24 `, [type], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}


export function totallogs(type, profiles) {
  let values = '';
  return new Promise((resolve, reject) => {
    if (profiles != null && profiles != undefined && profiles != '') {
      values = `AND credentials_id IN (${profiles})`; // Converte o array em uma string separada por vírgulas
    }
    else
    {
      values = '';
    }
    
    db.query(`SELECT * FROM history WHERE type_action LIKE CONCAT('%', ?, '%') ${values} ORDER BY data_time DESC`, [type], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}