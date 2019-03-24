var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

io.on('connection', function (socket) {
    console.log('a user connected');

    //on disconnect
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});