const express = require('express')
const { config } = require('dotenv')
const hbs = require('hbs')
const mongoose = require('mongoose')

config()
const app = express()
const port = process.env.PORT | 2000
const routes = require('./routes/main.js')
const connectionString = process.env.MONGO_URL + process.env.DATABASE_NAME

app.use('/static', express.static('public'))
app.use('', routes)
app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials('views/partials')

// start server
startServer();

async function connectDB () {
  const response = await mongoose.connect(connectionString)
  console.log(`databse hosted at : ${response.connections[0].host}`)
}

async function startServer () {
  try {
    await connectDB()
    app.listen(port, function () {
      console.log('server is running on port ' + port)
    })
  } catch (err) {
      console.error(err);
      process.exit(1);
  }
}
