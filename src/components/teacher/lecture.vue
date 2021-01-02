<template>
<div>
     <tbar />
     <div class="row" height=0>
   <div class="col-sm-3">
  <sbar/>
   </div>
  <div class="col-sm-8">
        <v-toolbar color="black" dark flat>
                <v-toolbar-title class="text-uppercase">online class & video lectures</v-toolbar-title>
        </v-toolbar>
          <v-container fluid fill-height>
               <v-layout align-center justify-center>
                    <v-flex xs12 sm12 md6>
                         <v-form @submit.prevent="handleform"> 
                              <v-text-field label="Name" v-model="link.name" solo></v-text-field>
                              <v-textarea label="Description" v-model="link.desc" solo></v-textarea>
                              <v-text-field label="Link" v-model="link.l" solo></v-text-field>
                         </v-form>
                         <v-card-actions>
                             <v-spacer></v-spacer>
                             <v-btn dark color="black" @click="handleform">SAVE</v-btn>
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
              link : {
                   name : '',
                   desc :'',
                   l :''
              }

         }
    },
    methods : {
         handleform(){
               let apiURL = `http://localhost:2000/api/lecture_link/create-lecture/${this.$route.params.tid}&&${this.$route.params.cid}`;
                axios
                     .post(apiURL, this.link)
                     .then((res) => {
                           this.$router.push(`/classmenu/${this.$route.params.tid}&&${this.$route.params.cid}`);

                 this.link = {
                   name : '',
                   desc : '',
                   l : ''
              };
              console.log(res);
                     }).catch((error) => {
          console.log(error);
        });
     }
    }
  }
</script>


