const express = require('express');
const attRoute = express.Router();

let attModel = require('../models/attendence');
attRoute.route('/new_attendence/:tid&&:class&&:div').post((req, res, next) => {
    const myobj ={ 
       date : req.body.date,
       stime : req.body.start_time,
       etime  : req.body.end_time,
        class : req.params.class,
        div : req.params.div,
        tid : req.params.tid

      };  
    
      attModel.create(myobj, (error, data) => {
        if (error) {
         console.log(error)
        } else {
          res.json(data)
          console.log(data) 
        }
      })
  
  });

  attRoute.route('/').get((req, res) => {
    attModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 attRoute.route('/find_att/:class&&:div&&:date').get((req, res) => {
    console.log(req.params)
    attModel.findOne({class:req.params.class,div:req.params.div, date:req.params.date},(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
       console.log(data)
     }
   })
  })

  attRoute.route('/find_date_att/:tid&&:class&&:div').get((req, res) => {
    
    attModel.find({class:req.params.class,div:req.params.div, tid:req.params.tid},(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
       console.log(data)
     }
   })
  })

  attRoute.route('/one-att/:aid').get((req, res) => {
    attModel.findById(req.params.aid,(error,data) =>{
        if(error){
            return (error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
  })

 module.exports = attRoute;