const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    year : {type:Number,default:2021},
    totalPages : Number,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    stockAvailable : Boolean,
    
},{timestamps:true})


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
