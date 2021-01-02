const express = require('express');
const actRoute = express.Router();

let actModel = require('../models/activities');
actRoute.route('/new_activity/:tid&&:class&&:div').post((req, res, next) => {
    const myobj ={ 
       name : req.body.name,
       desc : req.body.desc,
      teacher_id  : req.params.tid,
     class : req.params.class,
     div : req.params.div

      };  
      actModel.create(myobj, (error, data) => {
        if (error) {
         console.log(error)
        } else {
          res.json(data)
          console.log(data) 
        }
      })
  
  });

  actRoute.route('/').get((req, res) => {
    actModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 actRoute.route('/find_activities/:class&&:div').get((req, res) => {
    console.log(req.params)
    actModel.find({class:req.params.class,div:req.params.div},(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
       console.log(data)
     }
   })
  })

  actRoute.route('/one-activity/:aid').get((req, res) => {
    actModel.findById(req.params.aid,(error,data) =>{
        if(error){
            return (error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
  })

 module.exports = actRoute;