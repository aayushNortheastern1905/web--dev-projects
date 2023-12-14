require('dotenv').config()
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const sneakerRouter = require('./routers/sneaker')
const cors = require('cors');

const app = express()
const port = process.env.PORT

app.use(cors());
app.use(express.json())
app.use(userRouter)
app.use(sneakerRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})