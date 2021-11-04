const router = require('express').Router();
const multer = require('multer');
const { FILE_MAX_SIZE } = require('../utils/constant');
const errorHandler = require('../utils/error-handler');
const { getFileByPk, saveFile, deleteFile } = require('../controllers/file');

router.get('/:id', errorHandler(getFileByPk));

// TODO: 인증
// docs 에 없음
router.post(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).single('file'),
  errorHandler(saveFile)
);
router.delete('/:id', errorHandler(deleteFile));

module.exports = router;
