const path = require('path')
const express = require('express')
const Readroute = require('./read')
const app = express()
const port = process.env.port || 3000
const rootsrc = path.join(__dirname, './resources')
app.use(express.static(rootsrc))
const viewspath = path.join(__dirname, './Templates/views')
app.set('views', viewspath)
app.set('view engine', 'hbs')
app.use(Readroute)
app.listen(port, () => {
    console.log('port has been started on ' + port)
})