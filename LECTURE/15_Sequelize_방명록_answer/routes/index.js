const express = require('express')
const router = express.Router()
const controller = require('../constroller/Cvisitor')

// 첫화면
router.get('/',controller.main )

// 첫화면 > 방명록남기기
router.get('/visitors', controller.allVisitorList);


// 방명록 사용자 추가
router.post('/addvisitor', controller.addVisitor)

// 방명록 목록 중 수정버튼 선택한 목록
router.get( '/visitormodify/:id', controller.getShowAvisitor)
  
// 수정 버튼 후 변경버튼 클릭했을때 선택한 목록의 내용 바꾸기
router.patch('/visitoreidtDo', controller.patchVisitor)

router.delete('/visitordelete', controller.deleteVisitor)

module.exports = router;