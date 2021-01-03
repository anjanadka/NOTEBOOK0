const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let st_attendenceSchema = new Schema({
  date : {
    type : String
  },
  sid : {
      type : String
  },
  class : {
      type : String
  },
  div:{
      type : String
  },
  attendence_id :{
      type : String
  }

}, {
  collection: 'student_attendence'
})

module.exports = mongoose.model('student_attendence', st_attendenceSchema)