const createError = require('http-errors');
const { fileNameGenerator } = require('../utils/filename');
const FileService = require('../services/file');

const FileController = {
  getFileByPk: async (req, res, next) => {
    const { id } = req.params;

    const file = await FileService.findOne(id);
    if (!file) return next(createError(404, 'file not exists'));

    const { filename, name } = file;
    return res.status(200).download(`${process.env.PWD}/files/${filename}`, name);
  },

  saveFile: async (req, res, next) => {
    const { id } = req.body;
    const file = req.file;
    if (!id) return next(createError(400, 'id is required'));
    if (!file) return next(createError(400, 'image is required'));

    FileService.add({ filename: file.filename, name: file.originalname, noticeId: id });

    return res.status(200).json({ success: true, noticeId: id });
  },

  saveImage: async (req, res, next) => {
    const file = req.file;
    if (!file) return next(createError(400, 'image is required'));

    const filename = await FileService.addImage(file);

    return res.status(200).json({ success: true, url: `${process.env.IMAGE_URL}/${filename}` });
  },

  deleteFile: async (req, res, next) => {
    const { id } = req.params;

    const file = await FileService.findOne(id);
    if (!file) return next(createError(404, 'file not exists'));

    await FileService.delete(id);
    return res.status(200).json({ success: true });
  },
};

module.exports = FileController;
