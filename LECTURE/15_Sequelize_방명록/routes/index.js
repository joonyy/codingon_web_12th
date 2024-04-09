const express =require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

//첫 화면
router.get('/', controller.main);

//첫 화면 > 방명록 남기기
router.get('/visitors',controller.allVisitorList);

//방명록 추가
router.post('/addvisitor', controller.addVisitor);
router.get('/visitormodify/:id', controller.getShowAvisitor);
router.patch('/visitoreditDo', controller.patchVisitor);
router.delete('/visitordelete', controller.deleteVisitor);

module.exports = router;