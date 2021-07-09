const PORT = 8080

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const { randomFarhat } = require('./farhat.js')

app.get('/', async (request, response) => {
    const farhat = await randomFarhat()

    response.json(farhat)
})

function init() {
    app.listen(PORT)
    console.log(`API started, port: ${PORT}`)
}
init()