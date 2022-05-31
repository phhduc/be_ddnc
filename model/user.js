const { numberParser } = require('config/parser')
const mongoose = require('mongoose')

const User = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    username:{
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'http://res.cloudinary.com/dv4dqguu2/image/upload/v1637291457/nrkys74dbxdbda8xx78m.png'
    },
    role:{
        type: String,
        default: 'user'
    },
    gender: {type: String, default: 'male'},
    mobile: {type:String, default: ''},
    address: {type: String, default: ''},
    room: {type: Number}
}, {timestamps: true})
module.exports = mongoose.model('User', User)