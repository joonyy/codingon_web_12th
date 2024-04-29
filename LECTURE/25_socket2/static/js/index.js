let socket = io();
/**
 * socket.io('이벤트 이름', function(){});
 */

//접속되었을 때
socket.on('connect',function(){
  let name = prompt('반갑습니다!', '');
  if(!name){
    name="아무개씨"
  }
  //서버에 접속한 새로운 유저가 누군지 알려준다.
  socket.emit('newUser',name);
})

//서버로부터 데이터를 받았을 때
socket.on('update', function(data){
  let chat = document.getElementById('chat');
  let message = document.createElement('div');
  let node = document.createTextNode(`${data.name} : ${data.message}`);
  let className = ''; //내가 보낸 것 다른 사람이 보낸 것을 클래스를 지정하여 구별하기 위해
  switch(data.type){
    case 'message':
      className = 'other';
      break;
    case 'connect' :
      className = 'connect';
      break;
    case 'disconnect' :
      className = 'disconnect';
      break;
  }
  message.classList.add(className);
  message.appendChild(node);
  chat.append(message);
})

//메시지 전송
function send(){
  let message = document.getElementById('test').value;
  document.getElementById('test').value="";//input box 초기화

  let chat = document.getElementById('chat');
  let msg = document.createElement('div');
  let node = document.createTextNode(message);
  //          document.createTextNode('Tea');
  msg.classList.add('me');
  msg.appendChild(node);
  chat.appendChild(msg);
  
  //서버로 message 이벤트 전송하면서 데이터 함께 보내기
  socket.emit('message', {type:'message', message:message })
}