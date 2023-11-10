import db from './db';
import { format, parse } from 'date-fns';

function formatData(data) {

    var date = new Date(data);

    // Extraia os componentes da data e hora
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adicione 1 ao mês, pois os meses são baseados em zero
    var day = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}


function toJSON(value) {
    const valores = value.split(",");

    const json = JSON.stringify(valores);

    return json;
}

export function insertPost(text, medias, mentions, music, schedule_time, localization, type) {
    let id = 1;
    schedule_time = formatData(schedule_time);
    mentions = toJSON(mentions);

    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO autopost (credentials_id, text, medias, mentions, music, schedule_time, localization, type) VALUES (? ,? ,? ,? ,? ,? ,? ,?)';
        db.query(query, [id, text, medias, mentions, music, schedule_time, localization, type], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}