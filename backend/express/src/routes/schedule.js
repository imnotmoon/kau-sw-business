const router = require('express').Router();
const controller = require('../controllers/schedule');

// Get All Schedules
router.get('/', controller.getSchedules);

// TODO: Token 인증 필요

// Add Schedule
router.post('/', controller.createSchedule);
// Edit Schedule data
router.put('/', controller.updateSchedule);
// Delete Admin
router.delete('/:id', controller.removeSchedule);

module.exports = router;
