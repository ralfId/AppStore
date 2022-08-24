const { Router } = require('express');
const { check } = require('express-validator');
const { getAppAverage } = require('../controllers/averageRatingController');

const router = Router();

router.get('/', getAppAverage);

module.exports = router;