const { Router } = require('express');
const { check } = require('express-validator');
const { getAllApps, seedDB, getAppById, getAppByCategory } = require('../controllers/applicationControlles');

const router = Router();

router.get('/', getAllApps);
router.get('/:id', getAppById);
router.get('/byCategory/:id', getAppByCategory);
//router.post('/seedDB', seedDB);

module.exports = router;