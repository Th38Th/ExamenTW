const express = require('express')
const router = express.Router();
const otherRouter = require('./other')
const jobpostingRouter = require('./jobposting');

router.use('/', otherRouter);
router.use('/', jobpostingRouter);

module.exports = router