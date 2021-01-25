
const http = require("http");
const net = require("net");
const url = require('url')
const qs = require('querystring')
const stream = require('stream')
const queue = []
let curSocket = null
let count = 0

net.createServer(proxy_socket => {
    proxy_socket.on('data', proxy_socket_data => {
        const remote_socket = net.connect({
            host: 'hdrm.lian-med.com', port: '80',
            // path: '/',
            // onread: {
            //     // 为套接字的每次读取复用 4KiB 的 Buffer。
            //     buffer: Buffer.alloc(4 * 1024),
            //     callback: (nread, buf) => {
            //         // 收到的数据在 `buf` 中可用，从 0 到 'nread`。
            //         // console.log('zz',buf.toString('utf8', 0, nread));
            //         // console.log('??--', buf.toString())
            // console.log('+++++++++',buf.length)

            //         socket.write(buf)
            //     }
            // }
        },
            () => {
                remote_socket.write(proxy_socket_data)
            }
        )
            // .pipe(
            //     proxy_socket
            // )
            .on('data', remote_socket_data => {
                console.log('========', remote_socket_data.length)
                proxy_socket.write(remote_socket_data)
            })
    })

}).listen('4141', () => {
    console.log('net server start')
})



function requestHandler() {
    if (curSocket !== null || queue.length < 1) return
    curSocket = queue.shift()
    console.log('emit socket to http')
    httpServer.emit('connection', curSocket)
}

