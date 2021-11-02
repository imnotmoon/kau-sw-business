const createError = require('http-errors');
const ScheduleService = require('../services/schedule');

const ScheduleController = {
  getSchedules: async (req, res) => {
    const { category, from, to } = req.query;

    const schedules = await ScheduleService.findAllByCondition({ category, from, to });

    return res.status(200).json({
      data: schedules,
    });
  },

  createSchedule: async (req, res, next) => {
    const data = req.body;
    // TODO: 필수 항목 확인

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
    if (!deleted) return next(createError(404, '존재하지 않는 ID'));

    return res.status(200).json({ success: true });
  },
};

module.exports = ScheduleController;
