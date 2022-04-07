const express = require('express');
const logger = require('../logger/logger')
const router = express.Router();
const formatter = require('../validator/formatter')
const helper = require('../util/helper')
const lodash = require('lodash');


router.get('/test-me', function (req, res) {
    console.log(req.query.color);
    logger.logging()
    res.send('My first ever api !')
    helper.date() 
    helper.month() 
    formatter.func("  FunctionUp  ")
    formatter.lower("HELLO WORLD")
    formatter.upper("i will be a future tech giant")
   
});
router.get('/hello', function (req, res) {
    res.send('My 2nd api');
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let subArrays = lodash.chunk(months, 3)
    console.log('The result after splitting the months array is ', subArrays)

//   let _ = require("lodash");
//   console.log(_.chunk(monthNames, monthNames.length / 4));

  let oddArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  console.log(lodash.tail(oddArray))

//   let unionFx = function (...a) {
//       return _.union(...a);
//   }
  let a1 = [1, 2, 3, 4];
  let a2 = [3, 4, 5, 6];
  let a3 = [7, 8, 6, 7];
  let a4 = [9, 8, 5, 4];
  let a5 = [68, 7, 9, 68];
  console.log(lodash.union(a1, a2, a3, a4, a5));

  let moviesArr = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]
  console.log(lodash.fromPairs(moviesArr));
  
});


module.exports = router;
// adding this comment for no reason