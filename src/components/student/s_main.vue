
<template >
<div>
  <tbar/>
  <div class="row" height=0>
  <div class="col-sm-3">
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
        <v-list-item v-for="(c) in cl" :key="c._id" :to="{ path: '/submenu/'+st._id+'&&'+c._id+'&&'+c.t_id}">
         
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
   </div>
  <div class="col-sm-8">
  <v-row>
    <v-col>
      <v-card width="100%" >
        <div class="h1">Profile</div>
        <v-col>
            <v-avatar size="200" >
              <v-img src="../img/st.png"></v-img>
            </v-avatar>
          </v-col>
            <v-list-item :key="st._id">
              <v-list-item-content>
                 <v-list-item-title >Roll No : {{st.roll_no}}</v-list-item-title>
                <v-list-item-title >Name : {{st.name}}</v-list-item-title>
                 <v-list-item-title >class : {{st.class}} {{st.div}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
      </v-card>
      </v-col>
      <v-col>
      <v-card>
        <br><br><br><br>
        <v-btn color="amber" dark block rounded :to="{path : '/s_attendence/'+$route.params.sid+'--'+st.class+'--'+st.div}">attendance</v-btn><br><br>
        <v-btn color="lime accent-4" dark block  rounded @click= "opennewtab('https://victers.kite.kerala.gov.in/pages/')">time table</v-btn><br><br>
        <v-btn color="light green" dark block  rounded :to="{path : '/s_activities/'+$route.params.sid+'--'+st.class+'--'+st.div}">miscellaneous</v-btn><br><br><br>
      </v-card>
      </v-col></v-row>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <v-spacer></v-spacer>
      <v-card width="150%" >
        <div class="h1">Announcements</div>
        <v-divider></v-divider>
        <v-list-item  v-for="annoncement in annoncements.slice().reverse()" :key="annoncement._id">
              <v-list-item-content>
                <v-list-item-title >{{ annoncement.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ annoncement.desc }}</v-list-item-subtitle>
                <v-list-item-subtitle> <v-divider></v-divider></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
      </v-card>
  </div>
  </div>
  </div>
</template>

<script>
 import axios from "axios";
 import tbar from "./s_head.vue";
  export default {
    name: "sb",
    components: {
     tbar,
    },
    data() {
            return {
            selectedItem: 1,
            cl: [],
            right: null,
            annoncements: [],
            st : {}
            }
        },
        created() {
          let apiURL1 = `http://localhost:4000/api/edit-student/${this.$route.params.sid}`;
            axios.get(apiURL1).then((res) => {
            this.st = res.data;
        });
        let apiURL2 = `http://localhost:4000/api/list-class/${this.$route.params.sid}`;
            axios.get(apiURL2).then((res) => {
            this.cl = res.data;
        });

            let apiURL = 'http://localhost:7000/api';
            axios.get(apiURL).then(res => {
                this.annoncements = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
             opennewtab(url) {
                window.open(url);
    },
        }
  };
</script>
<style>
</style>