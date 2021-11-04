const router = require('express').Router();
const multer = require('multer');
const { FILE_MAX_SIZE } = require('../utils/constant');
const errorHanlder = require('../utils/error-handler');
const { getOpenBanners, getBanners, createBanner, updateBanner, deleteBanner } = require('../controllers/banner');

// Get Banners opened
router.get('/summary', errorHanlder(getOpenBanners));

// TODO: Token 인증 필요

// Get All Banners
router.get('/', errorHanlder(getBanners));
// Add Banner
router.post(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).single('image'),
  errorHanlder(createBanner)
);
// Edit Banner Data
router.put(
  '/',
  multer({
    limits: { fileSize: FILE_MAX_SIZE },
  }).single('newImage'),
  errorHanlder(updateBanner)
);
// Delete Banner
router.delete('/:id', errorHanlder(deleteBanner));

module.exports = router;
