const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let activities_s_Schema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  files : {
    type : String
  },
  student_id: {
    type: String
  },
  activity_id : {
    type : String
  },
  comment : {
    type : String
},

}, {
  collection: 'activities_student'
})

module.exports = mongoose.model('Activities_Student', activities_s_Schema)