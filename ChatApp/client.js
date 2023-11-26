const socket = io();

// Gửi tin nhắn khi nhấn nút send

$('button').click(() => {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});

// Nhận tin nhắn từ server và hiển thị lên màn hình
socket.on('chat message', (msg) => {
    $('#messages').append($('<li>').text(msg));
});