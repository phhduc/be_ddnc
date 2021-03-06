const User = require('../model/user')
const jwt = require('jsonwebtoken')
const { decode } = require('jsonwebtoken')
const user = require('../model/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if(!token) return res.status(400).josn({msg: 'Invalid Authentication'})
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN)
        if(!decoded) return res.status(400).josn({msg: 'Invalid Authentication'})

        const currentUser = await User.findOne({_id: decoded.id})
        req.current_user = currentUser
        next()
    } catch(err){
        return res.status(500).json({msg: err.message})
    }
}
module.exports = auth