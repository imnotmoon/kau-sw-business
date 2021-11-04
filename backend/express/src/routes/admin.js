const router = require('express').Router();
const errorHanlder = require('../utils/error-handler');
const { getAdminByPk, getAdmins, createAdmin, updateAdmin, removeAdmin } = require('../controllers/admin');

// TODO: Token 인증 필요

// Get Admin By PK
router.get('/:id', errorHanlder(getAdminByPk));
// Get All Admins
router.get('/', errorHanlder(getAdmins));
// Add Admin
router.post('/', errorHanlder(createAdmin));
// Edit Admin data
router.put('/', errorHanlder(updateAdmin));
// Delete Admin
router.delete('/:id', errorHanlder(removeAdmin));

module.exports = router;
