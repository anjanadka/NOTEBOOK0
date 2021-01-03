const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let annoncementSchema = new Schema({
  title:{
      type : String
  },
  desc : {
      type : String
  }

}, {
  collection: 'annoncement'
})

module.exports = mongoose.model('Announcement', annoncementSchema)