const Visitor = require('../model/Visitor')

// 첫화면
exports.main= (req,res)=>{
    res.render('index')
}
// 모든 방명록 보기
exports.allVisitorList = (req,res)=>{

     // model에서 전체목록을 보여주는 쿼리를 가져와야 한다
     Visitor.allVisitorsList(result=>{
        console.log('allVisitorsList' , result)
        res.render('visitors', {data:result})
     })
}

// 방명록 에 추가
exports.addVisitor = (req,res)=>{
      console.log('폼에서 데이터추가 버튼 후 넘겨준 데이터',req.body)
      const {name, comment } = req.body;
      Visitor.postAddVisitor(req.body, (result)=>{
        console.log('add visitor,userId' , result);
        res.send({id:result,name, comment })
      })
   
}
//1명 선택
exports.getShowAvisitor=(req,res)=>{
  console.log("Cvisitor  > 1명 선택 : ", req.params.id, req.params)

  Visitor.getShowAvisitor(req.params.id, (result) =>{
    console.log("getShowAvisitor " , req.params.id)
   
    res.send(result)
  })

}

// 수정버튼
exports.patchVisitor =(req,res)=>{
   console.log('수정버튼 클릭 후 ', req.body);
   Visitor.patchContent(req.body, (result)=>{
    res.send(result)
   })
}

// 삭제버튼
exports.deleteVisitor=(req,res)=>{
  console.log('삭제버튼 후 ',req.body.id)
  Visitor.deletedb(req.body.id, (result)=>{
    res.send('삭제성공')
  })
}

// router.get( "/editvisitor/:id ", controller.getShowAvisitor)