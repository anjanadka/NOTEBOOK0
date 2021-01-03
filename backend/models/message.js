const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MessageSchema = new Schema({
  msg : String,
  tid : String,
  sid : String,
  cid : String,
  q : Boolean, //idicate teacher or student q=0 -> teacher q=1 -> student
},{
collection : 'Chat'

})

module.exports = mongoose.model('message',MessageSchema);