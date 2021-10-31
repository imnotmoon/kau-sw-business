const fse = require('fs-extra');
const { fileNameGenerator } = require('../utils/filename');
const db = require('../db/models');
const { File } = db;

const FileService = {
  /**
   * Single 파일 데이터 추가
   * @param {String} noticeId
   * @param {Object} file
   * @returns
   */
  add: async (noticeId, file) => {
    file.filename = fileNameGenerator(file.originalname);
    uploadFile(file);
    return File.create({ filename: file.filename, name: file.originalname, noticeId });
  },

  /**
   * Signle Image 추가
   * @param {Object} file
   * @returns
   */
  addImage: async (file) => uploadImage(file),

  /**
   * Mupltiple 파일 데이터 추가
   * @param {String} noticeId
   * @param {Array} files [file1, file2,,,]
   * @returns
   */
  addAll: async (noticeId, files) => {
    const uploadedFiles = files.map((file) => {
      file.filename = fileNameGenerator(file.originalname);
      uploadFile(file);
      return { filename: file.filename, name: file.originalname, noticeId };
    });
    return File.bulkCreate(uploadedFiles);
  },

  /**
   * 파일 데이터 조회
   * @param {String} id
   * @returns
   */
  findOne: async (id) => File.findByPk(id),

  /**
   * Single 파일 삭제
   * @param {Number} id
   * @returns
   */
  delete: async (id) => {
    const file = await File.findByPk(id, { attributes: ['filename'] });
    if (!file) return;
    removeFile(file.filename);
    return File.destroy({ where: { id } });
  },

  /**
   * Multiple 파일 삭제
   * @param {Array} ids [id1, id2,,,]
   * @returns
   */
  deleteAll: async (ids) => {
    const files = await File.findAll({ where: { id: ids }, attributes: ['filename'] });
    files.forEach(({ filename }) => removeFile(filename));
    return File.destroy({ where: { id: ids } });
  },
};

/**
 * 파일 저장
 * @param {Array} files
 * @returns
 */
const uploadFile = async (file) => fse.outputFile(`${process.env.PWD}/files/${file.filename}`, file.buffer);

/**
 * 이미지 저장
 * @param {Array} files
 * @returns
 */
const uploadImage = async (file) => fse.outputFile(`${process.env.IMAGE_DIR}/images/${file.filename}`, file.buffer);

/**
 * 파일 삭제
 * @param {String} filename
 * @returns
 */
const removeFile = async (filename) => fse.remove(`${process.env.PWD}/files/${filename}`);

module.exports = FileService;
