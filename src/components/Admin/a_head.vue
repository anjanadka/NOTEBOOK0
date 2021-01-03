<template>
      <v-toolbar color="#130d70" dark fixed app>
        <v-toolbar-title>  NOTEBOOK</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" color="#130d70" flat>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>

      </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      menu: [
    
        { icon: "",title:"Logout",link:"/adminLogin"}
      ]
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>