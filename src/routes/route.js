const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require ("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  ) // authorController

router.post("/publisher", publisherController.PublisherInfo  ) // publisher controller

router.post("/getBooksData", bookController.createBook) // bookController

router.get("/fetchBook", bookController.fetchBooks)
router.put("/updateBook", bookController.bookUpdate)
router.put("/updatePrice", bookController.priceUpdate)


module.exports = router;