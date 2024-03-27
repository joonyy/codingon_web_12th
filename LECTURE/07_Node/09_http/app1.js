const http_ex = require('http');
const server = http_ex.createServer();

server.on('connection', (socket) =>{
  console.log('새로운 연결')
})
server.listen(8000);
console.log('8000포트 열림')