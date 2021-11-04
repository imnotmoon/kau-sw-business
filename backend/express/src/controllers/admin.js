const createError = require('http-errors');
const AdminService = require('../services/admin');

const AdminController = {
  getAdminByPk: async (req, res, next) => {
    const { id } = req.params;

    const admin = await AdminService.findOne(id);
    if (!admin) return next(createError(404, 'admin not exists'));

    return res.status(200).json({ data: admin });
  },

  getAdmins: async (req, res) => {
    const admins = await AdminService.findAll();
    return res.status(200).json({ data: admins });
  },

  createAdmin: async (req, res, next) => {
    const { userId, password, name } = req.body;

    if (!userId) return next(createError(400, 'userId is required'));
    if (!password) return next(createError(400, 'password is required'));
    if (!name) return next(createError(400, 'name is required'));

    const admin = await AdminService.findByUserId(userId);
    if (admin) return next(createError(409, 'userId already exits'));

    const result = await AdminService.add({
      userId,
      password,
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
      if (admin && admin.id !== id) return next(createError(409, 'userId already exits'));
    }
    await AdminService.update(id, rest);

    return res.status(200).json({ success: true });
  },

  removeAdmin: async (req, res, next) => {
    const { id } = req.params;

    const deleted = await AdminService.delete(id);
    if (!deleted) return next(createError(404, 'admin not exists'));

    return res.status(200).json({ success: true });
  },
};

module.exports = AdminController;
