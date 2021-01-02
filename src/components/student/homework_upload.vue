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
      <v-subheader><v-toolbar color="green" dark><h2>HOMEWORK</h2></v-toolbar></v-subheader>
      <br><br>
      <v-list-item-group>
        <v-list-item :key="item._id" >
          <v-layout color="black" dark align-center justify-center flat>
            <v-card class="auto" color="grey lighten-3" width="100%">
              <v-list-item-content>
                <v-list-item-title
                  ><v-toolbar color="blue" dark
                    ><h4>{{ item.name }}</h4></v-toolbar
                  ></v-list-item-title
                >
                <v-list-item-title
                  >Description : {{ item.desc }} </v-list-item-title
                ><br /><br />
                <v-list-item-title
                  >End Date : {{ item.date }} </v-list-item-title
                ><br /><br />
                <v-list-item-title
                  >File :
                  <v-btn @click="opennewtab(item.files)" dark color="green"
                    >Download</v-btn
                  ><br /><br
                /></v-list-item-title>
                <v-list-item-title v-if="getDate(item.date)">
                  <div v-if="s==0">
                   <v-form @submit.prevent="handleSubmit">
                  <v-row>
                    <v-col>
                  <v-file-input
                    label="Upload Homework"
                    v-model="files"
                    solo
                  ></v-file-input></v-col><v-col>   <v-btn @click="handleSubmit" dark color="blue"
                    >SUBMIT</v-btn></v-col>
                  </v-row>
                  </v-form></div>
                  </v-list-item-title ><br /><br />
                  <div v-if="s==1">
                  <v-list-item :key="hw._id" >
                <v-list-item-title >status : SUBMITTED</v-list-item-title><br /><br />
                <v-list-item-title v-if="hw.mark != -1">Mark : {{hw.mark}}</v-list-item-title><br />
                <v-list-item-title v-if="hw.mark == -1">Mark : Result not Published</v-list-item-title><br />
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
      hw : {},
      files : null,
      s : 0
    };
  },
  created() {
    let apiURL = `http://localhost:2000/api/Homework/one_hw_find/${this.$route.params.hid}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.item = res.data;
        console.log(this.item);
      })
      .catch((error) => {
        console.log(error);
      });
      let apiURL1 =`http://localhost:2000/api/Homework_student/find_shw/${this.$route.params.sid}&&${this.$route.params.hid}`;
      axios
      .get(apiURL1)
      .then((res) => {
        this.hw = res.data;
        console.log(this.hw);
        this.s =1;
        if(this.hw == []){
          this.s =0;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    opennewtab(url) {
      window.open(url, "_blank");
    },
  getDate(test) {
    var t = test;
    var res1=t.split("-"); 
           var todayDate = new Date(); //Today Date    
           var dateOne = new Date(res1[0],res1[1]-1,res1[2],24,59,59);   
           console.log(dateOne,todayDate,res1[0]) 
           if (dateOne >= todayDate) {    
                console.log("1");
                return 1;    
            }else {  
               console.log("0");  
               return 0;
            }        
  },
     handleSubmit() {
          console.log("test")
          const formData = new FormData();
          formData.append('files', this.files)
           formData.append('date', this.item.date)

          axios.post(`http://localhost:2000/api/Homework_student/file-upload/${this.$route.params.sid}&&${this.$route.params.cid}&&${this.$route.params.hid}`, formData, {
          }).then((res) => {
            this.$router.push(
            `/s_homework/${this.$route.params.sid}&&${this.$route.params.cid}&&${this.$route.params.tid}`
          );
             this.files = null;

            console.log(res)//res.data.userCreatuserCreateded._id
          }).catch(error => {
                      window.alert("Only .pdf, .odt, .docx, .png, .jpg and .jpeg  format allowed!");
                        console.log(error)
                    });
        } 
  } 
    

};
</script>


