const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('db connection is a success')
})


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(process.env.PORT, () => console.log('Server has been connected successfully'))