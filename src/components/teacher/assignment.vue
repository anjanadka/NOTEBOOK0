<template>
  <div>
    <tbar />
    <div class="row" height="0">
      <div class="col-sm-3">
        <sbar />
      </div>
      <div class="col-sm-8">
        <v-toolbar color="black" dark flat>
          <v-toolbar-title>ASSSIGNMENT</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
              color="green darken-2"
              :to="{
                path:
                  '/view_assignment/' +
                  $route.params.tid +
                  '&&' +
                  $route.params.cid,
              }"
              >View Assignment</v-btn
            >
          </v-toolbar-items>
        </v-toolbar>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm12 md6>
              <v-form @submit.prevent="handleSubmit">
                <v-text-field label="Name" v-model="name" solo></v-text-field>
                <v-textarea
                  label="Description"
                  v-model="desc"
                  solo
                ></v-textarea>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Picker in dialog"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      solo
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(date)"
                    >
                      OK</v-btn
                    >
                  </v-date-picker>
                </v-dialog>
                <v-file-input
                  label="File Input"
                  v-model="files"
                  solo
                ></v-file-input>
              </v-form>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="black" @click="handleSubmit">create</v-btn>
              </v-card-actions>
              <br /><br />
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sbar from "./sidebar.vue";
import tbar from "./teacher_head.vue";
export default {
  components: {
    sbar,
    tbar,
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      files: null,
      desc: "",
      name: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.name);

      const formData = new FormData();
      formData.append("files", this.files);
      formData.append("name", this.name);
      formData.append("desc", this.desc);
      formData.append("date", this.date);

      axios
        .post(
          `http://localhost:2000/api/Assignment/file-upload/${this.$route.params.tid}&&${this.$route.params.cid}`,
          formData,
          {}
        )
        .then((res) => {
          this.$router.push(
            `/classmenu/${this.$route.params.tid}&&${this.$route.params.cid}`
          );
          this.name = "";
          this.desc = "";
          this.files = null;
          this.date = "";

          console.log(res); //res.data.userCreatuserCreateded._id
        })
        .catch((error) => {
          window.alert(
            "Only .pdf, .odt, .docx, .png, .jpg and .jpeg  format allowed!"
          );
          console.log(error);
        });
    },
  },
};
</script>
