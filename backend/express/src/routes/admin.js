const router = require('express').Router();
const errorHanlder = require('../utils/error-handler');
const { verify } = require('../controllers/auth');
const { getAdminByPk, getAdmins, createAdmin, updateAdmin, removeAdmin } = require('../controllers/admin');

router.use('/', verify);
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
