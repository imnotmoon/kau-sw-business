const router = require('express').Router();
const controller = require('../controllers/admin');

// TODO: Token 인증 필요

// Get Admin By PK
router.get('/:id', controller.getAdminByPk);
// Get All Admins
router.get('/', controller.getAdmins);
// Add Admin
router.post('/', controller.createAdmin);
// Edit Admin data
router.put('/', controller.updateAdmin);
// Delete Admin
router.delete('/:id', controller.removeAdmin);

module.exports = router;
