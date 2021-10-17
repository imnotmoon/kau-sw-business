const ScheduleService = require('../services/schedule');

const ScheduleController = {
  getAll: async (req, res) => {
    const { category, from, to } = req.query;

    const schedules = await ScheduleService.findSchedules({ category, from, to });

    return res.status(200).json({
      data: schedules,
    });
  },
};

module.exports = ScheduleController;
