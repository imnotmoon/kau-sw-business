const router = require('express').Router();
const multer = require('multer');
const MAX_SIZE = 10 * 1024 * 1024;
const controller = require('../controllers/file');

router.get('/:id', controller.getOne);

// TODO: 인증
router.post(
  '/',
  multer({
    limits: { fileSize: MAX_SIZE },
  }).single('file'),
  controller.add
);
router.delete('/:id', controller.delete);

module.exports = router;
