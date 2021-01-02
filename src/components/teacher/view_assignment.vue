<template>
<div>
  <tbar />
   <div class="row" height=0>
   <div class="col-sm-3">
  <sbar/>
   </div>
  <div class="col-sm-8">

        <v-toolbar color="black" dark flat>
                <v-toolbar-title>ASSSIGNMENT</v-toolbar-title>
                <v-spacer></v-spacer>
                 <v-toolbar-items class="hidden-sm-and-down">
        
          <v-btn color="green darken-2" :to="{path : '/assignment/'+$route.params.tid+'&&'+$route.params.cid}">New Assignment</v-btn>
        </v-toolbar-items>
        </v-toolbar>
            <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Due Date</th>
                  <th>File</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items.slice().reverse()" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.date }}</td>
                  <td>
                    <v-btn dark color="purple darken-2" @click="opennewtab(item.files)" >Download</v-btn>
                  </td> 
                  <td>
                    <v-btn dark color="indigo" :to="{path : '/assignment_student_list/'+$route.params.tid+'&&'+$route.params.cid+'&&'+item._id}">VIEW</v-btn>
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
import sbar from "./sidebar.vue";
import tbar from "./teacher_head.vue";
  export default {
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
    let apiURL = `http://localhost:2000/api/Assignment/find_assignment/${this.$route.params.tid}&&${this.$route.params.cid}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.items = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
    methods: {
        opennewtab(url) {
      window.open(url, "_blank");
    },
    }
  }
</script>
