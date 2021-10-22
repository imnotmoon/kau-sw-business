const createError = require('http-errors');
// const bcrypt = require('bcryptjs');
const AdminService = require('../services/admin');

const AdminController = {
  getAdminByPk: async (req, res, next) => {
    const { id } = req.params;

    const admin = await AdminService.findOne(id);
    if (!admin) return next(createError(404, '존재하지 않는 ID'));

    return res.status(200).json({ data: admin });
  },

  getAdmins: async (req, res) => {
    const admins = await AdminService.findAll();
    return res.status(200).json({ data: admins });
  },

  createAdmin: async (req, res, next) => {
    const { userId, password, name } = req.body;

    const admin = await AdminService.findByUserId(userId);
    if (admin) return next(createError(409, '이미 존재하는 User Id'));

    const result = await AdminService.add({
      userId,
      password /*password: bcrypt.hashSync(password, 8)*/,
      name,
    });

    if (!result || !result.id) return next(createError(500));

    return res.status(201).json({ success: true, adminId: result.id });
  },

  updateAdmin: async (req, res, next) => {
    const { id, ...rest } = req.body;

    if (!id) return next(createError(400, 'id is required'));

    if (rest.userId) {
      const admin = await AdminService.findByUserId(rest.userId);
      if (admin && admin.id !== id) return next(createError(409, '이미 존재하는 User Id'));
    }
    await AdminService.update(id, rest);

    return res.status(200).json({ success: true });
  },

  removeAdmin: async (req, res, next) => {
    const { id } = req.params;

    const deleted = await AdminService.delete(id);
    if (!deleted) return next(createError(404, '존재하지 않는 ID'));

    return res.status(200).json({ success: true });
  },
};

module.exports = AdminController;
