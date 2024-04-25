const Visitor = require('../model/Visitor');

//첫 화면
exports.main=(req,res)=>{
  res.render('index');
}

//모든 방명록 보기
exports.allVisitorList = (req,res)=>{
  Visitor.allVisitorsList((result)=>{
    res.render('visitors',{data:result});
  })
}

exports.addVisitor = (req,res)=>{
  const {name,comment} =req.body;
  Visitor.postAddVisitor(req.body, (result)=>{
    res.send({id:result,name,comment});
  })
}

exports.getShowAVisitor= (req,res)=>{
  Visitor.getShowAvisitor(req.params.id,(result)=>{
    res.send(result);
  })
}

exports.patchVisitor = (req,res)=>{
  Visitor.patchContent(req.body,(result)=>{
    res.send(result);
  })
}

exports.deleteVisitor = (req,res)=>{
  Visitor.deletedb(req.body.id, (result)=>{
    res.send('삭제완료');
  })
}