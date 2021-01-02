<template>
<div>
    <tbar />
   <div class="row" height=0>
  <div class="col-sm-3">
  <sbar/>
   </div>
  <div class="col-sm-8">
       <v-toolbar color="pink" dark fixed app>
          <v-btn color="black" to="/createStudent" flat> Create Student</v-btn>
          <v-spacer></v-spacer>
           <v-btn color="black" to="/viewStudent" flat> View Student</v-btn>
      </v-toolbar>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Student</h3>
            <br>
            <form @submit.prevent="handleSubmitForm">
                   <div class="form-group">
                    <label>Addmission Number</label>
                    <input type="text" class="form-control" v-model="student.adm_no" required>
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="student.name" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="student.password" required>
                </div>
                <div class="form-group">
                    <label>Roll Number </label>
                    <input type="text" class="form-control" v-model="student.roll_no" required>
                </div>

                <div class="form-group">
                    <label>Class</label>
                    <input type="text" class="form-control" v-model="student.class" required>
                </div>
                <div class="form-group">
                    <label>Division</label>
                    <input type="text" class="form-control" v-model="student.div" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
    </div></div></div>
</template>

<script>
    import axios from "axios";
    import sbar from "./a_sidebar";
    import tbar from "./a_head";
    export default {
        components: {
            sbar,
            tbar
        },
        data() {
            return {
                student: {
                   adm_no : '',
                   name: '',
                   password : '',
                   roll_no : '',
                   class : '',
                   div: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-student';
                
                axios.post(apiURL, this.student).then(() => {
                  this.$router.push('/viewStudent')
                  this.student = {
                    adm_no : '',
                   name: '',
                   password : '',
                   roll_no : '',
                   class : '',
                   div: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style>
.navbar-cust  > li{
  padding-left:100px;
  padding-right:100px;
}
.navbar-cust > li{
  margin-left:70px;
  margin-right:70px;
}
</style>