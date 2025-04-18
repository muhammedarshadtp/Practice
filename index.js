const http = require('http')

const server= http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    res.end('welcome to Node,js page')
})

server.listen(3000,()=>{
console.log("server is running")
})