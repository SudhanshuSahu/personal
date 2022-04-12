const mongoose =require('mongoose')
const userSchema = new mongoose.Schema({
bookName : String,
authorName : String,
category : String,
year : Number
});
module.exports = mongoose.model('User' , userSchema)