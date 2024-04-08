const Visitor = require('../model/Visitor');

//첫 화면
exports.main = (req,res) =>{
  console.log('controller > Cvisitor > main');
  res.render('index');
}
//모든 방문자
exports.get_visitors = (req,res) =>{
  console.log('Visitor.getVisitor 함수 호출됨');
  console.log('controller > Cvisitor > get_visitors');
  Visitor.getVisitors(result => {
    res.render('visitor',{data : result})
  })
}



//get visitor -1개 조회
exports.get_visitor = (req,res)=>{
console.log("controller > Cvisitor > get_visitor", req.query.id);
Visitor.getVisitor(req.query.id, (result)=>{
  res.send(result);
})
}

exports.get_visitor2 = (req,res)=>{
  console.log("controller > Cvisitor > get_visitor2", req.query.id);
  Visitor.getVisitor(req.query.id, (result)=>{
    res.send(result);
  })
  }

//post visitor
exports.post_visitor = (req,res)=>{
  console.log("controller > Cvisitor > post", req.query.id);
  const {name, comment} = req.body;
  Visitor.postVisitor(req.body, (result) =>{
    res.send({id:result,name,comment});
  })
}

//patch, visitor 1개 수정
exports.patch_visitor = (req,res)=>{
  console.log("controller > Cvisitor > patch_visitor", req.query.id);
  Visitor.patchVisitor(req.body, (result)=>{
    res.send('수정성공');
  })
}

//patch, visitor 1개 삭제
exports.delete_visitor = (req,res)=>{
  console.log("controller > Cvisitor > delete_visitor", req.query.id);
  Visitor.deleteVisitor(req.query.id, (result)=>{
    res.send('삭제 성공!');
  })
}
