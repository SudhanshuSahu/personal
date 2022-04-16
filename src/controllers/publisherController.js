const newPublisherModel = require("../models/newPublisherModel")

const PublisherInfo  = async function(req,res){

let data = req.body
let saveInfo = await newPublisherModel.create(data)
 res.send({msg : saveInfo})


}





module.exports.PublisherInfo = PublisherInfo 