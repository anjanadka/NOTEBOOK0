const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let classSchema = new Schema({
    t_id : String,
    class : String,
    div : String,
    subject : String
}, {
  collection: 'classes'
})

module.exports = mongoose.model('classes', classSchema)