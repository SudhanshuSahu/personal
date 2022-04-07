const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/movies', function(req, res) {

   //1) Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
   res.send(["pk" , "RHTDM" , "Interstellar" , "fast and furious" , "star war"])
})

//2)Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api
router.get('/movies/:indexNumber' , function(req, res) {
    let arr = ["pk" , "RHTDM" , "Interstellar" , "fast and furious" , "star war"]
    if(req.params.indexNumber > arr.length) {
   res.send("use a valid Syntax")
    }
     else{
      res.send(arr[req.params.indexNumber])
    }
    console.log(req.params.indexNumber)
       
});
//Problem 4 :-

router.get('/films', function (req, res) {
  let ar = [ {
    id: 1,
    name: "The Shining"
   }, {
    id: 2,
    name: "Incendies"
   }, {
    id: 3,
    name: "Rang de Basanti"
   }, {
    id: 4,
    name: "Finding Nemo"
   }]
   res.send(ar)
  
  });
  //problem 5 :- 
  router.get('/films/:filmId', function (req, res) {
    let arr = [ {
      id: 1,
      name: "The Shining"
     },
      {
      id: 2,
      name: "Incendies"
     }, 
     {
      id: 3,
      name: "Rang de Basanti"
     }, 
     {
      id: 4,
      name: "Finding Nemo"
     }]
 
  let f =req.params.filmId 
  f = f-1
  let film;
  if(f < arr.length ){
     film = arr[f]
    
  } else {
    film = "No movie exists with this id"
  }
  res.send(film)
    })
   



// router.get('/user-profile/:abcd', function(req, res) {
//     console.log(req)
//     console.log(req.params.abcd)
//     res.send('dummy response' + req.params.abcd)
// })

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });




module.exports = router;
// adding this comment for no reason