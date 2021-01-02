const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teacherSchema = new Schema({
  _id : mongoose.Schema.Types.ObjectId,
  t_id: {
    type: String
  },
  name: {
    type: String
  },
  password: {
    type: String
  },
  class_teacher: ({
    class_c: {
      type: String
    },
    class:{
      type: String
    },
   div : String
  }),
}, {
  collection: 'teacher'
})

module.exports = mongoose.model('Teacher', teacherSchema)