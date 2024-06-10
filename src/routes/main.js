const { Router } = require('express')
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = Router()
const Detail = require('../models/detail.js')

routes.get('/', async function (req, res) {
  const detail = await Detail.find({})
  // console.log(detail[0]);
  res.render('index', { detail: detail[0] })
})

routes.get('/gallery', async function (req, res) {
  const detail = await Detail.find({})

  res.render('gallery', {
    detail: detail[0]
  })
})

module.exports = routes
