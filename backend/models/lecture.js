const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let lectureSchema = new Schema({
  name : {
    type:String
  },
    des: {
    type: String
  },
    link : {
        type : String
  },
  teacher_id :{
    type: String
  },
  class : {
    type : String
  },
}, {
  collection: 'lecture_link'
})

module.exports = mongoose.model('lecture', lectureSchema)