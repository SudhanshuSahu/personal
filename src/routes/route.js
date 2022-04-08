const express = require('express');

const router = express.Router();

router.get('/test-api1', function (req, res) {
    res.send('My first ever api! ')
});

router.get('/test-api2', function (req, res) {
    res.send('My first ever api! ')
})

router.get('/test-api3', function (req, res) {
    res.send({ msg : "hi functionUp "})
})
router.get('/test-api4', function (req, res) {
    res.send({ msg : "hi functionUp , This is a fourth api ! " , name : "funcionUp" , age : 5})
})
router.get('/test-api5', function (req, res) {
    res.send({ msg : [2,1,24,4,1,123,5]})
})

router.post('/test-post1' , function(req,res) {
    
res.send({msg : "post req 3"})
console.log(req.body)
});

//write a post req to accept an element in post request body and add it to the given array and return the new array ?
router.post('/test-post2' , function(req ,res){
    let arr = [2,4,6,7]
    let x = req.body.number
    arr.push(x)
res.send({msg : "my 2nd post req" , data : arr})
});
module.exports = router;
// adding this comment for no reason