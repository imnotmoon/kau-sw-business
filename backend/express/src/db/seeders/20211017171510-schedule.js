'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'schedule',
      [
        {
          start_date: '2021-05-10',
          end_date: '2021-05-11',
          title: '봄 프로그래밍 경시대회',
          link: '',
          category: 'major',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          start_date: '2021-09-21',
          end_date: '2021-09-21',
          title: '가을 프로그래밍 경시대회',
          link: '',
          category: 'major',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          start_date: '2021-11-01',
          end_date: '2021-11-10',
          title: 'SW페스티벌',
          link: '',
          category: 'major',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          start_date: '2021-01-01',
          end_date: '2021-12-31',
          title: '연구연수활동 수행',
          link: '',
          category: 'major',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('schedule', null, {});
  },
};
