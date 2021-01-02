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
                <v-spacer></v-spacer>
                 <v-toolbar-items class="hidden-sm-and-down">
        
          <v-btn color="red lighten-2" :to="{path : '/miscellaneous_activities/'+$route.params.tid+'--'+$route.params.class+'--'+$route.params.div}">New miscellaneous activities</v-btn>
        </v-toolbar-items>
        </v-toolbar>
            
         <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items.slice().reverse()" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.desc }}</td>
                  <td>
                    <v-btn dark color="red lighten-2" :to="{path : '/activity_student_list/'+$route.params.tid+'&&'+item._id}">view</v-btn>
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
    name: "sb",
    components: {
     sbar,
     tbar
    },
    data() {
      return  {
      items : []
      }
    },
    created() {
    let apiURL = `http://localhost:2000/api/activities/find_activities/${this.$route.params.class}&&${this.$route.params.div}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.items = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  }
</script>
