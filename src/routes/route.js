const express = require('express');

const router = express.Router();
const bookController = require('../controller/bookController')
const bookModel = require('../models/bookModel')
const authorModel =require('../models/authorModel')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook' , bookController.createBookApi);
router.post('/createAuthor' , bookController.createAuthorApi);
router.get('/getBook' , bookController.getBook);
 router.get('/findAuthor' , bookController.findAuthor);
router.get('/bookWithCost' , bookController.bookCost);
// router.get('/getRandomBooks' , bookController.getBooks);
// router.post('/getBooksInYear' , bookController.getBooksYear);




module.exports = router;
// adding this comment for no reasons