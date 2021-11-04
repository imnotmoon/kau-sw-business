const router = require('express').Router();
const errorHandler = require('../utils/error-handler');
const { getSchedules, createSchedule, updateSchedule, removeSchedule } = require('../controllers/schedule');

// Get All Schedules
router.get('/', errorHandler(getSchedules));

// TODO: Token 인증 필요

// Add Schedule
router.post('/', errorHandler(createSchedule));
// Edit Schedule data
router.put('/', errorHandler(updateSchedule));
// Delete Admin
router.delete('/:id', errorHandler(removeSchedule));

module.exports = router;
