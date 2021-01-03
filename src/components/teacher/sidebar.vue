
<template>
  
     <v-navigation-drawer height="100%" permanent color=#130d70 >
       <v-list
        dense nav
       >
      <v-list-item-group
        v-model="selectedItem"
        color="white"
      >
        <v-list-item :to="{path :'/t_main/'+$route.params.tid}">
          <v-list-item-icon >
            <v-icon color="white" >home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="c in cl" :key="c._id" :to="{ path: '/classmenu/'+$route.params.tid+'&&'+c._id}">
         
          <v-list-item-icon >
            <v-icon color="white" >mdi-television</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ c.class }} 
              {{ c.div }} -
              {{ c.subject }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import axios from "axios";
  export default {
   data(){
    return {
            selectedItem: 1,
            cl: [],
            right: null,
    }
  },
    created() {
          let apiURL1 = `http://localhost:5000/api/edit-class/${this.$route.params.tid}`;
            axios.get(apiURL1).then((res) => {
            this.cl = res.data;
        });
    }
};
</script>