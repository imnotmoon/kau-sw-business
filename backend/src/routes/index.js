const router = require('express').Router();

const NoticeRouter = require('./notice');

router.use('/notice', NoticeRouter);

module.exports = router;
