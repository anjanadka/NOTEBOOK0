<template>
  <div>
    <tbar />
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Update Teacher</h3>
        <form @submit.prevent="handleUpdateForm">
          <label>Teacher ID</label>
          <v-text-field outlined v-model="teacher.t_id" required />
          <label>Name </label>
          <v-text-field outlined v-model="teacher.name" required />

          <label>Password</label>
          <v-text-field
            type="password"
            outlined
            v-model="teacher.password"
            required
          />
         <label>Class teacher </label>
          <v-radio-group v-model="teacher.class_teacher.class_c" row>
            <v-radio label="Yes" color="pink" value="Yes"></v-radio>
            <v-radio label="No" color="pink" value="No"></v-radio>
          </v-radio-group>

          <div v-if="teacher.class_teacher.class_c == 'Yes'">
            <br />
            <label>Classs</label>
            <v-row>
              <v-col>
                <v-text-field
                  outlined
                  v-model="teacher.class_teacher.class"
                  label="Class"
              /></v-col>
              <v-col>
                <v-text-field
                  outlined
                  v-model="teacher.class_teacher.div"
                  label="Division"
              /></v-col>
            </v-row>
          </div>
          <br />
          <label>Classes </label>
          <div v-for="(find, index) in classes" :key="index">
            <v-row>
              <v-col>
                <v-text-field
                  outlined
                  v-model="find.class"
                  label="Class"
                  :key="index"
              /></v-col>
              <v-col>
                <v-text-field
                  outlined
                  v-model="find.div"
                  label="Division"
                  :key="index"
              /></v-col>
              <v-col>
                <v-text-field
                  outlined
                  v-model="find.subject"
                  label="Subject"
                  :key="index"
              /></v-col>
            </v-row>
            <v-row>
               <v-col>
                <v-btn
                  outlined
                  v-model="find.subject"
                  label="Update"
                  :key="index"
                  @click = "updateclass(find)"
                  color="green"
              >update class</v-btn></v-col>
               <v-col>
                <v-btn
                  outlined
                  v-model="find.subject"
                  label="Update"
                  :key="index"
                  @click = "deleteclass(find._id)"
                  color="red"
              >delete</v-btn></v-col>
             </v-row>
          </div>
            <div v-for="(find, index) in t.class1" :key="index">
            <v-row>
              <v-col>
                <v-text-field
                  outlined
                  v-model="find.class"
                  label="Class"
                  :key="index"
              /></v-col>
              <v-col>
                <v-text-field
                  outlined
                  v-model="find.div"
                  label="Division"
                  :key="index"
              /></v-col>
              <v-col>
                <v-text-field
                  outlined
                  v-model="find.subject"
                  label="Subject"
                  :key="index"
              /></v-col>
            </v-row>
            </div>
          <v-card-actions>
            <v-spacer row></v-spacer>
             <v-btn fab dark color="blue" @click="addClass">Add</v-btn>
              <v-btn fab dark color="blue" @click="saveClass">Save</v-btn>
          </v-card-actions>
          <br />
          <v-btn dark block color="pink" @click="handleUpdateForm"
            >Update</v-btn
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import tbar from "./a_head";
export default {
  components: {
    tbar,
  },
  data() {
    return {
      teacher: {},
      classes: {},
      t :{
      class1 : []
      }
    };
  },
  created() {
    let apiURL = `http://localhost:5000/api/edit-teacher/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.teacher = res.data;
    });

     let api1URL = `http://localhost:5000/api/edit-class/${this.$route.params.id}`;

    axios.get(api1URL).then((res) => {
      this.classes = res.data;
    });
  },
  methods: {
    updateclass(f) {
      console.log(f);
       let apiURL = `http://localhost:5000/api/update-class/${f._id}`
       axios.post(apiURL, f)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
     
    },
      addClass: function () {
      this.t.class1.push({});
    },
    saveClass() {
        let apiURL = `http://localhost:5000/api/add-class/${this.$route.params.id}`;
        axios
        .post(apiURL, this.t)
        .then(() => {
          console.log("something");

        }) .catch((error) => {
          console.log(error);
        });
    },
    deleteclass(f){
        let apiURL = `http://localhost:5000/api/delete-class/${f}`;

      let indexOfArrayItem = this.classes.findIndex((i) => i._id === f);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.classes.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    },
    handleUpdateForm() {
      let apiURL = `http://localhost:5000/api/update-teacher/${this.$route.params.id}`;
      axios
        .post(apiURL, this.teacher)
        .then((res) => {
          console.log(res);
          this.$router.push("/viewTeacher");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>