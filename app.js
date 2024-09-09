require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')

const app = express()

app.use(express.static('public'))

// template engineer
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 8000

app.use('/', require('./server/routes/main'))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
