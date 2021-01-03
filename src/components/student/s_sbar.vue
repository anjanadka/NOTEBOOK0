<template>
   <v-navigation-drawer height="100%" permanent color="pink darken-4" >
       <v-list
        dense nav
       >
      <v-list-item-group
        v-model="selectedItem"
        color="white"
      >
        <v-list-item :to="{path :'/s_main/'+$route.params.sid}">
          <v-list-item-icon >
            <v-icon color="white" >home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="(c) in cl" :key="c._id" :to="{ path: '/submenu/'+$route.params.sid+'&&'+c._id+'&&'+c.t_id}">
         
          <v-list-item-icon >
            <v-icon color="white" >mdi-television</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text"> {{ c.subject }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
   </template>
<script>
import axios from "axios";
  export default {
    data() {
            return {
            selectedItem: 1,
            cl: [],
            right: null,
            }
    },
    created(){
        let apiURL2 = `http://localhost:4000/api/list-class/${this.$route.params.sid}`;
            axios.get(apiURL2).then((res) => {
            this.cl = res.data;
        });
    }
  }
</script>