const bookModel = require("../models/bookModel")
//Ist api
const createUser = async function (req, res) {
    let data = req.body
    let saveData = await bookModel.create(data)
    res.send({ msg: saveData })
}


// const getUserData = async function (req, res) {
//     let allUser = await bookModel.find()
//     res.send({ msg: allUser })
//}

//2nd api
const getList = async function(req,res){
    let allBooks = await bookModel.find().select({bookName:1 , authorName:1 , _id:0})
    res.send({msg : allBooks})
}

//5th api
const getPrice = async function(req,res){
    let price = await bookModel.find({
        $or : [ { 'price.indian' :"100INR"},{'price.indian' : "200INR"},{'price.indian':"500INR"}]
    })
    res.send({msg : price})
}
//6th api
const getBooks = async function(req,res){
    let price = await bookModel.find({
        $or : [ { stockAvailable :true},{totalPages :{$gt : "500"} }]
    })
    res.send({msg : price})
}


//3rd api
const getBooksYear = async function (req, res) {
    let Data = req.body.year
    
     let bkYear = await bookModel.find({year : Data} )
     res.send({ msg: bkYear })
}

//4rth api
const particularBooks =async function (req, res) {
let obj = req.body;
let random = await bookModel.find(obj)
res.send({msg : random})
}

module.exports.createUser = createUser
//module.exports.getUserData = getUserData
module.exports.getList = getList
module.exports.getPrice = getPrice
module.exports.getBooks = getBooks
module.exports.getBooksYear = getBooksYear
module.exports.particularBooks = particularBooks
