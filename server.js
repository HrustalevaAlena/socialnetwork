const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser());
app.use(cookieParser());
app.use(express.static('static'));

app.get('/', (req, res) => {
    console.log("none");
    res.cookie('sid', 'none');
    res.sendFile('static/index.html', { root: __dirname });
});

//app.use(express.static('client'));

// function uuidv4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }

// // function bd_connect(){
// //     var pg = require('pg');
// //     var cursor = new pg.Client("postgres://postgres:postgres@localhost:5432/SocialNetwork");
// //     cursor.connect();
// //     return cursor;
// // }

// // function check_autorization(res){
// //     let SSID =  res.cookie('SSID');
// //     console.log(SSID);
// //     let cursor = bd_connect();

// //     if(SSID){
// //     cursor.query("SELECT TRUE FROM users WHERE ssid = $1", [SSID], (err, res)  => {
// //         cursor.end();
// //         if(res.rows.length == 0){
// //             // localStorage.setItem('SSID', null);
// //             console.log("пизда( Пиздуем на авторизацию");
// //         }
// //     });
// //     }else if(мы не на авторизации){console.log("пизда( Пиздуем на авторизацию");}
// // }

// http.createServer((req, res) => {
//     if(res.url=='/'){res.url='/index.html'}
//     // console.log(req.cookies.sid);
//         res.cookie('sid', 'hui');
//     // if (!res.headers.cookie){res.headers.cookie = Date()};
//     // console.log(req.rawHeaders);
//     // res.writeHead.SSID = Date();
//     // console.log(res.writeHead.SSID);
//     // check_autorization(res);
//     // res.writeHead(301, {
//     //     "Location": 'no_page.html'
//     //     //add other headers here...
//     //   });
//     //   res.end();

//     try {
//         page = fs.readFileSync(req.url.slice(1));
//     } catch (error) {
//         page = fs.readFileSync('no_page.html');
//     }

//     if(!page){res.writeHead(404, {'Content-Type': 'text/html' });}
//     else if(/\.html$/gi.test()){res.writeHead(200, { 'Content-Type': 'text/html' });}
//     else if(/\.css$/gi.test()){res.writeHead(200, { 'Content-Type': 'text/css' });}
//     else if(/\.js$/gi.test()){res.writeHead(200, { 'Content-Type': 'text/javascript' });}

//     res.end(page);

// }).listen(3000, () => console.log('Сервер работает'));


app.listen(3000); 