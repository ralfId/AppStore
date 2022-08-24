const { Router } = require('express');
const { check } = require('express-validator');
const { getAppComments, createComment } = require('../controllers/commentController');

const router = Router();

router.get('/:id', getAppComments);
router.post('/', createComment);

module.exports = router;