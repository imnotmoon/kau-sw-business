const router = require('express').Router();
const errorHandler = require('../utils/error-handler');
const { verify } = require('../controllers/auth');
const { getSchedules, createSchedule, updateSchedule, removeSchedule } = require('../controllers/schedule');

// Get All Schedules
router.get('/', errorHandler(getSchedules));

router.use('/', verify);
// Add Schedule
router.post('/', errorHandler(createSchedule));
// Edit Schedule data
router.put('/', errorHandler(updateSchedule));
// Delete Admin
router.delete('/:id', errorHandler(removeSchedule));

module.exports = router;
