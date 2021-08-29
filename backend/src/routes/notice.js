const router = require('express').Router();
const multer = require('multer');
const controller = require('../controllers/notice');
const MAX_SIZE = 2 * 1024 * 1024;

router.post(
  '/',
  multer({
    limits: { fileSize: MAX_SIZE },
  }).array('files'),
  controller.add
);
router.get('/:id', controller.getOne);
router.get('/', controller.getAll);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
