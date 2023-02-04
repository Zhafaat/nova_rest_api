const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const port = 3000;
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})