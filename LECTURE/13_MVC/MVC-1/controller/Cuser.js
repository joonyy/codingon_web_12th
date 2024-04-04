const user=require('../model/Cuser');

exports.user=(req,res) =>{
  console.log('controller > Cuser.js : ');
  res.render('user', {userInfo: user.userInfo()})
}