const express = require('express');
const adminRoute = express.Router();

let adminModel = require('../models/Admin');

adminRoute.route('/').get((req, res) => {
    adminModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })


adminRoute.route('/login').post((req, res, next) => {
  adminModel.find({username :req.body.adm_no,password:req.body.password} ,(error, data) => {
  if (error) {
    console.log("not fund") 
    return next(error)
  } else {
    if(data == null){
        console.log(data)
      res.status(201).json({
      message : "not found",
      user : 0
    })

    }
    else{
    console.log("name and mail find")
    res.status(201).json({
      message : "found",
      user : data._id
    })
    }
  }
})
});

  







module.exports = adminRoute;