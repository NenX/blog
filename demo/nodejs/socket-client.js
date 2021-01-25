
const http = require("http");
const net = require("net");
const url = require('url')
const qs = require('querystring')
const stream = require('stream')


const s = net.createConnection({ port: "4000", localAddress: '127.0.0.1' })
s.on('data', d => {
    const a = s;
    console.log('from server', d.toString())
})
s.on('connect',()=>{
    const ss = s;
    s.write("i am client");
})