const PORT = 8080

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const gis = require('g-i-s')

app.get('/', async (request, response) => {
    gis('farhát', (err, result) => {
        if (err) {
            console.error(err)
            return
        }
    
        const random = result[Math.floor(Math.random() * result.length)]
        
        response.json(random)
    })
})

function init() {
    app.listen(PORT)
    console.log(`API started, port: ${PORT}`)
}
init()