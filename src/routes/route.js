const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare = require("../middleWare/middleWare")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

 router.get("/users/:userId",middleWare.authToken,middleWare.verifyToken,middleWare.verifyUserId, userController.getUserData)

 router.put("/users/:userId",middleWare.authToken,middleWare.verifyToken,middleWare.verifyUserId, userController.updateUser)
 
 router.delete("/users/:userId",middleWare.authToken,middleWare.verifyToken,middleWare.verifyUserId, userController.setDeleteUser)
module.exports = router;