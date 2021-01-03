<template lang="html">
<div>
  <tbar/>
<v-container color="blue" flat>
  <v-layout align-center justify-center>
  <v-card width="50%" color="black">
       <v-toolbar color="blue" dark flat :key="student._id">
                 <v-list-item-avatar>
          <v-img src="../img/st.png" ></v-img>
        </v-list-item-avatar>
                <v-toolbar-title class="text-uppercase" > {{student.name}}</v-toolbar-title>
        </v-toolbar>
       
        <v-list-item  v-for="i in c" :key="i._id">
            <v-spacer v-if="i.q==0"></v-spacer>
                <v-chip class="ma-2" color="blue" text-color="blue" width="50%"  v-if="i.q==0" outlined >
                <div> {{ i.msg }} </div><v-icon>mdi-account-circle</v-icon>
                </v-chip>
               <v-chip class="ma-2" color="green" text-color="green" width="50%"  v-if="i.q==1" outlined >
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
    <v-btn class="ma-2" color="orange darken-2" dark :to="{path : '/chatlist/'+$route.params.tid+'&&'+$route.params.cid}">
        <v-icon dark left  >mdi-arrow-left</v-icon>Back </v-btn>
    <v-spacer></v-spacer>
    <v-btn class="primary" color="green" @click="saveMsg" > <v-icon>mdi-send</v-icon></v-btn></v-card-actions>
     </v-card>
     </v-layout>
     </v-container></div>
</template>

<script>
import axios from "axios";
import tbar from "./teacher_head.vue";
  export default {
     components: {
     tbar
    },
  data(){
    return{
      c : [],
      student: {},
       message : {
        msg: '',
       q : '0'
       }
    }
  },
  created(){
    let apiURL1 = `http://localhost:2000/api/chat/list-chat/${this.$route.params.tid}&&${this.$route.params.cid}&&${this.$route.params.sid}`;
      axios.get(apiURL1).then(res => {
        this.c = res.data;
      });
      let apiURL3 = `http://localhost:4000/api/edit-student/${this.$route.params.sid}`;
      axios.get(apiURL3).then((res) => {
            this.student = res.data;
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
                          this.$router.push(`/chat1/${this.$route.params.tid}&&${this.$route.params.cid}&&${this.$route.params.sid}`);
                     }).catch((error) => {
          console.log(error);
        });
    },
  }
}
</script>

<style lang="css">
</style>