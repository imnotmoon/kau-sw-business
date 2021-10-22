const db = require('../db/models');
const { Admin } = db;

const AdminService = {
  /**
   * 어드민 추가
   * @param {Object} data userId, password, name
   * @returns
   */
  add: async (data) => Admin.create(data),

  /**
   * userId 로 어드민 조회
   * @param {*} userId
   * @returns
   */
  findByUserId: async (userId) =>
    Admin.findOne({
      attributes: ['id', 'userId', 'password', 'name'],
      where: { userId },
    }),

  /**
   * pk 로 어드민 조회
   * @param {*} id
   * @returns
   */
  findOne: async (id) => Admin.findByPk(id),

  /**
   * 어드민 전체 조회
   * @returns
   */
  findAll: async () => Admin.findAll(),

  /**
   * 어드민 수정
   * @param {String} id
   * @param {Object} data
   * @returns
   */
  update: async (id, data) => Admin.update(data, { where: { id } }),

  /**
   * 어드민 삭제
   * @param {Number} id
   * @returns
   */
  delete: async (id) => Admin.destroy({ where: { id } }),
};

module.exports = AdminService;
