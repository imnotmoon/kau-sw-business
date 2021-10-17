const router = require('express').Router();

router.use('/notice', require('./notice'));
router.use('/file', require('./file'));

module.exports = router;
