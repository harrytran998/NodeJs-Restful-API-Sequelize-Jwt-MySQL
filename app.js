const morgan = require('morgan')
const express = require('express')
const bitchs = require('./routes/bitchs')

const app = express()
app.use(bitchs)
app.use(morgan("short"))

let PORT = process.env.PORT || 3004
app.listen(PORT, () => {
    console.log(`Starting `)
})