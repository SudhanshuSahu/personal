const express = require('express');

const router = express.Router();
const bookController = require('../controller/bookController')
const bookModel = require('../models/bookModel')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUserData' , bookController.createUser);
//router.get('/getAllData' , bookController.getUserData);
router.get('/bookList' , bookController.getList);
router.get('/getXINRBooks' , bookController.getPrice);
router.get('/getRandomBooks' , bookController.getBooks);
router.post('/getBooksInYear' , bookController.getBooksYear);
router.post('/getParticularBooks' , bookController.particularBooks);




module.exports = router;
// adding this comment for no reasons