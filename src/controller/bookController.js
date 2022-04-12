const userModel = require("../models/userModel")
const createUser = async function (req, res) {
    let data = req.body
    let saveData = await userModel.create(data)
    res.send({ msg: saveData })
}


const getUserData = async function (req, res) {
    let allUser = await userModel.find()
    res.send({ msg: allUser })
}

module.exports.createUser = createUser

module.exports.getUserData = getUserData