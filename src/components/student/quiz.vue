<template>
  <div>
  <tbar />
   <div class="row" height="0">
      <div class="col-sm-3">
          <sbar/>
      </div>
      <div class="col-sm-9">
    <v-toolbar color="black" dark flat>
                <v-toolbar-title class="text-uppercase">Quiz</v-toolbar-title>
        </v-toolbar>
          <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Start Time</th>
                   <th>End Time</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items.slice().reverse()" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.start_date }} - {{item.start_time}}</td>
                  <td>{{ item.end_date }} - {{item.end_time}}</td>
                  <td>
                    <v-btn  dark color="green accent-4" @click="opennewtab(`http://localhost:8080/s_quiz_w/${item._id}`)">Start</v-btn
                    >
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
    let apiURL = `http://localhost:2000/api/quiz/find_quiz/${this.$route.params.tid}&&${this.$route.params.cid}`;
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
      window.open(url);
    },
  },

};
</script>