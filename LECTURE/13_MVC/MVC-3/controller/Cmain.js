const Comment = require('../model/Comments');

exports.main = (req,res) =>{ 
  console.log('controller/Cmain.js > main 실행됐어요~')
  res.render('index');
}

exports.comments = (req,res) =>{
  console.log('controller/Cmain.js > comments 실행됐어요~');
  res.render('comments',{commentInfos : Comment.commentInfo()});
}

exports.comment = (req,res) =>{
  console.log('controller/Cmain.js > comment 실행됐어요~');
  console.log('몇번째를 클릭했을까요?',req.params.id);
  const comments = Comment.commentInfo();
  const commentId = req.params.id;
  res.render('comment', {commentInfo : comments[commentId -1]});
}