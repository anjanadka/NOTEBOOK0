<template>
  <div>
  <tbar />
   <div class="row" height="0">
      <div class="col-sm-3">
          <sbar/>
      </div>
      <div class="col-sm-9">
    <v-toolbar color="black" dark flat>
                <v-toolbar-title class="text-uppercase">Chat</v-toolbar-title>
        </v-toolbar>
        <v-container color="blue" flat>
  <v-layout align-center justify-center>
  <v-card width="50%" color="black">
       <v-toolbar color="green" dark flat :key="teacher._id">
                 <v-list-item-avatar>
          <v-img src="../img/teacher.png" ></v-img>
        </v-list-item-avatar>
                <v-toolbar-title class="text-uppercase" > {{teacher.name}}</v-toolbar-title>
        </v-toolbar>
       
        <v-list-item  v-for="i in c" :key="i._id">
            <v-spacer v-if="i.q==1"></v-spacer>
                <v-chip class="ma-2" color="green" text-color="green" width="50%"  v-if="i.q==1" outlined >
                <div> {{ i.msg }} </div><v-icon>mdi-account-circle</v-icon>
                </v-chip>
               <v-chip class="ma-2" color="blue" text-color="blue" width="50%"  v-if="i.q==0" outlined >
                  <v-icon>mdi-account-circle</v-icon>{{ i.msg }}
                </v-chip>
           
            </v-list-item>
     
    <v-text-field
      label="Solo"
      placeholder="Type Your Message" color=white
      v-model="message.msg"
     
      single-line
      ref="message" dark>
    </v-text-field>
    <v-card-actions>
    <v-btn class="ma-2" color="orange darken-2" dark :to="{path : '/submenu/'+$route.params.sid+'&&'+$route.params.cid+'&&'+$route.params.tid}">
        <v-icon dark left  >mdi-arrow-left</v-icon>Back </v-btn>
    <v-spacer></v-spacer>
    <v-btn class="primary" @click="saveMsg" > <v-icon>mdi-send</v-icon></v-btn></v-card-actions>
     </v-card>
     </v-layout>
     </v-container>
        </div></div></div>
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
  data(){
    return{
      c : [],
      teacher: {},
       message : {
        msg: '',
       q : '1'
       }
    }
  },
  created(){
    let apiURL1 = `http://localhost:2000/api/chat/list-chat/${this.$route.params.tid}&&${this.$route.params.cid}&&${this.$route.params.sid}`;
      axios.get(apiURL1).then(res => {
        this.c = res.data;
      });
      let apiURL3 = `http://localhost:5000/api/edit-teacher/${this.$route.params.tid}`;
      axios.get(apiURL3).then((res) => {
            this.teacher = res.data;
        })
  },
  methods : {
    saveMsg(){
      let apiURL = `http://localhost:2000/api/chat/create-chat/${this.$route.params.tid}&&${this.$route.params.cid}&&${this.$route.params.sid}`;
        axios
            .post(apiURL, this.message)
                     .then((res) => {
                          console.log(res);
                          this.message={
                            msg: ''
                          };
                          this.$router.push(`/s_chat/${this.$route.params.tid}&&${this.$route.params.cid}&&${this.$route.params.sid}`);
                     }).catch((error) => {
          console.log(error);
        });
    },
  }
};
</script>