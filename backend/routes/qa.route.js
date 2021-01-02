const express = require('express');
const qaRoute = express.Router();

// Q&a model
let qaModel = require('../models/qa');

qaRoute.route('/').get((req, res) => {
    qaModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 qaRoute.route('/create-qa/:tid&&:cid').post((req, res, next) => {
  const myobj ={ 
      question : req.body.question,
     answer : req.body.answer,
     teacher_id  : req.params.tid,
     class : req.params.cid
    };  
    qaModel.create(myobj, (error, data) => {
      if (error) {

        return next(error)
      } else {
        res.json(data)
        console.log(data) 
      }
    })

});

qaRoute.route('/find_qa/:tid&&:cid').get((req, res) => {
  qaModel.find({teacher_id:req.params.tid,class:req.params.cid},(error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
     console.log(data)
   }
 })
})


module.exports = qaRoute;