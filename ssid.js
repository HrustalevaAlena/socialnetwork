function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function bd_connect(){
    var pg = require('pg');
    var cursor = new pg.Client("postgres://postgres:postgres@localhost:5432/SocialNetwork");
    cursor.connect();
    return cursor;
}

//let SSID =  localStorage.getItem('SSID')
// let SSID =  '70a9696b-9670-43b2-9c56-ad1b1f91baf0';
// let cursor = bd_connect();

// if(SSID){
//     cursor.query("SELECT TRUE FROM users WHERE ssid = $1", [SSID], (err, res)  => {
//         cursor.end();
//         if(res.rows.length == 0){
//             // localStorage.setItem('SSID', null);
//             console.log("ничго нет, идем на авторизацию..");
//         }
//     });
// }else if(мы не на авторизации){console.log("идем на авторизацию..");}


// Авторизация
// let SSID = uuidv4();
// let cursor = bd_connect();
// let query = `
//     UPDATE
//         users
//     SET
//         ssid = $3::uuid
//     WHERE
//         password = $2::text
//         AND
//         login =  $1::text
//     RETURNING TRUE
// `
// cursor.query(query, ['алена', 'hu2323232i', SSID], (err, res)  => {
//     cursor.end();
//     if(res.rows.length == 0){
//         console.log("Не найден такой человек");
//     }else{
//         console.log("OK");
//         //localStorage.setItem('SSID', SSID);
//         // переходим на страницу
//     }
// });


// Регистрация
// let SSID = uuidv4();
// let cursor = bd_connect();
// let query = "INSERT INTO users(login, password, name, surnam, sex_women, ssid) values($1, $2, 'Хру2', 'жопа2',TRUE, $3)";

// cursor.query(query, ['Vlad', 'hu2323232i', SSID], (err, res)  => {
//     cursor.end();
//     if(err){
//         console.log("уже  существует");
//     }else{
//         console.log("OK");
//         //localStorage.setItem('SSID', SSID);
//         // перехожим на страницу
//     }
// });
