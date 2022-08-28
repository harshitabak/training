const { count } = require("console")
//const { getRandomValues } = require("crypto")
const orderModel = require("../models/orderModel")
const productmodel = require("../models/productmodel")
const userModel = require("../models/userModel")

const createOrder= async function (req, res) {
    let data = req.body
    let userId = data.userId
    let productId = data.productId
    if (!userId){
        return res.send({msg:"userid is mandatory in the request"})
    }else if (!productId){
        return res.send("please enter valid productid")
    }
    let UserId= await userModel.findById(userId)
    let ProductId = await productmodel.findById(productId)
    if (!UserId){
        return res.send("this user id not found in database")
    }else if (!ProductId){
        return res.send("this product id not found in database")
    }else{ }
    let token = req.headers.isfreeappuser
    console.log(token)
   let val = 0 
   // if isfreeappuse is true 
   if (token === "true"){
    data.amount = val
    data.isFreeAppUser = token
    let savedData = await orderModel.create(data)
    res.send ({data:savedData})
   }
   // if freeappuser is false
   else if (UserId.balance >= ProductId.price){
    let paisa =  await userModel.findOneAndUpdate({_id:userId} ,{$set :{balance:UserId.balance - ProductId.price}})
    console.log(paisa)
     
     data["amount"] = ProductId.price;
     data["isFreeAppUser"]= req.headers.isfreeappuser;
     let savedData =  await orderModel.create(data)
     res.send({msg : savedData})
   }else{
    res.send("Insufficient Balance")
   }
}
module.exports.createOrder= createOrder
