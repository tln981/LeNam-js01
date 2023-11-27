const socket = io();
let messages = {};
let username = ''
function displayOnlineUsers(onlineUsers) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '<h3>Online Users</h3>';
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-list-div');
    userDiv.textContent = "Chat All";
    userDiv.value = "All";
    userDiv.addEventListener('click', chooseChat)
    userList.appendChild(userDiv);

    Object.keys(onlineUsers).forEach(key => {
        if (key != socket.id) {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-list-div');
            userDiv.textContent = onlineUsers[key];
            userDiv.value = key;
            userDiv.addEventListener('click', chooseChat)
            userList.appendChild(userDiv);
        }
    });
}

function displayChatMessages(id) {
    const chatMessages = document.getElementById('chat-messages');
    console.log(messages);
    while (chatMessages.firstChild) {
        chatMessages.removeChild(chatMessages.firstChild);
    }
    if (messages.hasOwnProperty(id)){
        messages[id].forEach(message => {
            const messageDiv = document.createElement('div');
            messageDiv.textContent = `${message.sender}: ${message.text}`;
            messageDiv.classList.add('message', message.type);
            chatMessages.appendChild(messageDiv);
        });
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function joinChat() {
    username = document.getElementById('usernameInput').value;
    if (username.trim() !== '') {
        document.getElementById('usernameInput').style.display = 'none';
        document.getElementById('btnJoin').style.display = 'none';
        document.getElementById('user-list').style.display = 'block';
        document.getElementById('right-section').style.display = 'flex';
        socket.emit('join', username);
    }
}
document.getElementById('message-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sentMessage();
    }
});

function sentMessage() {
    recipient = document.getElementById('send-button').value;
    console.log(recipient);
    msg = document.getElementById('message-input').value;
    if (msg.trim() !== '') {
        socket.emit('message', { recipient, msg, username });
        data = { sender: "me", text: msg, type: 'sent' }
        if (messages.hasOwnProperty(recipient)) {
            messages[recipient].push(data);
            displayChatMessages(recipient);
        } else {
            messages[recipient] = [data];
            displayChatMessages(recipient)
        }
        document.getElementById('message-input').value = "";
    }
    
}
function chooseChat(event) {
    const value = event.currentTarget.value;
    event.currentTarget.style.color='black';
    document.getElementById('send-button').value = value;
    displayChatMessages(value);
}

socket.on('onlineUsers', (onlineUsers) => {
    displayOnlineUsers(onlineUsers)
})

socket.on('chatAll', (data) => {
    const id = data["id"];
    delete data["id"];
    if (id != socket.id) {
        if (messages.hasOwnProperty("All")) {
            messages["All"].push(data)
        } else {
            messages["All"] = [data]
        }
    }
    currentChat = document.getElementById('send-button').value;
    if(currentChat=="All"){
        displayChatMessages("All");
    }else{
        onlineUsers=Array.from(document.getElementsByClassName('user-list-div'));
        onlineUsers.forEach(element=>{
            if(element.value=="All"){
                element.style.color='red';
            }
        })
    }
})

socket.on('chatPrivate', (data) => {
    const id = data["id"];
    delete data["id"];
    currentChat = document.getElementById('send-button').value;
    if (messages.hasOwnProperty(id)) {
        messages[id].push(data);
    } else {
        messages[id] = [data];
    }
    console.log(messages[id]);
    if(currentChat==id){
        displayChatMessages(id);
    }
    else{
        onlineUsers=Array.from(document.getElementsByClassName('user-list-div'));
        onlineUsers.forEach(element=>{
            console.log(element.value,id);
            if(element.value==id){
                element.style.color='red';
            }
        })
    }
    
})