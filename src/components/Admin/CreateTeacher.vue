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

        <div class="row justify-content-center">
          <div class="col-md-6">
            <h3 class="text-center">Create Teacher</h3>
            <form @submit.prevent="handleSubmitForm">
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
              <div v-for="(find, index) in teacher.classes" :key="index">
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
              </v-card-actions>
              <br />

              <v-btn dark block color="pink" @click="handleSubmitForm"
                >Create</v-btn
              >
            </form>
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
      teacher: {
        t_id: "",
        name: "",
        password: "",
        class_teacher: {
          class_c: "",
          class: "",
          div: "",
        },
        classes: [],
      },
    };
  },
  methods: {
    addClass: function () {
      this.teacher.classes.push({});
    },
    handleSubmitForm() {
      let apiURL = "http://localhost:5000/api/create-teacher";

      axios
        .post(apiURL, this.teacher)
        .then(() => {
          this.$router.push("/viewTeacher");
          this.teacher = {
            id: "",
            name: "",
            password: "",
            class_teacher: {
              class_c: "",
              class_t: "",
            },
            classes: [""],
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>