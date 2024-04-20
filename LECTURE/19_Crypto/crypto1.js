const crypto = require('crypto');

crypto.randomBytes(128,(err,buf)=>{
  if(err){
    console.log(err);
    return;
  }
  //console.log('The random data is : ', buf);
  console.log('The random data is : ', buf.toString('base64'));
})