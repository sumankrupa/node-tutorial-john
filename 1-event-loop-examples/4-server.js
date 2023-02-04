const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('hello world')
    res.end('hellow w')
})

server.listen(5000,()=>{
    console.log('server listening on port : 5000...')
})