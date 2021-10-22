const router = require('express').Router();
const AuthController = require('../controllers/auth');

router.use('/notice', require('./notice'));
router.use('/file', require('./file'));
router.use('/schedule', require('./schedule'));
router.use('/banner', require('./banner'));
router.use('/admin', require('./admin'));

router.post('/login', AuthController.login);

module.exports = router;
