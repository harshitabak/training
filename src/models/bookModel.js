const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        required:true,
        type: ObjectId,
        ref: "Author"
    }, 
    price: Number,
    ratings: Number,
    publisher:{
        type:ObjectId,
        ref:"Publiser"
    },
    isHardCover :
    {default :false}


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
