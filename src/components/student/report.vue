<template>
  <div>
  <tbar />
   <div class="row" height="0">
      <div class="col-sm-3">
          <sbar/>
      </div>
      <div class="col-sm-9">
    <v-card
    class="mt-4 mx-auto"
    max-width="600"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="green"
      elevation="15"
      max-width="600"
    >
      <v-sparkline
        :labels="ls"
        :value="items"
        color="white"
        line-width="2"
        padding="20"
        show-labels
        auto-draw
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2" >
         Report
      </div>
      <v-divider class="my-2"></v-divider>
    </v-card-text>
  </v-card></div></div></div>
</template>

<script>
import sbar from "./s_sbar.vue";
import tbar from "./s_head.vue";
import axios from "axios";
export default {
  name: "sb",
  components: {
    tbar,
    sbar
  },
   data: () => ({
      ls: [],
      items :[],
    }),
   
    created() {
    let apiURL = `http://localhost:2000/api/report/mark_find/${this.$route.params.sid}&&${this.$route.params.cid}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.items = res.data.a;
        this.ls = res.data.b;
        console.log(this.items);

      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>