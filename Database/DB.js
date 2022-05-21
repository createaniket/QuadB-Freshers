// mongodb+srv://QuadB:Aniket@007@crypto.kbgxe.mongodb.net/test

const urll= "mongodb+srv://QuadB:Aniket007@crypto.kbgxe.mongodb.net/test"

const mongoose = require('mongoose')

mongoose.connect(urll, {
    useNewUrlParser:true,
})
