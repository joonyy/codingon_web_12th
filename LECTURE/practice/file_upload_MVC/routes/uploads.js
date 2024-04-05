const express = require('express');
const router = express.Router();

//multer 설정
const multer = require('multer');

const uploadDetail = multer({
  storage:multer.diskStorage({
    destination(req,file,done){
      done(null, 'uploads/');
    },
    filename(req,file,done){
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8');
      const ext = path.extname(file.originalname);//확장자 가져오기
      done(null, file.originalname);
    },
  }),
  limits:{fileSize : 5 * 1024 * 1024}, //5MB
});
const controller = require('../controller/Cuploads');

router.post('uploads', uploadDetail.single('pic'),controller.uploads);

module.exports = router;