const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let qaSchema = new Schema({
  question : {
    type:String
  },
    answer: {
    type: String
  },
  teacher_id :{
    type: String
  },
  class : {
    type : String
  },
}, {
  collection: 'qa'
})

module.exports = mongoose.model('Qa', qaSchema)