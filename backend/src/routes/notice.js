const router = require('express').Router();

const controller = require('../controllers/notice');

router.post('', controller.add);
router.get('/:id', controller.getOne);
router.get('', controller.getAll);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
