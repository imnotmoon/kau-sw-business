const router = require('express').Router();
const multer = require('multer');
const { fileNameGenerator } = require('../utils/filename');
const MAX_SIZE = 2 * 1024 * 1024;

router.get('/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).download(`${process.env.PWD}/files/${id}`, id.substring(26));
});

router.post(
  '/',
  multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, `${process.env.PWD}/files`);
      },
      filename: function (req, file, cb) {
        cb(null, fileNameGenerator(file.originalname));
      },
    }),
    limits: { fileSize: MAX_SIZE },
  }).single('file'),
  (req, res) => {
    const file = req.file;
    return res.status(200).json({ success: true, filename: file.filename });
  }
);

module.exports = router;
