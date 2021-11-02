const router = require('express').Router();
const multer = require('multer');
const controller = require('../controllers/notice');
const { FILE_MAX_SIZE } = require('../utils/constant');

router.get('/summary', controller.getNoticeSummary);
router.get('/:id', controller.getNoticeByPk);
router.get('/', controller.getNotices);

// TODO: 인증
router.post(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).array('files'),
  controller.createNotice
);
router.put(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).array('files'),
  controller.updateNotice
);
router.delete('/:id', controller.deleteNotice);

module.exports = router;
