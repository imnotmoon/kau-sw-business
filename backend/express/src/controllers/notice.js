const createError = require('http-errors');
const NoticeService = require('../services/notice');
const FileService = require('../services/file');

const NoticeController = {
  getNoticeByPk: async (req, res, next) => {
    const { id } = req.params;

    await NoticeService.updateViewCnt(id);

    const notice = await NoticeService.findOne(id);
    if (!notice) return next(createError(404, 'notice not exists'));

    return res.status(200).json({ data: notice });
  },

  getNotices: async (req, res) => {
    let { pageNo, rowsPerPage } = req.query;
    if (!pageNo || pageNo === '') pageNo = '1';
    if (!rowsPerPage || rowsPerPage === '') rowsPerPage = '15';
    const { category, title = '', content = '', writer = '' } = req.query;

    const [total, notices] = await Promise.all([
      NoticeService.getTotal({ category, title, content, writer }),
      NoticeService.findAllByCondition({ category, pageNo, rowsPerPage, title, content, writer }),
    ]);

    return res.status(200).json({
      pageMap: { total, pageNo, rowsPerPage, totalNumberOfPages: Math.ceil(total / rowsPerPage) },
      data: notices,
    });
  },

  getNoticeSummary: async (req, res) => {
    let { category, count } = req.query;
    if (!count || count === '') count = 4;

    const summary = await NoticeService.findSummary({ category, limit: count });

    return res.status(200).json({ data: summary });
  },

  createNotice: async (req, res, next) => {
    const data = req.body;
    const files = req.files;
    // const { name } = req.user; // TODO: cookie 적용하면 다시 적용
    const { title, content, category } = data;
    if (!title) return next(createError(400, 'title is required'));
    if (!content) return next(createError(400, 'content is required'));
    if (!category) return next(createError(400, 'category is required'));

    const result = await NoticeService.add({ ...data, writer: '임시관리자' });
    if (!result || !result.id) return next(createError(500));

    FileService.addAll(result.id, files);

    return res.status(201).json({ success: true, noticeId: result.id });
  },

  updateNotice: async (req, res, next) => {
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

  deleteNotice: async (req, res, next) => {
    const { id } = req.params;

    const deleted = await NoticeService.delete(id);
    if (!deleted) return next(createError(404, 'notice not exists'));

    return res.status(200).json({ success: true });
  },
};

module.exports = NoticeController;
