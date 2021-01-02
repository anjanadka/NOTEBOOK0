<template>
<div>
  <tbar />
   <div class="row" height=0>
   <div class="col-sm-3">
  <sbar/>
   </div>
  <div class="col-sm-8">
       <v-toolbar color="indigo" dark flat>
                <v-toolbar-title  class="text-uppercase">student activites</v-toolbar-title>
                
        </v-toolbar>
            <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>File</th>
                  <th>Comment</th>
                  <th>Submit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items"   :key="index" >
                
                  <td>{{ item.roll_no }}</td>
                  <td>{{ item.name }}</td>
                  <td>
                    <v-btn dark color="purple darken-2" @click="opennewtab(item.files)" >Download</v-btn>
                  </td> 
                  <td>
                    
                    <v-text-field label="comment" v-model="item.comment" solo></v-text-field>
                  </td>
                  <td>
                    <v-btn dark color="indigo" @click="submitComment(item)">submit</v-btn>
                  </td>
                </tr>
              </tbody>
            </table>
          </v-layout>
        </v-container>
  </div></div></div>
</template>

<script>
import axios from "axios";
import sbar from "../sidebar.vue";
import tbar from "../teacher_head.vue";
  export default {
     components: {
     sbar,
     tbar
    },
  data() {
      return  {
      items : [],
      }
    },
    created() {
    let apiURL = `http://localhost:2000/api/student_activities/find_activities/${this.$route.params.aid}`;
    axios
      .get(apiURL)
      .then((res) => {
        
        this.items = res.data;
          console.log(this.items)
      })
      .catch((error) => {
        console.log(error);
      });
  },
    methods: {
        opennewtab(url) {
      window.open(url, "_blank");
    },
   submitComment(item){
     let apiURL = `http://localhost:2000/api/student_activities/update_activities/${item._id}`;
     axios.post(apiURL,item)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });

   }
    }
  }
</script>