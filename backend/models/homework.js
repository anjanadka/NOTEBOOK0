const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let homeworkSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name : {
    type : String
  },
  desc : {
    type : String
  },
  date : {
    type : String
  },
    files: {
    type: String
  },
  teacher_id : {
      type : String
  },
  class : {
      type : String
  },
}, {
  collection: 'homework'
})

module.exports = mongoose.model('Homework', homeworkSchema)