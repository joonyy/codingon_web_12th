const fs= require('fs');
const files = fs.readdirSync('./');

//console.log(files);
fs.readdir('./', function(err,files){
  if(err) console.log("에러 났음",err);
  else console.log("결과는 ", files);
})