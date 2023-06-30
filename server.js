'use strict';

const express = require('express')
const path = require('path')


const app = express()

// Constants
const PORT = process.env.PORT || 8080
const HOST = '0.0.0.0'

// App
app.use(express.static('public'))
app.get('/', function(req, res) {
    res.sendFile('public/index.html' , { root : __dirname});
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
})