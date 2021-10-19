const createError = require('http-errors');
const NoticeService = require('../services/notice');
const FileService = require('../services/file');

const NoticeController = {
  add: async (req, res, next) => {
    const data = req.body;
    const files = req.files;
    // TODO: 필수 항목 확인
    const result = await NoticeService.add(data);
    if (!result || !result.id) return next(createError(500));

    FileService.addAll(result.id, files);

    return res.status(201).json({ success: true, noticeId: result.id });
  },

  getAll: async (req, res) => {
    let { pageNo, rowsPerPage } = req.query;
    if (!pageNo || pageNo === '') pageNo = '1';
    if (!rowsPerPage || rowsPerPage === '') rowsPerPage = '15';
    const { category, title = '', content = '', writer = '' } = req.query;

    const [total, notices] = await Promise.all([
      NoticeService.getTotal({ category, title, content, writer }),
      NoticeService.findNotices({ category, pageNo, rowsPerPage, title, content, writer }),
    ]);

    return res.status(200).json({
      pageMap: { total, pageNo, rowsPerPage, totalNumberOfPages: Math.ceil(total / rowsPerPage) },
      data: notices,
    });
  },

  getOne: async (req, res, next) => {
    const { id } = req.params;

    await NoticeService.updateViewCnt(id);

    const notice = await NoticeService.findOne(id);
    if (!notice) return next(createError(404, '존재하지 않는 ID'));

    return res.status(200).json({ data: notice });
  },

  getSummary: async (req, res) => {
    const { category, count = 4 } = req.query;

    const summary = await NoticeService.find({ category, limit: count });

    return res.status(200).json({ data: summary });
  },

  update: async (req, res, next) => {
    const { id, deleteFiles, ...rest } = req.body;
    const files = req.files;

    if (!id) return next(createError(400, 'id is required'));
    await NoticeService.update(id, rest);

    FileService.addAll(id, files);
    if (deleteFiles && deleteFiles.length > 0) {
      FileService.deleteAll(deleteFiles);
    }

    return res.status(200).json({ success: true });
  },

  delete: async (req, res, next) => {
    const { id } = req.params;

    const deleted = await NoticeService.delete(id);
    if (!deleted) return next(createError(404, '존재하지 않는 ID'));

    return res.status(200).json({ success: true });
  },
};

module.exports = NoticeController;
