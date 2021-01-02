<template>
<div>
     <tbar />
     <div class="row" height=0>
   <div class="col-sm-3">
  <sbar/>
   </div>
  <div class="col-sm-8">
        <v-toolbar color="orange" dark flat>
                <v-toolbar-title class="text-uppercase">questions & Answers</v-toolbar-title>
        </v-toolbar>
          <v-container fluid fill-height>
               <v-layout align-center justify-center>
                    <v-flex xs12 sm12 md6>
                         <v-form>
                              <v-textarea label="Question" v-model="qa.question" solo></v-textarea>
                              <v-textarea label="Answer"  v-model="qa.answer" solo></v-textarea>
                         </v-form>
                         <v-card-actions>
                             <v-spacer></v-spacer>
                             <v-btn dark color="orange" @click="handleform()">SAVE</v-btn>
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
    name: "sb",
    components: {
     sbar,
     tbar
    },
     data()  {
         return  {
              qa : {
                   question : '',
                   answer :''
              }

         }
    },
    methods : {
         handleform(){
                let apiURL = `http://localhost:2000/api/qa/create-qa/${this.$route.params.tid}&&${this.$route.params.cid}`;
                axios
                     .post(apiURL, this.qa)
                     .then((res) => {
                           this.$router.push(`/classmenu/${this.$route.params.tid}&&${this.$route.params.cid}`);

                 this.qa = {
                   question : '',
                   answer :''
              };
              console.log(res);
                     }).catch((error) => {
          console.log(error);
        });
         }
    }
  }
</script>


