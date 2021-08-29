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
          content: '<p> 첫번째 공지 </p>',
          writer: 'TEST1',
          viewcnt: 3,
          is_pinned: false,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 3),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 3),
        },
        {
          title: 'Notice 2 Title',
          content: '<p><b>두번째 공지</b> </p>',
          writer: 'TEST1',
          viewcnt: 2,
          is_pinned: false,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 2),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 2),
        },
        {
          title: 'Notice 3 Title',
          content: '<p> 세번째 공지 <p>',
          writer: 'TEST2',
          viewcnt: 3,
          is_pinned: true,
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
