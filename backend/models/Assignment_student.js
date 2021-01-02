const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let assignment_s_Schema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  files : {
    type : String
  },
  mark : {
    type : Number
  },
  date : {
    type : String
  },
  student_id: {
    type: String
  },
  assignment_id : {
    type : String
  },
  class : {
      type : String
  },
  status : {
    type : Boolean
},

}, {
  collection: 'assignment_student'
})

module.exports = mongoose.model('Assignment_Student', assignment_s_Schema)