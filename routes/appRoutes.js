const { Router } = require('express');
const { check } = require('express-validator');
const { getAllApps, seedDB, getAppById, getAppByCategory, deleteApp } = require('../controllers/applicationControlles');

const router = Router();

router.get('/', getAllApps);
router.get('/:id', getAppById);
router.get('/byCategory/:id', getAppByCategory);
//router.post('/seedDB', seedDB);
router.delete('/:id', deleteApp);


module.exports = router;