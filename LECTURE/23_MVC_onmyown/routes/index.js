const express= require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

router.get('/', controller.main);
router.get('/visitors', controller.getAllVisitors);
router.post('/visitorsAdd',controller.visitorsAdd);
router.get('/visitorsEdit/:id',controller.getEditingVisitor);
router.patch('/visitorsEditSubmit/:id',controller.patchEditVisitor);
router.get('/visitorsEdit/:id',controller.deleteVisitor);

module.exports = router;