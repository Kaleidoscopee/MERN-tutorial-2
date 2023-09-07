const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000  //fetches port from .env file and if it fails goes to 5000

const app = express()

app.use('/api/goals2', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))