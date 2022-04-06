const func = function (a) {
 console.log(a.trim())
}
module.exports.func = func

const lowerCase = function(b){
    console.log(b.toLowerCase());
}
module.exports.lower = lowerCase

const upperCase = function(c){
    console.log(c.toUpperCase());
}
module.exports.upper = upperCase