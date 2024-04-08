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
  Visitor.getVisitors(result =>{
    res.render('visitor', {data:result});
  })
}