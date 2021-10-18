// const fse = require('fs-extra');
const db = require('../db/models');
const { Banner } = db;

const BannerService = {
  /**
   * 공개 배너 조회
   * @param {String} id
   * @returns
   */
  findOpenBanners: async () =>
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
};

/**
 * 이미지 저장
 * @param {Array} files
 * @returns
 */
// const uploadImage = async (file) => fse.outputFile(`${process.env.PWD}/images/${file.filename}`, file.buffer);

/**
 * 이미지 삭제
 * @param {String} filename
 * @returns
 */
// const removeImage = async (filename) => fse.remove(`${process.env.PWD}/images/${filename}`);

module.exports = BannerService;
