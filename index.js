const express = require('express');
require('dotenv').config()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const PORT = process.env.PORT || 3000


const MONGO_URI = process.env.DB_URL
mongoose.connect(MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}, 
err =>{
  if(err) throw err;
  console.log('connected to db')
})

app.get('/checkapi', (req, res)=>{
  return res.send('OK')
})

app.listen(PORT, () =>{
  console.log("server is running")
})
