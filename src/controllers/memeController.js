let axios = require("axios")

const getAllMeme = async function(req,res){
let options = {
    method: "get",
    url: `https://api.imgflip.com/get_memes`
}
let result = await axios(options)

res.status(200).send({msg:result.data})
}

//post request for creating meme

const createMeme = async function(req,res){

    // template_id <meme_id>
    // text0 <text you want as a caption>
    // text1 <optional>
    // username chewie12345
    // password meme@123
try{
    let id = req.query.template_id
    let upperText = req.query.text0
    let bottomText = req.query.text1
    let userName = req.query.username
    let password = req.query.password

    let options = {
        method: "POST",
        url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${upperText}&text1=${bottomText}&username=${userName}&password=${password}`
    }
    let result = await axios(options)
    //console.log(result.data);
    res.status(200).send({msg:result.data})
}
catch(err){
    res.status(500).send({msg:err.message})
}

}

module.exports.createMeme=createMeme
module.exports.getAllMeme=getAllMeme