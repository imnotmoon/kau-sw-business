const createError = require('http-errors');
const { fileNameGenerator } = require('../utils/filename');
const NoticeService = require('../services/notice');

const NoticeController = {
  add: async (req, res, next) => {
    const data = req.body;
    const files = req.files;
    // TODO: 필수 항목 확인

    const result = await NoticeService.add({
      ...data,
      files: files
        .map((file) => {
          file.originalname = fileNameGenerator(file.originalname);
          return file.originalname;
        })
        .join(', '),
    });
    if (!result || !result.id) return next(createError(500));

    NoticeService.uploadFiles(result.id, files);

    return res.status(201).json({ success: true, noticeId: result.id });
  },

  getAll: async (req, res) => {
    const { pageNo = '1', rowsPerPage = '15', title = '', content = '', writer = '' } = req.query;

    const [total, notices] = await Promise.all([
      NoticeService.getTotal({ title, content, writer }),
      NoticeService.findNotices({ pageNo, rowsPerPage, title, content, writer }),
    ]);

    return res.status(200).json({
      pageMap: { total, pageNo, rowsPerPage, totalNumberOfPages: Math.ceil(total / rowsPerPage) },
      rows: notices,
    });
  },

  getOne: async (req, res, next) => {
    const { id } = req.params;

    await NoticeService.updateViewCnt(id);

    const notice = await NoticeService.findOne(id);
    if (!notice) return next(createError(404, '존재하지 않는 ID'));
    notice.files = notice.files?.split(', ').map((file) => {
      // TODO: url env 에서 가져오도록 설정
      return { name: file.substring(26), url: `http://localhost:3000/api/file/${file}` };
    });
    return res.status(200).json(notice);
  },

  update: async (req, res, next) => {
    const { id, ...rest } = req.body;

    if (!id) return next(createError(400, 'id is required'));
    await NoticeService.update(id, rest);

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
