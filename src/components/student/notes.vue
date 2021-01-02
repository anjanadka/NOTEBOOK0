<template>
  <div>
  <tbar />
   <div class="row" height="0">
      <div class="col-sm-3">
          <sbar/>
      </div>
      <div class="col-sm-9">
    <v-toolbar color="red" dark flat>
                <v-toolbar-title class="text-uppercase">Notes</v-toolbar-title>
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
                <tr v-for="(item, index) in items" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.desc}}</td>
                  <td>
                    <v-btn @click="opennewtab(item.files)" dark color="orange" >Link</v-btn
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
    let apiURL = `http://localhost:2000/api/Notes/find_note/${this.$route.params.tid}&&${this.$route.params.cid}`;
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
  },
};
</script>