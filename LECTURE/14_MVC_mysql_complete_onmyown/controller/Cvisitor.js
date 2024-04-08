const Visitor = require('../models/Visitor');

exports.main = (req,res) =>{
  res.render('index');
}

exports.allVisitorList = (req,res)=>{
  Visitor.allVisitorsList(result =>{
    res.render('visitor', {data:result});
  })
}

exports.addVisitor = (req,res) =>{
  const {name, comment} = req.body;
  Visitor.postAddVisitor(req.body,(result)=>{
    res.send({id:result, name, comment});
  });
}

exports.getShowAvisitor=(req,res)=>{
  Visitor.getShowAvisitor(req.params.id, (result)=>{
    res.send(result);
  })
}

exports.patchVisitor = (req,res)=>{
  Visitor.patchContent(req.body, (result)=>{
    res.send(result);
  })
}

exports.deleteVisitor = (req,res)=>{
  Visitor.deletedb(req.body.id, (result)=>{
    res.send('삭제 성공');
  })
}