const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let textbookSchema = new Schema({
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
  collection: 'textbookandreferences'
})

module.exports = mongoose.model('Textbook', textbookSchema)