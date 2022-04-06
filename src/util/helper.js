// let date = "06-apr-22 "
// let month = "April"
// let batchInfo = "Uranium , W3D3 , The topic for today is Nodejs module system"
	
// module.exports.date = date
// module.exports.month = month
// module.exports.batch = batchInfo
let printDate = function() {
    let date = new Date();
    console.log(date.toDateString())
}
let printMonth = function() {
    let month = new Date();
    console.log(month.getMonth()+1)
}
module.exports.date = printDate
module.exports.month = printMonth


