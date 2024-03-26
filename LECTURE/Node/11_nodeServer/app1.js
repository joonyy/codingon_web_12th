const http = require('http');
http.createServer(function(req,res){
  //Send #1 http header, #2 http status, #3 Content-Type
  //#1,#2,#3
  res.writeHead(200, {'Content-type':'text/html'})
  res.end(`<h2>Hello World!<h2>`);
}).listen(3000, function(){
  console.log('3000번 포트에서 서버 실행중');
});