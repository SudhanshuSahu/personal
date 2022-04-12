const express = require('express');

const router = express.Router();
const bookController = require('../controller/bookController')
const userModel = require('../models/userModel')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUserData' , bookController.createUser);
router.get('/getAllData' , bookController.getUserData);


module.exports = router;
// adding this comment for no reasons