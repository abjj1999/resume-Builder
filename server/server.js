const express = require('express')
const app = express()
const connectDB = require('./dbConnect')
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connectDB()

const authRouter = require('./routes/auth')
app.use('/api/auth', authRouter)
app.use('/api/update', require('./routes/profile'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
