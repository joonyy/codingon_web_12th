const user = require('../model/Cuser');

exports.user=(req,res)=>{
  console.log('controller/Cuser.js > user 실행됐어요~');
  res.render('user', {userInfo: user.userInfo()});
}