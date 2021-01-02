let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  router = express.Router();

const DIR = './public/Activity_Student/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    let name = file.originalname.split('.');
    const fileName = name[0] + '-' + Date.now() + '.' + name[1];
    cb(null, fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "application/pdf" || file.mimetype == "application/vnd.oasis.opendocument.text" || file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype =="video/mp4") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .pdf, .odt, .docx, .png, .jpg and .jpeg  format allowed!'));
    }
  }
});

// User model
let Activities = require('../models/activities_student');
let student = require('../models/Student');

router.post('/file-upload/:sid&&:aid', upload.single('files'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')

  const activities = new Activities({
    _id: new mongoose.Types.ObjectId(),
    files: url + '/public/Activity_Student/' + req.file.filename,
    student_id: req.params.sid,
    activity_id: req.params.aid,
   comment : null
  });
  activities.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "Done upload!",
      assCreated: {
        _id: result._id,
        files: result.files
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
})

router.get("/", (req, res, next) => {
  Activities.find().then(data => {
    res.status(200).json({
      message: "Data fetched!",
      users: data
    });
  });
});




router.route('/find_activities/:aid').get((req, res) => {
    Activities.find({ activity_id: req.params.aid }, (error, data) => {
    if (error) {
      return next(error)
    }
    else {
      console.log(data)
      var array = [];
      const n = data.length;
      for (var i = 0; i < n; i = i + 1) {
        const id = data[i]._id;
        const j = i
        const f = data[i].files;
        const m = data[i].comment;
        student.findById(data[i].student_id, (error, data1) => {
          if (error) {
            console.log("error");
          }
          else {
            array.push({
              _id: id,
              roll_no: data1.roll_no,
              name: data1.name,
              files: f,
              comment : m,
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
  })
})


router.route('/update_activities/:id').post((req, res, next) => {
    Activities.findByIdAndUpdate(req.params.id, {
    "comment": req.body.comment
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log(' successfully updated!', data)
    }
  })
})

router.route('/find_sact/:sid&&:aid').get((req, res) => {
  Activities.findOne({ student_id: req.params.sid, activity_id: req.params.aid }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
})

module.exports = router;