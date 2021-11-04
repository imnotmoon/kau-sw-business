const router = require('express').Router();
const multer = require('multer');
const { FILE_MAX_SIZE } = require('../utils/constant');
const errorHandler = require('../utils/error-handler');
const {
  getNoticeSummary,
  getNoticeByPk,
  getNotices,
  createNotice,
  updateNotice,
  deleteNotice,
} = require('../controllers/notice');

router.get('/summary', errorHandler(getNoticeSummary));
router.get('/:id', errorHandler(getNoticeByPk));
router.get('/', errorHandler(getNotices));

// TODO: 인증
router.post(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).array('files'),
  errorHandler(createNotice)
);
router.put(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).array('files'),
  errorHandler(updateNotice)
);
router.delete('/:id', errorHandler(deleteNotice));

module.exports = router;
