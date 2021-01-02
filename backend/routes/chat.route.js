const express = require('express');
const chatRoute = express.Router();

// chat model
let chatModel = require('../models/message');

chatRoute.route('/').get((req, res) => {
  chatModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 // list chat
 chatRoute.route('/list-chat/:tid&&:cid&&:sid').get((req, res) => {
  chatModel.find({'tid' :req.params.tid,'cid' :req.params.cid,'sid' :req.params.sid},(error, data) => {
     if (error) {
       console.log(error);
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
// create chat
chatRoute.route('/create-chat/:tid&&:cid&&:sid').post((req, res, next) => {
  const ob ={
    msg : req.body.msg,
    tid : req.params.tid,
    sid : req.params.sid,
    cid : req.params.cid,
    q : req.body.q
  };
  chatModel.create(ob, (error, data) => {
    if (error) {
      console.log(error)
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = chatRoute;