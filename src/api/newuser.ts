import db from './db';
import { format, parse } from 'date-fns';

function converterDataParaAmericano(dataBrasileira: string): string {
    const databr = parse(dataBrasileira, 'dd/MM/yyyy', new Date());
    return format(databr, 'yyyy-MM-dd');
}


export function newUser(data: []) { // Recebe 'data' como argumento
    return new Promise((resolve, reject) => {
        const niver = converterDataParaAmericano(data.birth_date)
        const query = 'INSERT INTO credentials (Name, Email, BirthDate, Plan, Status, Login, Phone, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        //const nascimento = converterDataParaAmericano(data.birth_date);
        db.query(query, [data.full_name, data.email, niver, data.plan, data.status, data.username, data.phone, data.password], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}


export function newConfigUser(id: number) {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO configstodo VALUES (null, ?, '0','0','0','0','0','0','0','0','0','0','0','0')", [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}


export function newConfigSpeedUser(id: number) {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO `configspeed` VALUES (NULL, ?, '1', '1', '1', '1', '1', '1');", [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}
