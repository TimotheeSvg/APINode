import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log("1")
    next()
})

app.use((req, res, next) => {
    console.log("2")
    next()
})

app.get('/', (req, res, next) => {
    res.send('hello ESGI')
})


app.listen(3001)