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
        
          <v-btn color="green darken-2" :to="{path : '/homework/'+$route.params.cid+'&&'+$route.params.tid}">New Assignment</v-btn>
        </v-toolbar-items>
        </v-toolbar>
            <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>File</th>
                  <th>Mark</th>
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
                    
                    <v-text-field label="mark" v-model="item.mark" solo></v-text-field>
                  </td>
                  <td>
                    <v-btn dark color="indigo" @click="submitMark(item)">submit</v-btn>
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
      items : [],
      }
    },
    created() {
    let apiURL = `http://localhost:2000/api/Assignment_student/find_assignment/${this.$route.params.aid}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.items = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  /*computed: {
    sortedItems: function() {
      function compare(a, b) {
        if (a.roll_no < b.roll_no)
          return -1;
        if (a.roll_no > b.roll_no)
          return 1;
        return 0;
      }
      return this.items.sort(compare);
    }
  },*/
    methods: {
        opennewtab(url) {
      window.open(url, "_blank");
    },
   submitMark(item){
     let apiURL = `http://localhost:2000/api/Assignment_student/update_assignment/${item._id}`;
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