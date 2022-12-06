const express = require('express');
const router = express.Router();
const dataController = require('../../controllers/dataController');
const logController = require('../../controllers/logController');
const { validatorCreateWebData } = require("../../middleware/validators/data")

router
    .patch('/:code', dataController.createMobileData)
    .post('/', validatorCreateWebData ,dataController.createWebData)    
    .get('/:code', dataController.getWebData)
    .post('/log/',logController.createLog)
    .get('/log/',logController.getLog);

module.exports = router;