const router = require('express').Router();
const multer = require('multer');
const { FILE_MAX_SIZE } = require('../utils/constant');
const controller = require('../controllers/file');

router.get('/:id', controller.getFileByPk);

// TODO: 인증
// docs 에 없음
router.post(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).single('file'),
  controller.saveFile
);
router.delete('/:id', controller.deleteFile);

module.exports = router;
