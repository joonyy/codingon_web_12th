const Comments = require('../model/Comments');

exports.main = (req,res)=>{
  console.log('index 실행됨');
  res.render('index');
}

exports.comments = (req,res)=>{
  console.log('/comments 실행됨');
  res.render('comments',{commentInfos : Comments.Comments()})
}

exports.comment = (req,res)=>{
  const commentId= req.params.id;
  const comments = Comments.Comments();
  res.render('comment',{commentInfo : comments[commentId -1]})
}