const createError = require('http-errors');

const errorHandler = (controller) => async (req, res, next) => {
  try {
    return await controller(req, res, next);
  } catch (err) {
    next(createError(500, err.message));
  }
};

module.exports = errorHandler;
