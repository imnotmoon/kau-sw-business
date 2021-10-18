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
      'banner',
      [
        {
          image_url: 'http://swedu.khu.ac.kr/html_2018/images/main/main_visual_img01.png',
          title: '첫번째 배너',
          content: '배너 설명 1',
          view_order: 3,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 6),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 6),
        },
        {
          image_url: 'http://swedu.khu.ac.kr/html_2018/images/main/main_visual_img02.png',
          title: '두번째 배너',
          content: '배너 설명 2',
          view_order: 2,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 6),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 6),
        },
        {
          image_url: 'http://swedu.khu.ac.kr/html_2018/images/main/main_visual_img03.png',
          title: '세번째 배너',
          content: '배너 설명 3',
          view_order: 1,
          created_at: new Date(Date.now() - 3600 * 1000 * 24 * 6),
          updated_at: new Date(Date.now() - 3600 * 1000 * 24 * 6),
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
    await queryInterface.bulkDelete('banner', null, {});
  },
};
