<template>
  <div>
    <tbar />
    <div class="row" height="0">
      <div class="col-sm-3">
        <sbar />
      </div>
      <div class="col-sm-8">
        <v-toolbar color="pink" dark fixed app>
          <v-btn color="black" to="/createTeacher" flat> Create Teacher</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="black" to="/viewTeacher" flat> View Teacher</v-btn>
        </v-toolbar>
        <div class="row">
          <div class="col-md-12">
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Teacher ID</th>
                  <th>Name</th>
                  <th>Class Teacher</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="teacher in Teachers" :key="teacher._id">
                  <td>{{ teacher.t_id }}</td>
                  <td>{{ teacher.name }}</td>
                  <td>{{ teacher.class_teacher.class_c }}</td>
                  <td>
                    <v-btn
                      color="green"
                      dark
                      :to="{ name: 'editTeacher', params: { id: teacher._id } }"
                    >
                      Edit
                    </v-btn>
                    <v-btn
                      color="red"
                      dark
                      @click.prevent="deleteTeacher(teacher._id)"
                      >Delete</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import sbar from "./a_sidebar";
import tbar from "./a_head";
export default {
  components: {
    sbar,
    tbar,
  },
  data() {
    return {
      Teachers: [],
    };
  },
  created() {
    let apiURL = "http://localhost:5000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Teachers = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteTeacher(id) {
      let apiURL = `http://localhost:5000/api/delete-teacher/${id}`;

      let indexOfArrayItem = this.Teachers.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Teachers.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.navbar-cust > li {
  padding-left: 100px;
  padding-right: 100px;
}
.navbar-cust > li {
  margin-left: 70px;
  margin-right: 70px;
}
</style>