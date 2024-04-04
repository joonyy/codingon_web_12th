const Comment = require('../model/Comments')

exports.main = (req,res) =>{
  res.render('index')
}

exports.comments = (req,res) =>{
  res.render('comments', {commentInfos:Comment.commentInfo()})
}

exports.comment = (req,res) =>{
  console.log("req.params : ",req.params);
  console.log("req.params.id : ", req.params.id)
  const commentId = req.params.id;// 유저의 id 번호
  const comments = Comment.commentInfo(); //전체 데이터
  res.render('comment',{commentInfo:comments[commentId]}) //
}