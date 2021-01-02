const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let homework_s_Schema = new Schema({
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
  hw_id : {
    type : String
  },
  class : {
      type : String
  },
  status : {
    type : Boolean
},

}, {
  collection: 'homework_student'
})

module.exports = mongoose.model('Homework_Student', homework_s_Schema)