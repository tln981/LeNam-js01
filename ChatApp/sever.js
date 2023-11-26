const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname));

let onlineUsers={};
io.on('connection', (socket) => {
  console.log('A user connected');

  // Nhận tên người dùng và tham gia phòng chat riêng của họ
  socket.on('join', (userName) => {
    socket.join(userName); // Người dùng tham gia vào phòng chat có tên là username
    io.to(userName).emit('chat message', 'Welcome to Ạpp Chạt!');
    onlineUsers[socket.id] = userName;
    io.emit('onlineUsers',onlineUsers);
  });

  // Gửi tin nhắn riêng cho mỗi người dùng
  socket.on('private message', ({ recipient, msg,username }) => {
    io.to(recipient).emit('chat message', `Ạpp Chạt from ${username}: ${msg}`);
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
 