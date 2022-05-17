const jwt = require("jsonwebtoken")
const bookModel = require("../models/bookModel")

const authentication = async function (req, res, next) {
    try {


        let token = req.headers["X-Api-Key"] || req.headers["x-api-key"]

        if (!token) {
            return res.status(400).send({ status: false, message: "token must be present" })
        }
        try {
            let decodedToken = jwt.verify(token, "group34")

        }
        catch (err) {
            return res.status(400).send({ status: false, message: "invalid token" })
        }
        req['x-api-key'] = token
        next()
    }
    catch (err) {
        return res.status(500).send(err.message)
    } 
}

//Creating authorization function
const authorization = async function (req, res, next) {
    try{
    let data=req.body.userId
    let bookId = req.params.bookId
    let token = req['x-api-key']
    let decodedToken = jwt.verify(token, "group34")
    if (data) {
        if (decodedToken.userId !== data) {
            return res.status(401).send({ status: false, message: "You are not an authorized user" })
        }
    }

    if ((bookId)) {
        let book = await bookModel.findOne({ _id: bookId })
        if (book == null) {
            return res.status(404).send({ status: false, message: "Book Id not found" })
        }
        if (decodedToken.userId !== book.userId.toString()) {
            return res.status(401).send({ status: false, message: "You are not an authorized user" })
        }
    }

    next()
}
catch(err){
    res.status(500).send(err.message )
}
}



module.exports.authentication = authentication
module.exports.authorization = authorization