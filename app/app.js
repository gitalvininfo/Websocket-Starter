const socket = new WebSocket('ws://localhost:8080');


socket.onmessage = ({ data }) => {
    console.log(`Incoming messages from server: ${data}`)
}

socket.onclose = (event) => {
    console.log("WebSocket is closed now.");
};

socket.onerror = (event) => {
    console.error("WebSocket error observed:", event);
};

const btn = document.getElementById('btnHello')

let num = 0;
btn.addEventListener("click", () => {
    num++;
    socket.send(num)
});
