const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const Publisermodel=require("../models/publisermodel")
let mongoose = require("mongoose")


const createNewBook= async function (req, res) {
    let book  = req.body
    let author1 = book.author
    let publisher1= book.publisher
    let isValid= mongoose.Types.ObjectId.isValid(author1)
    let isValidp=mongoose.Types.ObjectId.isValid(publisher1)

    if(isValid==false){
        return res.send("invalid length of author")
    }else if (isValidp==false){
        return res.send("invalid length of publiserid")
    }
    let idfromauthor = await authorModel.findById(author1)
    let idfrompublisher=await Publisermodel.findById(publisher1)
    if(!idfromauthor){
        return res.send("this author id not present")
    }else if (!idfrompublisher){
        return res.send("this publisherid not present")
    }else{
        let bookcreated= await bookModel.create(book)
        res.send({data:bookcreated})
    }
}
const getBooksData = async function(req,res){
    let books = await bookModel.find().populate("author").populate("publisher")
    res.send({data:books})
}
const getBooksWithAuthorAndPubliser = async function (req, res) {
    let data = await Publisermodel.find({name:["penguin","HarperCollins"]}).select({_id:1})
    let bookid = await bookModel.updateMany({publisher:data},{$set:{isHardCover:true, new : true}},{upsert : true})
    let authorId = await authorModel.find({ratings : {$gt : 3.5}}).select({_id : 1})
    let rating1 = await bookModel.updateMany({author :authorId},{$inc : {price :10 }},{new : true})
    res.send({data:bookid,rating1})
    }


module.exports.createNewBook= createNewBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorAndPubliser = getBooksWithAuthorAndPubliser
