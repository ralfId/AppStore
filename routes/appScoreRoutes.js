const { Router } = require('express');
const { check } = require('express-validator');
const { scoreApp } = require('../controllers/appScoreController');

const router = Router();

router.post('/', scoreApp);

module.exports = router;