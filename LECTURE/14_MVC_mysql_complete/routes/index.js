const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

//첫화면
router.get('/', controller.main);

//첫화면 > 방명록 남기기
router.get('/visitors', controller.allVisitorList);

//방명록 사용자추가
router.post('/addvisitor', controller.addVisitor);

//방명록 목룍 중 수정버튼을 선택한 목록
router.get('/visitormodify/:id', controller.getShowAvisitor);

//수정 후 버튼 클릭 시 내용 변경하기
router.patch('/visitoreditDo', controller.patchVisitor);

//DELETE
router.delete('/visitordelete', controller.deleteVisitor);

module.exports = router;