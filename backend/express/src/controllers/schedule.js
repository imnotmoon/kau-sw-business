const createError = require('http-errors');
const ScheduleService = require('../services/schedule');

const ScheduleController = {
  getSchedules: async (req, res) => {
    const { category, from, to, order = 'date' } = req.query;

    const schedules = await ScheduleService.findAllByCondition({ category, from, to, order });

    return res.status(200).json({
      data: schedules,
    });
  },

  createSchedule: async (req, res, next) => {
    const data = req.body;
    const { startDate, endDate, title, category } = data;
    if (!startDate) return next(createError(400, 'startDate is required'));
    if (!endDate) return next(createError(400, 'endDate is required'));
    if (!title) return next(createError(400, 'title is required'));
    if (!category) return next(createError(400, 'category is required'));

    const result = await ScheduleService.add(data);
    if (!result || !result.id) return next(createError(500));

    return res.status(201).json({ success: true, scheduleId: result.id });
  },

  updateSchedule: async (req, res, next) => {
    const { id, ...rest } = req.body;

    if (!id) return next(createError(400, 'id is required'));
    await ScheduleService.update(id, rest);

    return res.status(200).json({ success: true });
  },

  removeSchedule: async (req, res, next) => {
    const { id } = req.params;

    if (!id) return next(createError(400, 'id is required'));
    const deleted = await ScheduleService.delete(id);
    if (!deleted) return next(createError(404, 'schedule not exists'));

    return res.status(200).json({ success: true });
  },
};

module.exports = ScheduleController;
