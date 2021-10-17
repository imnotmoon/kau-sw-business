const router = require('express').Router();

router.use('/notice', require('./notice'));
router.use('/file', require('./file'));
router.use('/schedule', require('./schedule'));

module.exports = router;
