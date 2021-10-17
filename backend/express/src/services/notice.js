const db = require('../db/models');
const { Notice, File, Sequelize } = db;
const { Op } = Sequelize;

const NoticeService = {
  /**
   * 공지사항 추가
   * @param {Object} data title, content, writer, category, pinFlag
   * @returns
   */
  add: async (data) => Notice.create(data),

  /**
   * 공지사항 전체 조회
   * @param {Object}
   * @returns
   */
  findNotices: async ({ category, pageNo, rowsPerPage, title, content, writer }) => {
    const categoryOption = category ? { category } : {};
    const limit = parseInt(rowsPerPage);
    const offset = (parseInt(pageNo) - 1) * limit;
    return Notice.findAll({
      attributes: ['id', 'title', 'writer', 'pinFlag', 'viewCount', 'createdAt'],
      where: {
        ...categoryOption,
        title: {
          [Op.like]: `%${title}%`,
        },
        content: {
          [Op.like]: `%${content}%`,
        },
        writer: {
          [Op.like]: `%${writer}%`,
        },
      },
      order: [
        ['pinFlag', 'DESC'],
        ['createdAt', 'DESC'],
      ],
      offset,
      limit,
    });
  },

  /**
   * 공지사항 전체 개수 조회
   * @param {Object}
   * @returns
   */
  getTotal: async ({ category, title, content, writer }) => {
    const categoryOption = category ? { category } : {};
    return Notice.count({
      where: {
        ...categoryOption,
        title: {
          [Op.like]: `%${title}%`,
        },
        content: {
          [Op.like]: `%${content}%`,
        },
        writer: {
          [Op.like]: `%${writer}%`,
        },
      },
    });
  },

  /**
   * 공지사항 조회 수 없데이트
   * @param {String} id
   * @returns
   */
  updateViewCnt: async (id) => Notice.increment('viewCount', { where: { id } }),

  /**
   * 공지사항 조회
   * @param {String} id
   * @returns
   */
  findOne: async (id) =>
    Notice.findByPk(id, {
      include: [
        {
          model: File,
          as: 'files',
          attributes: ['id', 'name'],
        },
      ],
    }),

  /**
   * 공지사항 수정
   * @param {String} id
   * @param {Object} data
   * @returns
   */
  update: async (id, data) => Notice.update(data, { where: { id } }),

  /**
   * 공지사항 삭제
   * @param {Number} id
   * @returns
   */
  delete: async (id) => Notice.destroy({ where: { id } }),
};

module.exports = NoticeService;
