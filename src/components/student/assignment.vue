<template>
  <div>
  <tbar />
   <div class="row" height="0">
      <div class="col-sm-3">
          <sbar/>
      </div>
      <div class="col-sm-9">
    <v-toolbar color="black" dark flat>
                <v-toolbar-title class="text-uppercase">assignment</v-toolbar-title>
        </v-toolbar>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Due Date</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items.slice().reverse()" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.date }}</td>
                   
                  <td>
                    <v-btn dark color="indigo" :to="{path : '/assignment_upload/'+$route.params.sid+'&&'+$route.params.cid+'&&'+item._id+'&&'+$route.params.tid}">View</v-btn>
                  </td>
                </tr>
              </tbody>
            </table>
          </v-layout>
        </v-container>
        </div></div>
       
        </div>
</template>

<script>
import axios from "axios";
import sbar from "./s_sbar.vue";
import tbar from "./s_head.vue";

export default {
  name: "sb",
  components: {
    tbar,
    sbar,

  },
  data() {
    return {
      items: [],
    };
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
   
  },
};
</script>