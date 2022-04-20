const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sudhanshu48:123abc@functionup.veeix.mongodb.net/session?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
//My global middleware
const globalMiddleWare = function(req,res,next){
let date = new Date().toLocaleString()
let url = req.url

let ip = req.ip
console.log(date ," !!!!here is a local url->> " + url ," !!!!here is an IP adress ->>" +ip );

next()

}
app.use(globalMiddleWare);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
