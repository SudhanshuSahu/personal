const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const newPublisherModel = require("../models/newPublisherModel")

const createBook = async function (req, res) {
    let book = req.body
    let authorPresent = req.body.author
    let publisherPresent = req.body.publisher


    if (authorPresent) {
        let authorObjId = await authorModel.findOne({ _id: book.author })

        if (authorObjId == null) {
            res.send({ msg: "Enter valid id" })
        }


        if (publisherPresent) {
            let publisherObjId = await newPublisherModel.findOne({ _id: book.publisher })
            if (publisherObjId == null) {
                res.send({ msg: "enter valid publisher id" })
            }
            let bookCreated = await bookModel.create(book)
            res.send({ data: bookCreated })
        }
        else {
            res.send({ error: "publisher_id is required" })
        }

    }

    else {
        res.send({ error: "Author_id is required" })
    }
}

// 4rth question Get api to fetch all the book with author and publisher details......
const fetchBooks = async function (req, res) {
    let fetch = await bookModel.find().populate(["author", "publisher"])
    res.send({ msg: fetch })
}


//5th (a) question
const bookUpdate = async function(req,res){
    const update1 = await bookModel.updateMany({
        publisher : {$in : ["625868e0b1e6eef39f861321","625868f6b1e6eef39f861323"]}},
        {$set : {isHardCover : true}},
        {new:true}
    )
    res.send({msg:update1})
}

//5th (b) question 
const priceUpdate = async function(req , res){
    const findAuthor = await authorModel.find({rating : {$gt:3.5}},{_id:1})
        let update2 = []
        for(let i = 0 ; i<findAuthor.length ; ++i ) {
            update2[i] = await bookModel.updateMany(
                {author :findAuthor[i]._id },
                {$set : {price:10}}
                )
        }
res.send({msg:update2})
      
}

module.exports.createBook = createBook
module.exports.fetchBooks = fetchBooks
module.exports.bookUpdate = bookUpdate
module.exports.priceUpdate = priceUpdate
