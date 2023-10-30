import db from './db';
import { format, parse } from 'date-fns';

function converterDataParaAmericano(dataBrasileira: string): string {
    const databr = parse(dataBrasileira, 'dd/MM/yyyy', new Date());
    return format(databr, 'yyyy-MM-dd');
}

  export function cancelId(id): Promise<any> {
    return new Promise((resolve, reject) => {
      const query =
        'UPDATE credentials SET Status=3 WHERE ID=?';
      db.query(
        query,
        [
          id,
        ],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }