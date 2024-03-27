const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

http.createServer().listen(8080,function(){
  console.log('8080번 포트에서 서버 실행중');
})