const createError = require('http-errors');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AdminService = require('../services/admin');

const AuthController = {
  login: async (req, res, next) => {
    const { userId, password } = req.body;
    if (!userId) return next(createError(400, 'userId is required'));
    if (!password) return next(createError(400, 'password is required'));

    const admin = await AdminService.findByUserId(userId);
    if (!admin) return next(createError(401, 'check userId or password'));

    const isAuthorized = password === admin.password; /*bcrypt.compareSync(password, admin.password)*/

    if (!isAuthorized) return next(createError(401, 'check userId or password'));

    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET_KEY);
    return res.status(200).json({ token, data: { id: admin.id, name: admin.name } });
  },
};

module.exports = AuthController;
