const router = require('express').Router();
const multer = require('multer');
const controller = require('../controllers/notice');
const MAX_SIZE = 10 * 1024 * 1024;

router.get('/:id', controller.getOne);
router.get('/', controller.getAll);

// TODO: 인증
router.post(
  '/',
  multer({
    limits: { fileSize: MAX_SIZE },
  }).array('files'),
  controller.add
);
router.put(
  '/',
  multer({
    limits: { fileSize: MAX_SIZE },
  }).array('newFiles'),
  controller.update
);
router.delete('/:id', controller.delete);

module.exports = router;
