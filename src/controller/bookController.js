const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")

const createBookApi = async function (req, res) {
    let data = req.body
    let saveData = await bookModel.create(data)
    res.send({ msg: saveData })
}

const createAuthorApi = async function (req, res) {
    let data = req.body
    let saveAuthor = await authorModel.create(data)
    res.send({ msg: saveAuthor })
}

//api2 
const getBook = async function (req, res) {
    let findAuth = await authorModel.find({ author_name: "Chetan Bhagat" })
    let id = findAuth[0].author_id
    let getBookList = await bookModel.find({ author_id: id }).select({ bookName: 1 })

    res.send({ msg: getBookList })
}

//api 3
const findAuthor = async function (req, res) {
    let findAuth = await bookModel.findOneAndUpdate(
        { bookName: "Two States" },
        { $set: { price: 100 } },
        { new: true }
    )
    // console.log(findAuth);
    let getAuthorDetail = findAuth.author_id
    let getPrice = await bookModel.findOne({ author_id: getAuthorDetail }).select({ price: 1, _id: 0 })
    let updateList = await authorModel.findOne({ author_id: getAuthorDetail }).select({ author_name: 1, _id: 0 })
    res.send({ msg: [updateList, getPrice] })
}
//api4
const bookCost = async function (req, res) {
let cost = await bookModel.find({price : {$gte : 50 , $lte : 100}}).select({author_id:1 , _id : 0})

let getAuthorNames = []
for(let i = 0 ; i < cost.length ; i++){
    const getAuthorId = cost[i].author_id
    getAuthorNames = await authorModel.find({ author_id : getAuthorId}).select({author_name:1 , _id : 0})
}
res.send({data : getAuthorNames})

}

module.exports.findAuthor = findAuthor
module.exports.getBook = getBook
module.exports.createBookApi = createBookApi

module.exports.createAuthorApi = createAuthorApi
module.exports.bookCost = bookCost
