const developerModel = require("../models/developerModel")
const batchModel= require("../models/batchModel")

const createDeveloperData= async function (req, res) {
    let createData = req.body
    let devDeta = await developerModel.create(createData)
    res.send({Data: devDeta})
}


//An eligible developer is female with percentage greater than or equal to 70
const scholarship= async function (req, res) {
    let getScholarship = await developerModel.find({gender : "female" , percentage :{$gte: 70}}).count()
    res.send({msg: getScholarship})
}

const getDevelopers = async function (req, res) {
    const data1 = req.query.percentage
     const data2 = req.query.program
 let batchId = await batchModel.findOne({name: data2},{_id:1})
  
      let devs = await developerModel.find({percentage : {$gte : data1},batch : batchId._id}).populate("batch")
     
     res.send({msg: devs})

}


module.exports.createDeveloperData= createDeveloperData
 module.exports.scholarship= scholarship
module.exports.getDevelopers= getDevelopers
