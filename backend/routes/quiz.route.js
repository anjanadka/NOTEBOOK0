const express = require('express');
const quizRoute = express.Router();


let quizModel = require('../models/quiz');

quizRoute.route('/').get((req, res) => {
    quizModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 quizRoute.route('/create-quiz/:tid&&:cid').post((req, res, next) => {
    const myobj ={ 
       name : req.body.name,
       start_date: req.body.start_date,
        start_time: req.body.start_time,
      end_date: req.body.end_date,
      end_time: req.body.end_time,
      questions : req.body.questions,
      teacher_id  : req.params.tid,
     class : req.params.cid

      };  
      quizModel.create(myobj, (error, data) => {
        if (error) {
  
          return next(error)
        } else {
          res.json(data)
          console.log(data) 
        }
      })
  
  });

  quizRoute .route('/find_quiz/:tid&&:cid').get((req, res) => {
    quizModel.find({teacher_id:req.params.tid,class:req.params.cid},(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
       console.log(data)
     }
   })
  })

  quizRoute .route('/item_quiz/:qid').get((req, res) => {
    quizModel.findById(req.params.qid,(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
       console.log(data)
     }
   })
  })
  
  module.exports = quizRoute;