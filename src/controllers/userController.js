const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    let reqapi= req.body.api
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }


const commonHandler = async function(req, res, next) {
    console.log('I am inside the common route handler')
    next()
    //res.send({status: true, msg: "Hi there!"})
}

module.exports.commonHandler = commonHandler



















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode