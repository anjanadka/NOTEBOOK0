
<template >
<div>
  <tbar/>
  <div class="row" height=0>
  <div class="col-sm-4">
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
        <v-list-item v-for="(c) in cl" :key="c._id" :to="{ path: '/classmenu/'+teacher._id+'&&'+c._id}">
         
          <v-list-item-icon >
            <v-icon color="white" >mdi-television</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ c.class }} 
              {{ c.div}} -
              {{ c.subject }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
   </div>
  <div class="col-sm-8">
  <v-flex xs12>
      <v-card width="50%" >
        <div class="h1">Profile</div>
        <v-col>
            <v-avatar size="200" >
              <v-img src="../img/teacher.png"></v-img>
            </v-avatar>
          </v-col>
            <v-list-item :key="teacher._id">
              <v-list-item-content>
                <v-list-item-title >Name : {{teacher.name}}</v-list-item-title>
                <br>
                <div v-if="teacher.class_teacher.class_c == 'Yes'" >
                   <v-list-item-title ><h6>Class Teacher</h6></v-list-item-title>
                 <v-list-item-title >Class : {{teacher.class_teacher.class}}</v-list-item-title>
                 <v-list-item-title >Div : {{teacher.class_teacher.div}}</v-list-item-title>
                </div>
                <v-btn v-if="teacher.class_teacher.class_c == 'Yes'" color="#130d70" dark :to="{path : '/class_teacher_menu/'+$route.params.tid+'--'+teacher.class_teacher.class+'--'+teacher.class_teacher.div}">
                   GO TO CLASS TEACHER MENU </v-btn> 
              </v-list-item-content>
            </v-list-item>
      </v-card>
      <v-spacer></v-spacer>
      </v-flex>
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
  import tbar from "./teacher_head.vue";
  export default {
    name: "sb",
    components: {
     tbar
    },
    data() {
            return {
            selectedItem: 1,
            cl: [],
            right: null,
            annoncements: [],
            teacher : {}
            }
        },
        created() {
          let apiURL1 = `http://localhost:5000/api/edit-teacher/${this.$route.params.tid}`;
            axios.get(apiURL1).then((res) => {
            this.teacher = res.data;
        });
        let apiURL2 = `http://localhost:5000/api/edit-class/${this.$route.params.tid}`;
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
        }
  };
</script>
<style>
</style>