<template>
<div>
     <tbar />
     <div class="row" height=0>
   <div class="col-sm-3">
  <sbar/>
   </div>
      <div class="col-sm-8">
        <v-toolbar color="indigo" dark flat>
          <v-toolbar-title class="text-uppercase"> miscellaneous activities</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
              color="red lighten-2"
              class="text-uppercase"
              :to="{path : '/view_activities/'+$route.params.tid+'--'+$route.params.class+'--'+$route.params.div}"
              >View student activites</v-btn
            >
          </v-toolbar-items>
        </v-toolbar>
     
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm12 md6>
              <v-form @submit.prevent="handleSubmit">
                <v-text-field label="Name" v-model="activities.name" solo></v-text-field>
            
                <v-textarea
                  label="Description"
                  v-model="activities.desc"
                  solo
                ></v-textarea>
                
       
             
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="red lighten-2" @click="handleSubmit">create</v-btn>
              </v-card-actions>
               </v-form>
              <br /><br />
            </v-flex>
          </v-layout>
        </v-container>
      </div></div></div>
</template>

<script>
 import axios from "axios";
import sbar from "../sidebar.vue";
  import tbar from "../teacher_head.vue";
  export default {
    name: "sb",
    components: {
     sbar,
     tbar
    },
   data() {
    return {
      activities :{
      desc: "",
      name: ""
      }
    };
  },
    methods :{
       handleSubmit() {
      axios
        .post(
          `http://localhost:2000/api/activities/new_activity/${this.$route.params.tid}&&${this.$route.params.class}&&${this.$route.params.div}`,
          this.activities
        )
        .then((res) => {
          this.$router.push(
            `/class_teacher_menu/${this.$route.params.tid}--${this.$route.params.class}--${this.$route.params.div}`
          );
          this.activities ={
            name : "",
            desc : ""
          };

          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    }
  }
</script>
