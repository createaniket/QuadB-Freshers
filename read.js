const express = require('express')
const Data = require('./data')
const MongoClient = require('mongodb').MongoClient
const connecturl = 'mongodb+srv://QuadB:Aniket007@crypto.kbgxe.mongodb.net/test'
const router = new express.Router()
router.use(express.json())
// var database


const fn=()=>{
    return new Promise(async(resolve,reject)=>{
        try{
            MongoClient.connect(connecturl, { useNewUrlParser: true}, (error, result) => {
                if (error) throw error
                const database= result.db('test')
                resolve(database)
            })
        }catch(e){
            reject('Error while connecting to database')
        }
    })
}

router.get('/', async(req, res) => {
    try{
        const database=await fn()
        database.collection('datas').find({}).toArray((error, result) => {
           if(error)throw error
            number=0;
            result=result.map((res)=>{
                return {...res,index:++number}
            })
            res.render('index',{
                result

            })
            // console.log(result)

        })
    }catch(e){
        console.log(e)
        res.send(e)
    }
})
module.exports = router