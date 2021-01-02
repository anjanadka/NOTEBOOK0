const express = require('express');
const attRoute = express.Router(); 
let atModel =require('../models/attendence');
let attModel = require('../models/st_attendence');
attRoute.route('/new_st_attendence/:sid&&:class&&:div').post((req, res, next) => {
    const myobj ={ 
       date : req.body.date,
       sid : req.params.sid,
        class : req.params.class,
        div : req.params.div,
        attendence_id : req.body._id

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

 attRoute.route('/check_satt/:sid&&:date').get((req, res) => {
    attModel.findOne({sid:req.params.sid,date:req.params.date},(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
       console.log(data)
     }
   })
  })

  attRoute.route('/att_cal/:sid&&:class&&:div').get((req, res) => {
    attModel.find({sid:req.params.sid},(error, data) => {
     if (error) {
       return next(error)
     } else {
        atModel.find({class:req.params.class, div:req.params.div},(error1, data1) => {
            if (error1) {
                return next(error1)
              }else{
                  const s = data.length;
                  const t = data1.length;
                  var r = (s/t)*100;
                  res.json(r)
              }
        })
     }
   })
  })

  attRoute.route('/find_satt/:class&&:div').get((req, res) => {
    attModel.find({class:req.params.class,div:req.params.div},(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
       console.log(data)
     }
   })
  })

  let student = require('../models/Student');
  attRoute.route('/find_students/:aid').get((req, res) => {
    attModel.find({ attendence_id: req.params.aid }, (error, data) => {
    if (error) {
      return next(error)
    }
    else {
        if(data!=null){
      console.log(data)
      var array = [];
      const n = data.length;
      for (var i = 0; i < n; i = i + 1) {
        const id = data[i]._id;
        const j = i
        student.findById(data[i].sid, (error, data1) => {
          if (error) {
            console.log("error");
          }
          else {
            array.push({
              _id: id,
              roll_no: data1.roll_no,
              name: data1.name,
            });
            console.log(j, "data", array)
            if (j == n - 1) {
              console.log(array)
              res.json(array)
            }
          }
        })
      }
    }
    }
  })
})


 module.exports = attRoute;