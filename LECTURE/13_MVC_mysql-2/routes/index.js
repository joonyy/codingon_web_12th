const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

//첫 화면
router.get('/',controller.main);
//방명록 전체
router.get('/visitors', controller.get_visitors);
//post visitor
router.post('visitor', controller.post_visitor);
//get visitor -1개 조회
router.get('/visitor', controller.get_visitor);
router.get('/visitor/:id', controller.get_visitor2);

//patch, visitor 1개 수정
router.patch('/visitor',controller.patch_visitor);

//patch, visitor 1개 삭제
router.delete('/visitor',controller.delete_visitor);
module.exports = router;