// const fse = require('fs-extra');
const db = require('../db/models');
const { Banner } = db;

const BannerService = {
  /**
   * 배너 추가
   * @param {Object} data
   * @returns
   */
  add: async (data) => Banner.create(data),

  /**
   * 전체 배너 조회
   * @returns
   */
  findAll: async () =>
    Banner.findAll({
      order: [
        ['viewOrder', 'DESC'],
        ['createdAt', 'DESC'],
      ],
    }),

  /**
   * 공개 배너 조회
   * @returns
   */
  findAllOpen: async () =>
    Banner.findAll({
      attributes: ['imageUrl', 'title', 'content'],
      where: {
        useFlag: true,
      },
      order: [
        ['viewOrder', 'DESC'],
        ['createdAt', 'DESC'],
      ],
    }),

  /**
   * 배너 수정
   * @param {String} id
   * @param {Object} data
   * @returns
   */
  update: async (id, data) => Banner.update(data, { where: { id } }),

  /**
   * 배너 삭제
   * @param {Number} id
   * @returns
   */
  delete: async (id) => Banner.destroy({ where: { id } }),
};

module.exports = BannerService;
