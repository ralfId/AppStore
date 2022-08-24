const { Router } = require('express');
const { check } = require('express-validator');
const { getAllCategory, getCategoryById } = require('../controllers/categoryController');

const router = Router();

router.get('/', getAllCategory);
router.get('/:id', getCategoryById);

module.exports = router;