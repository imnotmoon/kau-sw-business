const moment = require('moment');

const random = (length = 10) => {
  // Declare all characters
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  // Pick characers randomly
  let str = '';
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;
};
const fileNameGenerator = (originalname) => {
  return `${moment().format('YYYYMMDDHHmmss')}_${random(10)}_${originalname}`;
};

module.exports = { fileNameGenerator };
