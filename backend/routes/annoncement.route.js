const express = require('express');
const annoncementRoute = express.Router();

// Student model
let AnnoncementModel = require('../models/Annoncement');

annoncementRoute.route('/').get((req, res) => {
    AnnoncementModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 annoncementRoute.route('/create-announcement').post((req, res, next) => {
    AnnoncementModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = annoncementRoute;