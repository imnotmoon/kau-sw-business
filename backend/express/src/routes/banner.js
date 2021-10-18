const router = require('express').Router();
const controller = require('../controllers/banner');

router.get('/', controller.get);

// TODO: 등록, 수정, 삭제
// router.post(controller.add);
// router.put(controller.update);
// router.delete('/:id', controller.delete);

module.exports = router;
