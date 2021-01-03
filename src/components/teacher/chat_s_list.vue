<template>
<div>
       <tbar />
     <div class="row" height=0>
   <div class="col-sm-3">
  <sbar/>
   </div>
  <div class="col-sm-8">
 <div class="h1" align="center" color=#000000 >Student List</div>
 <v-card width="100%" color="#black">
  <v-list dense nav center >
    <v-list-item 
        v-for="student in Students" :key="student._id" :to="{ path: '/chat/'+$route.params.tid+'&&'+$route.params.cid+'&&'+student._id}"
      >
      <v-toolbar color=black dark>
        <v-list-item-avatar>
          <v-img src="../img/st.png" ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title >{{student.name }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon color="yellow">
            mdi-message-outline
          </v-icon>
        </v-list-item-icon>
      </v-toolbar>
      </v-list-item>
    </v-list> </v-card>
    </div></div></div>
</template>

<script>
    import axios from "axios";
  import sbar from "./sidebar.vue";
  import tbar from "./teacher_head.vue";
  export default {
    name: "sb",
    components: {
     sbar,
     tbar,
     
    },
        data() {
            return {
                Students: []
            }
        },
        created() {
            let apiURL = `http://localhost:4000/api/list-chat/${this.$route.params.tid}&&${this.$route.params.cid}`;
            axios.get(apiURL).then(res => {
                this.Students = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
          
        }
    }
</script>
