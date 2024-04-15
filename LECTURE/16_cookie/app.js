const http = require('http');
const cookie =require('cookie');

http.createServer(function(req,res){
  let cookies = {};
  if(req.headers.cookie !== undefined){
    cookies = cookie.parse(req.headers.cookie);
    console.log(cookies);
  }

  res.writeHead(200,{
    'set-cookie':[
      `tasty_food=kimchi; Max-Age =${6000 * 20}`,
      'username=kdt',
      'password=1234',
      'DontReadHttp=myhttp; HttpOnly',
    ]
  })
  
  res.end('cookie3')
}).listen(8000, ()=>{
  console.log('8000번 포트에서 서버 실행중 : app.js');
})