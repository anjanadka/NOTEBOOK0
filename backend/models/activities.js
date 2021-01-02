const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let activitiesSchema = new Schema({
  name : {
    type : String
  },
  desc : {
    type : String
  },
  teacher_id : {
      type : String
  },
  class : {
      type : String
  },
  div:{
      type : String
  }

}, {
  collection: 'activities'
})

module.exports = mongoose.model('Activities', activitiesSchema)