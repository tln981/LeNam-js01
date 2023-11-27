const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname));

let onlineUsers={};
io.on('connection', (socket) => {
  socket.on('join', (userName) => {
    socket.join(socket.id);
    onlineUsers[socket.id] = userName;
    io.emit('onlineUsers',onlineUsers);
  });


  socket.on('message', ({ recipient, msg ,username }) => {
    if(recipient=="All"){
      io.emit('chatAll',{ sender: username, text: msg, type: 'received',id:socket.id })
    }else{
      io.to(recipient).emit('chatPrivate', { sender: username, text: msg, type: 'received',id:socket.id });
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    delete onlineUsers[socket.id];
    io.emit('onlineUsers',onlineUsers);
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

