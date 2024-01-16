document.addEventListener('DOMContentLoaded', function () {
    const socket = io();
    const messagesContainer = document.getElementById('messages');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');

    messageForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const message = messageInput.value;

        if (message.trim() !== '') {
            // メッセージをサーバーに送信
            socket.emit('message', message);

            // 自分のメッセージを即座に表示
            displayMessage('You', message);

            // 入力欄をクリア
            messageInput.value = '';
        }
    });

    // サーバーからのメッセージを受信
    socket.on('message', function (data) {
        const username = data.username || 'Anonymous';
        const message = data.message;
        displayMessage(username, message);
    });

    function displayMessage(username, message) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${username}:</strong> ${message}`;
        messagesContainer.appendChild(li);
    }
});
