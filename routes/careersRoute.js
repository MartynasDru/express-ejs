const express = require('express');
const { index } = require('../controllers/careersController');

const router = express.Router();

router.get('/', index);

module.exports = router;