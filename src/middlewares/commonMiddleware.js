

const mid1= function ( req, res, next) {
   let appUser = req.headers.isfreeappuser
 
       if(!appUser){
     res.send("Request is Missing a Mandatory Header")
}
   else{
    next()
   }
   
}

module.exports.mid1= mid1

