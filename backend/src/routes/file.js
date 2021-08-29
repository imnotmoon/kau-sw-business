const router = require('express').Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).download(`${process.env.PWD}/files/${id}`, id.substring(26));
});

module.exports = router;
