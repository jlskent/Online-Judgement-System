/*
web server
*/


const express = require('express');
const path = require('path');
const app = express();

// socketIO
var http = require('http');
var socketIO = require('socket.io');
var io = socketIO();

var editorSocketService = require('./services/editorSocketService')(io);


// router
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

// connect to mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:Password1@ds231749.mlab.com:31749/oj-server-db');



// REF mongodb://<dbuser>:<dbpassword>@ds231749.mlab.com:31749/oj-server-db



//respond to get request - root dir -
//restRouter will handle api request

app.use('/api/v1', restRouter);
app.use(express.static(path.join(__dirname, '../public')));

// app.listen(3000, () => {
// 	console.log('App is listening to port 3000!');
// });

const server = http.createServer(app);

io.attach(server);
server.listen(3000);
server.on('listening', () => {
    console.log('App is listening to port 3000!');
});


app.use((req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../public')});
})