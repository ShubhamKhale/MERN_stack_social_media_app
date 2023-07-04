const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/auth');
const dotenv = require('dotenv').config()
const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('db connection is a success');
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/auth', authRouter);

app.listen(5000, () => console.log('Server has been connected successfully'))