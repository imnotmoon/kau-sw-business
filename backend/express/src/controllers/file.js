const createError = require('http-errors');
const { fileNameGenerator } = require('../utils/filename');
const FileService = require('../services/file');

const FileController = {
  add: async (req, res) => {
    const { id } = req.body;
    const file = req.file;

    file.filename = fileNameGenerator(file.originalname);
    FileService.uploadFile(file);
    FileService.add({ filename: file.filename, name: file.originalname, noticeId: id });

    return res.status(200).json({ success: true, noticeId: id });
  },

  addImage: async (req, res) => {
    const file = req.file;

    file.filename = fileNameGenerator(file.originalname);
    FileService.addImage(file);

    return res.status(200).json({ success: true, url: `${process.env.IMAGE_URL}/${file.filename}` });
  },

  getOne: async (req, res, next) => {
    const { id } = req.params;

    const file = await FileService.findOne(id);
    if (!file) return next(createError(404, '존재하지 않는 파일'));

    const { filename, name } = file;
    return res.status(200).download(`${process.env.PWD}/files/${filename}`, name);
  },

  delete: async (req, res, next) => {
    const { id } = req.params;

    const file = await FileService.findOne(id);
    if (!file) return next(createError(404, '존재하지 않는 파일'));

    await FileService.delete(id);
    return res.status(200).json({ success: true });
  },
};

module.exports = FileController;
