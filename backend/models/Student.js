const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  adm_no : {
    type:String
  },
  name: {
    type: String
  },
  password :{
    type: String
  },
  roll_no : {
    type : Number
  },
  class: {
    type: Number
  },
  div: {
    type: String
  },
}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)