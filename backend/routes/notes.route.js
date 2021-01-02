let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  router = express.Router();

const DIR = './public/Notes/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    let name = file.originalname.split('.');
    const fileName = name[0]+ '-' + Date.now()+ '.' +name[1];
    cb(null, fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "application/pdf" || file.mimetype == "application/vnd.oasis.opendocument.text" || file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.mimetype =="image/png" || file.mimetype =="image/jpg" || file.mimetype =="image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .pdf, .odt, .docx, .png, .jpg and .jpeg  format allowed!'));
    }
  }
});

// User model
let Notes = require('../models/Notes');

router.post('/file-upload/:tid&&:cid', upload.single('files'), (req, res, next) => {
  console.log(req.body.name)
  const url = req.protocol + '://' + req.get('host')

  const notes = new Notes({
    _id: new mongoose.Types.ObjectId(),
    name : req.body.name,
    desc : req.body.desc,
    files: url + '/public/Notes/' + req.file.filename,
    teacher_id  : req.params.tid,
    class : req.params.cid

  });
  notes.save().then(result => {
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
    Notes.find().then(data => {
    res.status(200).json({
      message: "Data fetched!",
      users: data
    });
  });
});

router.route('/find_note/:tid&&:cid').get((req, res) => {
  Notes.find({teacher_id:req.params.tid,class:req.params.cid},(error, data) => {
   if (error) {
     return next(error)
   } else {                                                                                                                                                                                                                                                   
     res.json(data)
     console.log(data)
   }
 })
})

module.exports = router;