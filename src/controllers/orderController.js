const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
// //const ordeModel = require("../models/orderModel")
const orderModel = require("../models/orderModel")

const createOrder = async function (req, res) {
    let data = req.body
    let userId = data.userId
    let productId = data.productId
    let freeAppUser = req.headers.isfreeappuser
    let user = await userModel.findById(userId).select({ _id: 1 })
    let product = await productModel.findById(productId).select({ _id: 1 })

    if (!userId) {
        res.send("UserId is Required")
    }
    else if (!user) {
        res.send("Enter Valid UserId")
        
    }
    if (!productId) {
        return res.send("Product is Required")
    }
    else if (!product) {
        res.send("Enter valid ProductId")
    }
    let productDetail = await productModel.findById(productId)

    let productPrice = productDetail.price

    let userDetail = await userModel.findById(userId)
    let userBalance = userDetail.balance

    if (freeAppUser === "false") {
        if (userBalance > productPrice) {
            let updatedBalance = await userModel.findByIdAndUpdate(
                { _id: userId },
                { $inc: { balance: -productPrice } },
                { new: true }
            )
            data.amount = productPrice
            data.isFreeAppUser = false
            let orderDetail = await orderModel.create(data)
            res.send({ datails: orderDetail })
        }
    } else {
        data.amount = 0
        data.isFreeAppUser = true
        let orderDetails = await orderModel.create(data)
        res.send({ details: orderDetails })
    }
}



module.exports.createOrder = createOrder