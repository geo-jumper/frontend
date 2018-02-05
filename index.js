'use strict';

require('dotenv').config();
let PORT = process.env.PORT || 3000;

let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static('./public'));

const USERS = {};

io.on('connection', (socket) => {
  console.log(`${socket.id} connected.`);
  USERS[socket.id] = {};
  USERS[socket.id].username = 'anon';
  
  
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected.`);
    delete USERS[socket.id];
  });

  socket.on('update-player', (playerObject) => {
    // player object = { x, y, width, height }
    socket.broadcast.emit('render-players', playerObject);
  });

  // socket.on('set-username', ({username}) => {
  //   USERS[socket.id].username = username;
  //   console.log(`Username set for socket #${socket.id}`);
  //   socket.emit('set-username-placeholder', {username});
  // });
});

http.listen(PORT, () => {
  console.log(`Server ready @ http://localhost:${PORT}`);
});