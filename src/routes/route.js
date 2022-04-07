const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/all-candidates', function (req, res) {
    // console.log('------------------')
    // console.log(req)
    // console.log('------------------')
    // console.log('These are the request query parameters: ', req.query)
    res.send('[Sudhanshu]  , [Aditya] , [Rupesh] , [prateek] , [vijay]')
});
router.get('/candidates', function (req, res) {
const arr = ["a" , "b" , "c" , "d"]
if(req.query.count !== 0 ||req.query.count <= 10)
res.send()



});




module.exports = router;
// adding this comment for no reason