function bd_connect(){
    var pg = require('pg');
    var cursor = new pg.Client("postgres://postgres:postgres@localhost:5432/SocialNetwork");
    cursor.connect();
    return cursor;
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Есто из кеша
let SSID = uuidv4();
//let SSID = ''


// Получение данных из sessionStorage

//console.log(readCookie('SSID'));

// cursor.query(query, params, (err, res)  => {
//     console.log(err, res.rows[0].login, 123);
//     cursor.end();
// });

let query = "INSERT INTO users(login, password, name, surnam, sex_women, ssid) values($1, $2, 'Хру2', 'жопа2',TRUE, $3) RETURNING *";
//let query = "TRUNCATE users"
let params = ['lux', 'hu2323232i', SSID];
let cursor = bd_connect();
cursor.query(query, params, (err, res)  => {
    //console.log(err, res.rows[0].login, 123);
    cursor.end();
});