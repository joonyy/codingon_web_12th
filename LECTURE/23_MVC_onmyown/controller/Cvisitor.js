const Visitor = require('../model/Visitor');

//홈
exports.main = (req,res)=>{
  res.render('index');
}

// /visitors
exports.getAllVisitors = (req,res)=>{
  Visitor.getAllVisitors((result) =>{
    res.render('visitors',{data:result});
  })
}

// /visitorsAdd
exports.visitorsAdd = (req,res)=>{
  const {name,comment} = req.body;
  Visitor.AddVisitor(req.body, (result)=>{
    res.send({id:result,name,comment});
  })
}

exports.getEditingVisitor = (req,res) =>{
  const 
}

exports.patchEditVisitor = ()=>{
  
}

exports.deleteVisitor = ()=>{
  
}
