const http = require('http');
const server = http.createServer().listen(3000, function(){
  console.log('3000번 포트에서 서버 실행');
})