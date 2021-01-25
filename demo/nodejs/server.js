
const http = require("http");
const net = require("net");
const url = require('url')
const qs = require('querystring')
const stream = require('stream')
const queue = []
let curSocket = null
let count = 0
// const httpServer = http.createServer((req, res) => {
//     const query = url.parse(req.url).query
//     const queryObj = qs.parse(query)
//     console.log('http??',queryObj.requestCount)
//     res.on('finish', () => {
//         curSocket = null
//         requestHandler()
//     })
//     setTimeout(() => {
//         res.end(`${queryObj.requestCount}: ${count++}`, 'utf8')
//     }, 1000 * Math.random())
// })
net.createServer(socket => {
    console.log('socket in')
    // const r = new stream.Readable()
    // r.on('readable', () => {
    //     const txt = r.read();
    //     console.log('txt', txt)
    // })
    // socket.pipe(r)




    // socket.on('data',d=>{
    //     console.log('txt---000\n',d.toString())
    //     setTimeout(() => {
    //         socket.write("??");
    //     }, 1000);
    //     console.log('txt---111\n')
    // })
    // queue.push(socket)
    // requestHandler()
    socket.on('close',()=>console.log('close'))
    socket.write('"i am nodejs"\n');
    socket.on('data',d=>{
        const a = socket;
        const text = d.toString()
        console.log('form client',text)
        if(text.includes('exit')){
            console.log('--------')
            socket.end(()=>console.log('end from client exit'))
        }
    })
    
}).listen('4000', () => {
    console.log('net server start')
})
function requestHandler() {
    if (curSocket !== null || queue.length < 1) return
    curSocket = queue.shift()
    console.log('emit socket to http')
    httpServer.emit('connection', curSocket)
}

