const express = require('express');
const teacherRoute = express.Router();
const mongoose = require('mongoose');

// teacher model
let TeacherModel = require('../models/Teacher');

let classModel = require('../models/classes');

teacherRoute.route('/').get((req, res) => {
    TeacherModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 teacherRoute.route('/create-teacher').post((req, res, next) => {
  const id = new mongoose.Types.ObjectId();
  const t = new TeacherModel({
    _id: id,
    t_id : req.body.t_id,
    name : req.body.name,
    password : req.body.password,
    class_teacher : req.body.class_teacher,
  });

  t.save().then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
  const n=req.body.classes.length;
  for(var i = 0; i < n; i++){
    const c = new classModel({
      t_id : id,
      class : req.body.classes[i].class,
      div : req.body.classes[i].div,
      subject : req.body.classes[i].subject
    });
    classModel.create(c, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
    }
  })
  res.json("sucess");
}
});

//login

teacherRoute.route('/add-class/:id').post((req, res, next) => {
  const n=req.body.class1.length;
  for(var i = 0; i < n; i++){
    const c = new classModel({
      t_id : req.params.id,
      class : req.body.class1[i].class,
      div : req.body.class1[i].div,
      subject : req.body.class1[i].subject
    });
    classModel.create(c, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
    }
  })
  res.json("sucess");
}
});

teacherRoute.route('/login-teacher').post((req, res, next) => {
  TeacherModel.findOne({t_id : req.body.t_id, password : req.body.password} ,(error, data) => {
  if (error) {
    console.log("not fund") 
    return next(error)
  } else {
    if(data == null){
      console.log("not found")
      res.status(201).json({
      message : "not found",
      user : 0
    })

    }
    else{
    console.log("name find")
    res.status(201).json({
      message : "found",
      user : data._id
    })
    }
  }
})
});
//edit-teacher
teacherRoute.route('/edit-teacher/:id').get((req, res) => {
    TeacherModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

teacherRoute.route('/edit-class/:id').get((req, res) => {
  classModel.find({t_id : req.params.id}, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

//class-menu
teacherRoute.route('/class-menu/:tid').get((req, res) => {
  TeacherModel.findById(req.params.tid, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Update teacher
teacherRoute.route('/update-teacher/:id').post((req, res, next) => {
    TeacherModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Teacher successfully updated!')
    }
  })
})

teacherRoute.route('/update-class/:id').post((req, res, next) => {
  classModel.findByIdAndUpdate(req.params.id, {
  $set: req.body
}, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.json(data)
    console.log('class successfully updated!')
  }
})
})

// Delete teacher
teacherRoute.route('/delete-teacher/:id').delete((req, res, next) => {
    TeacherModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("sucess")
    }
  })
  classModel.deleteMany({t_id : req.params.id },(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
})
})

teacherRoute.route('/delete-class/:id').delete((req, res, next) => {
  classModel.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
  }
})
})

module.exports = teacherRoute;