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

    const token = jwt.sign({ id: admin.id, name: admin.name }, process.env.JWT_SECRET_KEY);
    res.cookie('token', token, { path: '/', httpOnly: true });
    res.cookie('token', token, { path: '/', httpOnly: true, sameSite: 'none', secure: true });
    // return res.status(200).json({ token, data: { id: admin.id, name: admin.name } });
  },
  verify: async (req, res, next) => {
    const { token } = req.cookies;
    if (!token || token === '') return next(createError(400, 'no authorization'));

    try {
      const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (!result.id) return next(createError(400, 'no authorization'));
      req.user = result;
      next();
    } catch (err) {
      console.log(err.message);
      return next(createError(400, 'no authorization'));
    }
  },
};

module.exports = AuthController;
