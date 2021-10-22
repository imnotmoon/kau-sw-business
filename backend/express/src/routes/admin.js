const router = require('express').Router();
const controller = require('../controllers/admin');

router.get('/:id', controller.getAdminByPk);
router.get('/', controller.getAdmins);
router.post('/', controller.createAdmin);
router.put('/', controller.updateAdmin);
router.delete('/:id', controller.removeAdmin);

module.exports = router;
