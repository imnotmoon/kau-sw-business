const { sequelize } = require('../db/models');
const db = require('../db/models');
const { Schedule, Sequelize } = db;
const { Op } = Sequelize;

const ScheduleService = {
  /**
   * 일정 추가
   * @param {Object} data startDate, endDate, title, link, category
   * @returns
   */
  add: async (data) => Schedule.create(data),

  /**
   * 일정 전체 조회
   * @param {Object}
   * @returns
   */
  findAllByCondition: async ({ category, from, to, order }) => {
    const categoryOption = category ? { category } : {};
    const fromOption = from
      ? {
          endDate: {
            [Op.gte]: from,
          },
        }
      : {};
    const toOption = to
      ? {
          startDate: {
            [Op.lte]: to,
          },
        }
      : {};
    const durationOrderBy =
      order === 'duration'
        ? [[sequelize.fn('datediff', Sequelize.col('startDate'), Sequelize.col('endDate')), 'ASC']]
        : [];
    return Schedule.findAll({
      attributes: ['id', 'startDate', 'endDate', 'title', 'link', 'category'],
      where: {
        ...categoryOption,
        ...fromOption,
        ...toOption,
      },
      order: [...durationOrderBy, ['startDate', 'ASC'], ['endDate', 'ASC']],
    });
  },

  /**
   * 일정 수정
   * @param {String} id
   * @param {Object} data
   * @returns
   */
  update: async (id, data) => Schedule.update(data, { where: { id } }),

  /**
   * 일정 삭제
   * @param {Number} id
   * @returns
   */
  delete: async (id) => Schedule.destroy({ where: { id } }),
};

module.exports = ScheduleService;
