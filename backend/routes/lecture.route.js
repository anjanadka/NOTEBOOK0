const express = require('express');
const lectureRoute = express.Router();

// Q&a model
let lectureModel = require('../models/lecture');

lectureRoute.route('/').get((req, res) => {
    lectureModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 lectureRoute.route('/create-lecture/:tid&&:cid').post((req, res, next) => {
  const myobj ={ 
      name: req.body.name,
     des: req.body.desc,
     link : req.body.l, 
     teacher_id  : req.params.tid,
     class : req.params.cid
    };  
    lectureModel.create(myobj, (error, data) => {
      if (error) {

        return next(error)
      } else {
        res.json(data)
        console.log(data) 
      }
    })

});


lectureRoute.route('/find_link/:tid&&:cid').get((req, res) => {
  lectureModel.find({teacher_id:req.params.tid,class:req.params.cid},(error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
     console.log(data)
   }
 })
})

module.exports = lectureRoute;