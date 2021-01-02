const express = require('express');
const studentRoute = express.Router();
const teacherRoute = express.Router();
// Student model
let StudentModel = require('../models/Student');
//teacher model
let classModel = require('../models/classes');
studentRoute.route('/').get((req, res) => {
    StudentModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 studentRoute.route('/create-student').post((req, res, next) => {
    StudentModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(req.body)
    }
  })
});


studentRoute.route('/login-student').post((req, res, next) => {
  StudentModel.findOne({adm_no :req.body.adm_no,password:req.body.password} ,(error, data) => {
  if (error) {
    console.log("not fund") 
    return next(error)
  } else {
    if(data == null){
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
//list-chat
studentRoute.route('/list-chat/:tid&&:cid').get((req, res) => {
    classModel.findOne({_id :req.params.cid}, (error, data) =>{
      if(error){
        console.log(error)
        return next(error)
        
      }else{
       // console.log(data)
        StudentModel.find({'class':data.class, 'div':data.div} ,(error1, data1) => {
          if(error1){
            console.log(error1)
            return next(error1);
          }
          else{
            res.json(data1);
          }
      });
      }
    })
  
  
})

//list-class
studentRoute.route('/list-class/:id').get((req, res) => {
  StudentModel.findById(req.params.id, (error, data) => {
  if (error) {
    return next(error)
  } else {
    console.log(data);
    classModel.find({'class':data.class, 'div':data.div},(error1,data1)=>{
      if(error1){
          return next(error1)
      }else{
        console.log(data1);
        res.json(data1);
      }
    }
    )
  }
})
})
studentRoute.route('/edit-student/:id').get((req, res) => {
   StudentModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update student
studentRoute.route('/update-student/:id').post((req, res, next) => {
  StudentModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Delete student
studentRoute.route('/delete-student/:id').delete((req, res, next) => {
  StudentModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = studentRoute;