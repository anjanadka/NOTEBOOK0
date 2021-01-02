const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let notesSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name : {
    type : String
  },
  desc : {
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
  collection: 'notes'
})

module.exports = mongoose.model('Notes', notesSchema)