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
      'notice',
      [
        {
          title: '첫번째로 등록한 공지',
          content: '<p> 첫번째 공지 </p>',
          writer: '작성자 1',
          category: 'notice',
          view_count: 10,
          pin_flag: false,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 6),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 6),
        },
        {
          title: '두번째로 등록한 공지',
          content: '<p> <b> 두번째 공지 </b> </p>',
          writer: '작성자 3',
          category: 'notice',
          view_count: 30,
          pin_flag: false,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 5),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 5),
        },
        {
          title: '세번째로 등록한 공지',
          content: '<p> 세번째 공지 <p>',
          writer: '작성자 2',
          category: 'notice',
          view_count: 3,
          pin_flag: true,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 3),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 3),
        },
        {
          title: '네번째로 등록한 공지',
          content: '<p> 네번째 공지 <p>',
          writer: '작성자 1',
          category: 'notice',
          view_count: 3,
          pin_flag: true,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 2),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 2),
        },
        {
          title: '다섯번째로 등록한 공지',
          content: '<p> 다섯번째 공지 <p>',
          writer: '작성자 3',
          category: 'notice',
          view_count: 3,
          pin_flag: true,
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
    await queryInterface.bulkDelete('notice', null, {});
  },
};
