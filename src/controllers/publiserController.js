const Publisermodel= require("../models/publisermodel")

const createPubliser= async function (req, res) {
    let publiser = req.body
    let publiserCreated = await Publisermodel.create(publiser)
    res.send({data: publiserCreated})

}





module.exports.createPubliser= createPubliser