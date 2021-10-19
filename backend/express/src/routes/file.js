const router = require('express').Router();
const multer = require('multer');
const { FILE_MAX_SIZE } = require('../utils/constant');
const controller = require('../controllers/file');

router.get('/:id', controller.getOne);

// TODO: 인증
router.post(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).single('file'),
  controller.add
);
router.delete('/:id', controller.delete);

module.exports = router;
