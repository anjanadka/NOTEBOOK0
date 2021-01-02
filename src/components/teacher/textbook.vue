<template>
<div>
  <tbar />
    <div class="row" height=0>
   <div class="col-sm-3">
  <sbar/>
   </div>
  <div class="col-sm-8">
        <v-toolbar color="blue-grey darken-4" dark flat>
                <v-toolbar-title class="text-uppercase">textbook  &  references</v-toolbar-title>
        </v-toolbar>
          <v-container fluid fill-height>
               <v-layout align-center justify-center>
                    <v-flex xs12 sm12 md6>
                         <v-form @submit.prevent="handleSubmit">
                              <v-text-field label="Name" v-model="name" solo></v-text-field>
                              <v-textarea label="Description" v-model="desc" solo></v-textarea>
                              <v-file-input label= "File Input" v-model="files" solo></v-file-input>
                         </v-form>
                         <v-card-actions>
                             <v-spacer></v-spacer>
                             <v-btn dark color="blue-grey darken-4"  @click="handleSubmit">SAVE</v-btn>
                         </v-card-actions>
                           <br><br>
                    </v-flex>
               </v-layout>
          </v-container>    
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
     tbar
    },
     data() {
      return  {
      files : null,
      desc : '',
      name : ''
      }
    },
    methods: {
        handleSubmit() {
          console.log(this.name)

          const formData = new FormData();
          formData.append('files', this.files)
          formData.append('name',this.name)
          formData.append('desc',this.desc)

          axios.post(`http://localhost:2000/api/Textbook/file-upload/${this.$route.params.tid}&&${this.$route.params.cid}`, formData, {
          }).then((res) => {
            this.$router.push(`/classmenu/${this.$route.params.tid}&&${this.$route.params.cid}`);
              this.name = '';
             this.desc = '';
             this.files = null;
            console.log(res)//res.data.userCreatuserCreateded._id
          }).catch(error => {
                      window.alert("Only .pdf, .odt, .docx, .png, .jpg and .jpeg  format allowed!");
                        console.log(error)
                    });
        }  
    }

  }
</script>


