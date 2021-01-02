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
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Admission Number</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Division</th>
                        <th>Roll number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="student in Students" :key="student._id">
                        <td>{{ student.adm_no}}</td>
                        <td>{{ student.name }}</td>
                        <td>{{ student.class }}</td>
                        <td>{{ student.div }}</td>
                         <td>{{ student.roll_no }}</td>
                        <td>
                            <router-link :to="{name: 'editStudent', params: { id: student._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div></div>
    </div>
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
                Students: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Students = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:4000/api/delete-student/${id}`;
                let indexOfArrayItem = this.Students.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Students.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
    div.dropdown-multicol{
  width: 30em;
}
div.dropdown-row>a.dropdown-item{
  display:inline-block;
  width: 32%;
}

/* Columns */
div.dropdown-multicol2{
  width: 30em;
}
div.dropdown-multicol2>div.dropdown-col{
  display:inline-block;
  width: 32%;
}
.navbar-cust  > li{
  padding-left:100px;
  padding-right:100px;
}
.navbar-cust > li{
  margin-left:70px;
  margin-right:70px;
}

</style>