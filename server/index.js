const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 }, () => {
    console.log('server listening to port 8080')
});

let connection;

wss.on('connection', socket => {
    connection = socket;
    connection.on('message', message => {
        connection.send(`Your number is! ${message}`)
    })

    connection.on('close', () => {
        console.log('client disconnected');
    })

    // sendEvery5Seconds();
})




function sendEvery5Seconds() {
    connection.send(`Random Num ${Math.floor(Math.random() * 100)}`)

    setTimeout(sendEvery5Seconds, 5000)

}