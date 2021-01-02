const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let quizSchema = new Schema({
  name : {
    type:String
  },
    start_date: {
    type: String
  },
    start_time:{
    type: String
  },
  end_date: {
    type : String
  },
  end_time: {
    type : String
  },
  questions : [{
    question: String,
    optionA : String,
    optionB : String,
    optionC : String,
    optionD : String,
    correct_option : String
  }],
  teacher_id :{
    type: String
  },
  class : {
    type : String
  },
}, {
  collection: 'quiz'
})

module.exports = mongoose.model('Quiz', quizSchema)