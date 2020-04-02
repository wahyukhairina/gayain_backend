const express = require('express')
const router = express.Router()

const ProvinceController = require('../controllers/provinces')
const CityController = require('../controllers/cities')
const CostController = require('../controllers/cost')

router
  .get('/province', ProvinceController.all_provinces)
  .get('/province/:id', ProvinceController.province)
  .get('/city/', CityController.all_cities)
  .get('/city/:id/', CityController.city)
  .get('/city/:id/province/:province', CityController.city)
  .post('/cost/', CostController.cost)

module.exports = router
