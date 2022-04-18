const express = require('express');
const router = express.Router();

const batchController = require("../controllers/batchController")
const developerController = require("../controllers/developerController")

router.get("/test-me", function (req, res) {
  res.send("My first ever api!")
})

router.post("/createBatch", batchController.createBatch)

router.post("/createDev", developerController.createDeveloperData)

router.get("/scholarship-developers", developerController.scholarship)

router.get("/developers", developerController.getDevelopers)

// router.post("/createBook", bookController.createBook  )



module.exports = router;