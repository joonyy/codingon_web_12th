const e = require('express');
const Comment = require('../model/Comments');
exports.main = (req,res) =>{
  console.log('controller > Cmain.js : ')
  res.render('index')
}

exports.comments = (req,res)=>{
  console.log('controller > Cmain > comments', Comment.commentInfo());
  res.render('comments', {commentInfos : Comment.commentInfo()})
}
exports.comment = (req,res)=>{
  console.log('req.params', req.params.id);
  const comments = Comment.commentInfo();
  const commentId = req.params.id; //자세히 보길 원하는 댓글의 id
  res.render('comment', {commentInfo : comments[commentId -1] });
}