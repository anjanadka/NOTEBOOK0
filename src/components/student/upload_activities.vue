<template>
<div>
  <tbar />
   <div class="row" height="0">
      <div class="col-sm-3">
          <sbar/>
      </div>
      <div class="col-sm-9">
  <v-card class="auto" max-width="100%" tile>
    <v-list rounded>
      <v-subheader>  <v-toolbar color="indigo" dark flat>
          <v-toolbar-title class="text-uppercase"> miscellaneous activities</v-toolbar-title>
         
        </v-toolbar></v-subheader>
      <br><br>
      <v-list-item-group>
        <v-list-item :key="item._id" >
          <v-layout color="black" dark align-center justify-center flat>
            <v-card class="auto" color="grey lighten-3" width="100%">
              <v-list-item-content>
                <v-list-item-title
                  ><v-toolbar color="red lighten-2" dark
                    ><h4>{{ item.name }}</h4></v-toolbar
                  ></v-list-item-title
                >
                <v-list-item-title
                  >Description : {{ item.desc }} </v-list-item-title
                ><br /><br />
              
                <v-list-item-title>
                  <div v-if="s==0">
                   <v-form @submit.prevent="handleSubmit">
                  <v-row>
                    <v-col>
                  <v-file-input
                    label="Upload Activity"
                    v-model="files"
                    solo
                  ></v-file-input></v-col><v-col>   <v-btn @click="handleSubmit" dark color="red lighten-2"
                    >SUBMIT</v-btn></v-col>
                  </v-row>
                  </v-form></div>
                  </v-list-item-title><br /><br />
                  <div v-if="s==1">
                  <v-list-item :key="act._id" >
                <v-list-item-title >status : SUBMITTED</v-list-item-title><br /><br />
                <v-list-item-title v-if="act.comment != null">Comment : {{act.comment}}</v-list-item-title><br />
                <v-list-item-title v-if="act.comment == null">Comment : Result not Published</v-list-item-title><br />
                  </v-list-item>
                  </div>
                  <div v-if="s==0">
                  <v-list-item>
                <v-list-item-title >status : NOT SUBMITTED</v-list-item-title><br /><br />
                  </v-list-item>
                  </div>
              </v-list-item-content>
            </v-card>
          </v-layout>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <br>
  </v-card>
</div></div></div>
</template>
<script>
import axios from "axios";
import tbar from "./s_head";
import sbar from "./s_sbar"
export default {
  components: {
    sbar,
    tbar
  },
  data() {
    return {
      item: {},
      files : null,
      act : {},
      s : 0
    };
  },
  created() {
    
    let apiURL = `http://localhost:2000/api/activities/one-activity/${this.$route.params.aid}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.item = res.data;
        console.log(this.item);
      })
      .catch((error) => {
        console.log(error);
        console.log(this.$route.params.aid)
      });
      let apiURL1 =`http://localhost:2000/api/student_activities/find_sact/${this.$route.params.sid}&&${this.$route.params.aid}`;
      axios
      .get(apiURL1)
      .then((res) => {
        this.act = res.data;
        console.log(this.act);
        this.s =1;
        if(this.act == []){
          this.s =0;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
     handleSubmit() {
          console.log("test")
          const formData = new FormData();
          formData.append('files', this.files)

          axios.post(`http://localhost:2000/api/student_activities/file-upload/${this.$route.params.sid}&&${this.$route.params.aid}`, formData, {
          }).then((res) => {
             this.files = null;

            console.log(res)//res.data.userCreatuserCreateded._id
          }).catch(error => {
                      window.alert("Only .pdf,.png,mp4  format allowed!");
                        console.log(error)
                    });
        } 
  }
    

};
</script>


