<template>
<div>
  <tbar/>
    <div class="row" height=0>
   <div class="col-sm-3">
  <sbar/>
   </div>
  <div class="col-sm-8">
        <v-toolbar color="blue" dark flat>
                <v-toolbar-title class="text-uppercase">Quiz</v-toolbar-title>
        </v-toolbar>
          <v-container fluid fill-height>
               <v-layout align-center justify-center>
                    <v-flex xs12 sm16 md8>
                         <v-form>
                              <v-text-field label="Name" v-model="quiz.name" outlined></v-text-field>
                               <v-dialog ref="dialog1" v-model="modal" :return-value.sync="date" persistent width="290px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="quiz.start_date" label="Start Date" prepend-icon="mdi-calendar" readonly 
                                        v-bind="attrs" v-on="on" outlined></v-text-field>
                                    </template>
                                    <v-date-picker v-model="quiz.start_date" scrollable name="Start date">
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog1.save(quiz.start_date)"> OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                                 <v-dialog ref="dialog2" v-model="modal2" :return-value.sync="time" persistent width="290px">
                                     <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="quiz.start_time" label="Start time" prepend-icon="mdi-clock-time-four-outline"
                                        readonly v-bind="attrs" v-on="on" outlined></v-text-field>
                                     </template>
                                     <v-time-picker v-model="quiz.start_time" scrollable name="Start time">
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog2.save(time1)" >OK</v-btn>
                                     </v-time-picker>
                                  </v-dialog>
                                 <v-dialog ref="dialog" v-model="modal1" :return-value.sync="date" persistent width="290px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="quiz.end_date" label="End date" prepend-icon="mdi-calendar" readonly 
                                        v-bind="attrs" v-on="on" outlined></v-text-field>
                                    </template>
                                    <v-date-picker v-model="quiz.end_date" scrollable name="End date">
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="modal1 = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog.save(date2)"> OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                                <v-dialog ref="dialog4" v-model="modal3" :return-value.sync="time" persistent width="290px">
                                     <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="quiz.end_time" label="End time" prepend-icon="mdi-clock-time-four-outline"
                                        readonly v-bind="attrs" v-on="on" outlined></v-text-field>
                                     </template>
                                     <v-time-picker v-model="quiz.end_time" scrollable name="End time">
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="modal3= false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog4.save(time2)" >OK</v-btn>
                                     </v-time-picker>
                                  </v-dialog>
                             <v-toolbar color="#4A148C" dark flat>
                                            <v-toolbar-title>Questions and Options</v-toolbar-title>
                                          </v-toolbar>
                             
                               <br><br>
                                        <div v-for="(find, index) in quiz.questions" :key="index" :step="index">
                                        <v-card class="mb-12" color="grey lighten-3" >
                                          <v-spacer></v-spacer>
                                          <v-toolbar color="red" dark flat>
                                            <v-toolbar-title>Question {{index+1}}</v-toolbar-title>
                                          </v-toolbar>
                                           <v-text-field label="Question" v-model="find.question" solo></v-text-field>
                                           <v-text-field label="Option A"  v-model="find.optionA" solo></v-text-field>
                                           <v-text-field label="Option B" solo v-model="find.optionB"></v-text-field>
                                           <v-text-field label="Option C" solo v-model="find.optionC"></v-text-field>
                                           <v-text-field label="Option D" solo v-model="find.optionD"></v-text-field>
                                           <v-toolbar color="green" dark flat>
                                            <v-toolbar-title>Correct Answer</v-toolbar-title>
                                          </v-toolbar>
                                          <v-radio-group v-model="find.correct_option" row >
                                            <v-radio label="Option A" color="green" value="A"></v-radio>
                                            <v-radio label="Option B" color="green" value="B"></v-radio>
                                            <v-radio label="Option C" color="green" value="C"></v-radio>
                                            <v-radio label="Option D" color="green" value="D"></v-radio>
                                          </v-radio-group>
                                        </v-card>
                                        </div>
                                      
                                       <v-btn color="#4A148C" fab dark @click="addQuestion"> <v-icon dark>mdi-plus</v-icon></v-btn>
                                  
                         </v-form>
                         <v-card-actions>
                             <v-spacer></v-spacer>
                             <v-btn dark color="blue" @click="handleform">create</v-btn>
                         </v-card-actions>
                          <br><br>
                    </v-flex>
               </v-layout>
          </v-container>    
  </div></div></div>
</template>

<script>
import axios from "axios";
import sbar from "./sidebar.vue";
import tbar from "./teacher_head.vue";
  export default {
     components: {
     sbar,
     tbar
    },
    data : ()=> ({
        date1: new Date().toISOString().substr(0, 10),
        date2: new Date().toISOString().substr(0, 10),
        e1: 1,
        time1: null,
        modal2: false,
        model1 : false,
        steps: 5,
        modal : false,
        model3 : false,
        quiz: {
          name : '',
          start_date : new Date().toISOString().substr(0, 10),
          start_time : '',
          end_date : new Date().toISOString().substr(0, 10),
          end_time : '',
          num : '',
          questions :[] /*{
            question: '',
            optionA :'',
            optionB : '',
            optionC : '',
            optionD : '',
            correct_option : ''
          }*/
        }
    }),
    methods: {
       addQuestion: function () {
         this.quiz.questions.push({});
    },
      handleform(){
         let apiURL = `http://localhost:2000/api/quiz/create-quiz/${this.$route.params.tid}&&${this.$route.params.cid}`;

      axios
        .post(apiURL, this.quiz)
        .then(() => {
         this.$router.push(`/classmenu/${this.$route.params.tid}&&${this.$route.params.cid}`);
        })
        .catch((error) => {
          console.log(error);
        });
    
      }
    },
  }
</script>



