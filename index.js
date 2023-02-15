const express = require('express')
const app = express()
const cors = require('cors');
const router = require('./routes');
const { errorHandler } = require('./middleware');

app.use(cors())

const port = 3000;
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})