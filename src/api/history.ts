import db from './db';
import { format, parse } from 'date-fns';


export function history(data: []) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO history (credentials_id, profile_name, profile_id, media_id, media_link, preview_img_link, type_action) VALUES (1, 1, 1, 1, 1, 1, 1)';
        db.query(query, (err, results) => {
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


export function create_activity(id: number) {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO `activity` VALUES (NULL, ?, '1', '1', '1', '1', '1', '1', '1', '1');", [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
}
