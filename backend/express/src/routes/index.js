const router = require('express').Router();
const multer = require('multer');
const { FILE_MAX_SIZE } = require('../utils/constant');
const AuthController = require('../controllers/auth');
const FileController = require('../controllers/file');

router.use('/notice', require('./notice'));
router.use('/file', require('./file'));
router.use('/schedule', require('./schedule'));
router.use('/banner', require('./banner'));
router.use('/admin', require('./admin'));

router.post('/login', AuthController.login);
router.post(
  '/image',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).single('image'),
  FileController.saveImage
);

module.exports = router;
