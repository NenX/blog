const http = require("http");

// client
var i = 0;
var id = setInterval(() => {
    if (i >= 2) clearInterval(id)
    const count = i++
    http.get(`http://localhost:4000/?requestCount=${count}`, incomingMessage => {
        incomingMessage.on('readable', () => { console.log(incomingMessage.read() + '') })
    })
}, 0)