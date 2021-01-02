const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let attendenceSchema = new Schema({
  date : {
    type : String
  },
  stime : {
    type : String
  },
  etime : {
      type : String
  },
  class : {
      type : String
  },
  div:{
      type : String
  },
  tid:{
      type : String
  }

}, {
  collection: 'attendence'
})

module.exports = mongoose.model('attendence', attendenceSchema)