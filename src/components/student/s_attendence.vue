<template >
<div>
  <tbar/>
  <div class="row" height=0>
  <div class="col-sm-3">
      <sbar/>
   </div>
  <div class="col-sm-8">
     <v-toolbar color="blue" dark flat>
          <v-toolbar-title>Attendence</v-toolbar-title>
        </v-toolbar>
        <br>
        
      <v-card width="100%" >
          <v-layout align-center justify-center>
          <v-progress-circular
            :rotate="-90"
            :size="250"
            :width="50"
            :value="value"
            color="green" auto-draw 
    ><h3>{{value}} %</h3></v-progress-circular></v-layout><br>
    </v-card>
    <br><br>
  <v-spacer></v-spacer>
  <v-divider></v-divider>
    <v-spacer></v-spacer>
    <div v-if="test()">
    <div v-if="s==1">
    <v-toolbar color="red" dark><h4>Mark  Attendance</h4>
    <v-spacer></v-spacer>
     <v-btn color="black" fab dark @click="handleSubmit"> <v-icon large dark>mdi-check</v-icon></v-btn>
     </v-toolbar >
    </div></div>   

  </div>
  </div>

  </div>
</template>

<script>
 import axios from "axios";
 import tbar from "./s_head.vue";
import sbar from "./s_sbar.vue";
  export default {
    name: "sb",
    components: {
     tbar,
     sbar
    },
    data() {
            return {
                att :{},
                s: 0,
                cl :[],
                value : 0
            }
        },
        created() {
            var date_ob = new Date();
            let date = ("0" + date_ob.getDate()).slice(-2);
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            let year = date_ob.getFullYear();
            var todayDate = year + "-" + month + "-" + date;
          let apiURL1 = `http://localhost:2000/api/attendence/find_att/${this.$route.params.class}&&${this.$route.params.div}&&${todayDate}`;
            axios.get(apiURL1).then((res) => {
            this.att = res.data;
        });
        let apiURL2 = `http://localhost:2000/api/st_attendence/check_satt/${this.$route.params.sid}&&${todayDate}`;
            axios.get(apiURL2).then((res) => {
            this.cl = res.data;
            this.s=0;
            if(this.cl == null){
              console.log("mark attendence")
              this.s =1;
          }
        });
        let apiURL3 = `http://localhost:2000/api/st_attendence/att_cal/${this.$route.params.sid}&&${this.$route.params.class}&&${this.$route.params.div}`;
            axios.get(apiURL3).then((res) => {
            this.value = (res.data).toFixed(2);
            console.log("value==",this.value);
        });
            
        },
        methods: {
            handleSubmit() {
                console.log(this.$route.params.sid)
      axios
        .post(
          `http://localhost:2000/api/st_attendence/new_st_attendence/${this.$route.params.sid}&&${this.$route.params.class}&&${this.$route.params.div}`,
          this.att
        )
        .then((res) => {
          this.$router.push(
            `/s_main/${this.$route.params.sid}`
          );

          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
            test() {
                var date_ob = new Date();
                let hours = date_ob.getHours();
                let minutes = date_ob.getMinutes();
                var todaytime = hours + ":" + minutes; //Today Date      
                console.log(todaytime) ;
                console.log(this.att.stime,this.att.etime) ;
                if (this.att.stime < todaytime && todaytime < this.att.etime ) {    
                    console.log("1");
                    return 1;    
                }else {  
               console.log("0");  
               return 0;
            }        
  }
        }
  };
</script>
<style>
</style>