const fse = require('fs-extra');
const db = require('../db/models');
const { Notice, Sequelize } = db;
const { Op } = Sequelize;

const NoticeService = {
  /**
   * 공지사항 추가
   * @param {Object} data title, content, writer, viewOrder
   * @returns
   */
  add: async (data) => Notice.create(data),

  /**
   * 첨부파일 저장
   * @param {String} id
   * @param {Array} files
   * @returns
   */
  uploadFiles: async (id, files) =>
    files.forEach((file) =>
      fse.outputFile(`${process.env.PWD}/files/${id}/${file.originalname}`, file.buffer, (err) => {
        if (err) console.error(err);
      })
    ),

  /**
   * 공지사항 전체 조회
   * @param {Object}
   * @returns {Promise<Object[]>}
   */
  findNotices: async ({ pageNo, rowsPerPage, title, content, writer }) => {
    const limit = parseInt(rowsPerPage);
    const offset = (parseInt(pageNo) - 1) * limit;
    return Notice.findAll({
      where: {
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
        ['viewOrder', 'DESC'],
        ['createdAt', 'DESC'],
      ],
      offset,
      limit,
    });
  },

  /**
   * 공지사항 전체 개수 조회
   * @param {Object}
   * @returns {Promise<Number>}
   */
  getTotal: async ({ title, content, writer }) => {
    return Notice.count({
      where: {
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
  updateViewCnt: async (id) => Notice.increment('viewCnt', { where: { id } }),

  /**
   * 공지사항 조회
   * @param {String} id
   * @returns {Promise<Object>}
   */
  findOne: async (id) => Notice.findByPk(id),

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
