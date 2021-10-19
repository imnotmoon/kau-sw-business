const router = require('express').Router();
const multer = require('multer');
const controller = require('../controllers/notice');
const { FILE_MAX_SIZE } = require('../utils/constant');

router.get('/summary', controller.getSummary);
router.get('/:id', controller.getOne);
router.get('/', controller.getAll);

// TODO: 인증
router.post(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).array('files'),
  controller.add
);
router.put(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).array('files'),
  controller.update
);
router.delete('/:id', controller.delete);

module.exports = router;
