const express = require('express');
const ws = require('ws');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
  res.render('client');
})

const server = app.listen(PORT, ()=>{
  console.log(`${PORT}번 포트에서 서버 실행중 . . .`);
})
//express 서버와 websocket 서버를 연결해줘야 한다. -> 서버와 클라이언트가 같은 포트를 사용해야 한다.
const wsServer = new ws.Server({server:server});
const sockets = []; // 클라이언트 소켓을 저장할 배열.

wsServer.on('connection',(socket)=>{
  console.log('[클라이언트 연결 완료]');
  //접속한 클라이언트를 배열에 push
  sockets.push(socket); 
  //element.addEventListener과 같은 역할을 해준다.
  socket.on('message',(message)=>{
    console.log('클라이언트에서 받은 메시지 : ', message);
  //웹소켓 서버에 접속한 모든 클라이언트에게 메시지를 전송.
    socket.send(`${message}`);
  })
  socket.on('error',(error)=>{
    console.log('에러 발생 , ',err);
  })
  socket.on('close',()=>{
    console.log('[클라이언트 연결 종료]');
  })
})