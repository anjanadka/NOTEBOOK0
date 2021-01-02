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
                    <v-btn dark color="red lighten-2" :to="{path : '/upload_activities/'+$route.params.sid+'--'+$route.params.class+'--'+$route.params.div+'--'+item._id}">Submit</v-btn>
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
import tbar from "./s_head";
import sbar from "./s_sbar"
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
    methods: {
        opennewtab(url) {
      window.open(url, "_blank");
    },
    }
  }
</script>
