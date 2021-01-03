const express = require('express');
const reportRoute = express.Router();

//homework student model
let hwModel = require('../models/homework_student');
//assignment student model
let aModel = require('../models/Assignment_student');

reportRoute.route('/mark_find/:sid&&:cid').get((req, res) => {
    hwModel.find({class: req.params.cid, student_id: req.params.sid},(error, data) => {
       if (error) {
         return next(error)
       } else {
           console.log(data);
           aModel.find({class: req.params.cid, student_id: req.params.sid},(error1, data1) => {
             if(error1){
               return next(error1)
             }
             else{
           var a =[];
           var b=[];
           var x=0;
           var f=0;
           const n = data.length;
           const k =data1.length;
           for(var i=0; i<n ; i=i+1){
             if(data[i].mark != -1){
             f=0;
             for(var j=x; j<k ; j=j+1){
               if(data1[j].mark != -1){
               if(data[i].date > data1[j].date){
                a.push(data1[j].mark *10);
                b.push(data1[j].date);
               }
               if(data1[j].date==data[i].date){
                 x=x+1;
                 f=1;
                a.push((data[i].mark  + data1[j].mark)*10/2);
                b.push(data[i].date);
               }}
             }
             if(f==0){
              a.push(data[i].mark *10);
              b.push(data[i].date);
             }}
           }
           for(;x<k;x++){
            if(data1[x].mark != -1){
              a.push(data1[x].mark *10);
              b.push(data1[x].date);
            }
           }
           const t= a.length;
           var s ;
           for(var i=0;i<t;i++){
             for(var j=i+1; j<t;j++){
               if(b[i]>b[j]){
                 s = b[i];
                 b[i]=b[j];
                 b[j]=s;
                 s = a[i];
                 a[i]=a[j];
                 a[j]=s;
               }
             }
           }
           const d={
             a : a,
             b: b
           }
        console.log(d)
         res.json(d)
       }
     })
    }})
   })


   module.exports =  reportRoute;