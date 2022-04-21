const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")

const authToken = async function (req, res, next) {
    let authorised = req.headers["x-Auth-Token"]
    if (!authorised) authorised = req.headers["x-auth-token"]
    if (!authorised) return res.send({ status: false, msg: " token must required" })
    else {
        next()
    }

}
const verifyToken = async function (req, res, next) {
    let token = req.headers["x-Auth-Token"]
    if (!token) token = req.headers["x-auth-token"]

    const decodeToken = jwt.verify(token, "Sudhanshu-Sahu")
    if (!decodeToken)
        return res.send({ status: false, msg: "token is not valid" })
    else {
        next()
    }

}
const verifyUserId = async function (req, res, next) {
    const userId = req.params.userId
    let userDetails = await userModel.findById(userId)
    if(!userDetails)
    return res.send({staus:false , msg:"no such user exist"})  
else{
    next()
}
}
module.exports.authToken = authToken
module.exports.verifyToken = verifyToken
module.exports.verifyUserId = verifyUserId