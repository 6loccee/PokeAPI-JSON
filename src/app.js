const express = require('express')
const routes = require('./routes/index')
const path = require('path')
const morgan = require('morgan')
const app = express()

app.use(express.static(path.join(__dirname, 'views')))
app.use(express.json())
app.use(morgan('dev'))

app.use('/', routes)

module.exports = app
