const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: String,
    balance: { type: Number, default: 1000 }, // Default balance at user registration is 100
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },

    isFreeAppUser: { type: Boolean, default: true }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array