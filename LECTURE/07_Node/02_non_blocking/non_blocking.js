const fs = require('fs');
const data = fs.readFileSync('./blog.txt','utf-8',(err,data)=>{
  if(err) throw err;
  console.log(data);
});
console.log('another work');