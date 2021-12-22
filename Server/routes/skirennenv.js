const express = require('express');
const {
  getFahrer,
  getRennen,
  getRen,
  delRennen,
  postRennen,
  changeTime,
} = require('../controllers/skirennenv');

const router = express.Router();

router.get('/fahrer', getFahrer);
router.get('/rennen', getRennen);
router.get('/rennen/:rennnummer', getRen);
router.delete('/rennen/:rennnummer', delRennen);
router.post('/rennen', postRennen);
router.patch('/rennen/:rennnummer', changeTime);

module.exports = router;
