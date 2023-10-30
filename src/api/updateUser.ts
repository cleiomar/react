import db from './db';
import { format, parse } from 'date-fns';

function converterDataParaAmericano(dataBrasileira: string): string {
    const databr = parse(dataBrasileira, 'dd/MM/yyyy', new Date());
    return format(databr, 'yyyy-MM-dd');
}
interface UserData {
    full_name: string;
    email: string;
    birth_date: string;
    plan: string;
    username: string;
    phone: string;
    password: string;
    id: number;
  }

  export function updateUser(data: UserData): Promise<any> {
    return new Promise((resolve, reject) => {
      const niver = converterDataParaAmericano(data.birth_date);
      const query =
        'UPDATE credentials SET Name=?, Email=?, BirthDate=?, Plan=?, Login=?, Phone=?, Status=?, Password=? WHERE ID=?';
      db.query(
        query,
        [
          data.full_name,
          data.email,
          niver,
          data.plan,
          data.username,
          data.phone,
          data.status,
          data.password,
          data.id,
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