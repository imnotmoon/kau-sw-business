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
      'Notices',
      [
        {
          title: 'Notice 1 Title',
          contents: '<p> 첫번째 공지 </p>',
          writer: 'TEST1',
          view_cnt: 3,
          view_order: 0,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 3),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 3),
        },
        {
          title: 'Notice 2 Title',
          contents: '<p><b>두번째 공지</b> </p>',
          writer: 'TEST1',
          view_cnt: 2,
          view_order: 1,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 2),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 2),
        },
        {
          title: 'Notice 3 Title',
          contents: '<p> 세번째 공지 <p>',
          writer: 'TEST2',
          view_cnt: 3,
          view_order: 1,
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
    await queryInterface.bulkDelete('Notices', null, {});
  },
};
