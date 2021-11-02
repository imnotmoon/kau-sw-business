const router = require('express').Router();
const multer = require('multer');
const controller = require('../controllers/banner');
const { FILE_MAX_SIZE } = require('../utils/constant');

// Get Banners opened
router.get('/summary', controller.getOpenBanners);

// TODO: Token 인증 필요

// Get All Banners
router.get('/', controller.getBanners);
// Add Banner
router.post(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).single('image'),
  controller.createBanner
);
// Edit Banner Data
router.put(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).single('newImage'),
  controller.updateBanner
);
// Delete Banner
router.delete('/:id', controller.deleteBanner);

module.exports = router;
