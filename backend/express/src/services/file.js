const fse = require('fs-extra');
const db = require('../db/models');
const { File } = db;

const FileService = {
  /**
   * Single 파일 데이터 추가
   * @param {Object} data filename, name, noticeId
   * @returns
   */
  add: async (data) => File.create(data),

  /**
   * Mupltiple 파일 데이터 추가
   * @param {Object} data [{filename, name, noticeId},,,]
   * @returns
   */
  addAll: async (data) => File.bulkCreate(data),

  /**
   * 파일 데이터 조회
   * @param {String} id
   * @returns
   */
  findOne: async (id) => File.findByPk(id),

  /**
   * 파일 데이터 삭제
   * @param {Number} id
   * @returns
   */
  delete: async (id) => File.destroy({ where: { id } }),

  /**
   * 파일 저장
   * @param {Array} files
   * @returns
   */
  uploadFile: async (file) => fse.outputFile(`${process.env.PWD}/files/${file.filename}`, file.buffer),

  /**
   * 파일 삭제
   * @param {String} filename
   * @returns
   */
  removeFile: async (filename) => fse.remove(`${process.env.PWD}/files/${filename}`),
};

module.exports = FileService;
