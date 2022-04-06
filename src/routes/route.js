const express = require('express');
const logger = require('../logger/logger')
const router = express.Router();
const formatter = require('../validator/formatter')
const helper = require('../util/helper')


router.get('/test-me', function (req, res) {
    logger.logging()
    res.send('My first ever api !')
    helper.date() 
    helper.month() 
    formatter.func("  FunctionUp  ")
    formatter.lower("HELLO WORLD")
    formatter.upper("i will be a future tech giant")
   
});
router.get('/hello', function (req, res) {
    function chunk(){
    chunk (["Jan" , "Feb" , "Mar" , "Apr" , "May" , "June" , "July" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"] , 4)
        //   return chunk([arr , 4])
        //   console.log(chunk([arr , 4]));
        console.log(chunk);
}

chunk()

   
});


module.exports = router;
// adding this comment for no reason