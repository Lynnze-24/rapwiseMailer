const express = require('express');

const mailController = require('../controllers/mail.controller');

const mailRouter = express.Router();

mailRouter.post('/', mailController.postMail);


module.exports = mailRouter;