require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
mongoose.Promise = global.Promise


mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log("Succesfully Connected to MongoDB")
})

connection.on('error', (error) => {
    console.log("Mongo Error ", error )
})

app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('App is listening on port: ', PORT)
})