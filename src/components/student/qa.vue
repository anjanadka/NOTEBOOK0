<template>
  <div>
    <tbar />
    <div class="row" height="0">
      <div class="col-sm-3">
        <sbar />
      </div>
      <div class="col-sm-9">
        <v-toolbar color="black" dark flat>
          <v-toolbar-title class="text-uppercase">Q & A</v-toolbar-title>
        </v-toolbar>
        <br /><br />
       
          <div v-for="(item, index) in items.slice().reverse()" :key="index">
             <v-layout align-center justify-center>
            <v-flex xs12 sm12 md6>
              <v-card>
                <v-toolbar color="blue" dark flat>
                  <h6>Question {{ index + 1 }}</h6>
                </v-toolbar>
                <br />
                <v-layout align-center justify-center>
                  <h6>{{ item.question }}</h6>
                  <br />
                </v-layout>
                <v-toolbar color="green" dark flat>
                  <h6>Answer :</h6>
                </v-toolbar>
                <br />
                <v-layout align-center justify-center>
                  {{ item.answer }}
                  <br />
                </v-layout>
             
                <br />
              </v-card>
            </v-flex>
            <br /><br />
             </v-layout>
                <v-divider></v-divider>
          </div>
       
      </div>
    </div>
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
    let apiURL = `http://localhost:2000/api/qa/find_qa/${this.$route.params.tid}&&${this.$route.params.cid}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.items = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>