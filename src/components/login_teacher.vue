<template>
  <div>
    <navi />
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div class="card card0 border-0">
        <div class="row d-flex">
          <div class="col-lg-6">
            <div class="card1 pb-5">
              <div
                class="row px-3 justify-content-center mt-4 mb-5 border-line"
              >
                <img src="../assets/logo.jpeg" class="image" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card2 card border-0 px-4 py-5">
              <h3 class="text-center">Teacher Login</h3>
              <div class="row px-3 mb-4">
                <div class="line"></div>
                <small class="or text-center"></small>
                <div class="line"></div>
              </div>
              <form @submit.prevent="handleSubmitForm">
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">Username</h6>
                </label>
                <input
                  class="mb-4"
                  type="text"
                  name="email"
                  placeholder="Enter Usename" v-model="teacher.t_id"
                />
              </div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">Password</h6>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password" v-model="teacher.password"
                />
              </div>
              <br />
              <br />
              <div class="row mb-3 px-3">
                <button type="submit" class="btn btn-blue text-center">
                Login
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import navi from "./thead";
export default {
  name: "head",
  components: {
    navi,
  },
  data() {
    return {
      teacher: {
        t_id: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:5000/api/login-teacher";

      axios
        .post(apiURL, this.teacher)
        .then((res) => {
          if (res.data.message == "found") {
            this.$router.push(`/t_main/${res.data.user}`); //res.data.user
            console.log(res.data.message);
          } else {
            window.alert("Incorrect username or password");
          }
          console.log(res)  
          this.teacher = {
            t_id: "",
            password: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
body {
  color: #000;
  overflow-x: hidden;
  height: 100%;
  background-color: #fff;
  background-repeat: no-repeat;
}
.d-flex {
  background-color: #fff;
}
.card0 {
  box-shadow: 2px 2px 8px 4px rgb(32, 31, 31);
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}

.logo {
  width: 200px;
  height: 100px;
  margin-top: 20px;
  margin-left: 35px;
}

.image {
  width: 360px;
  height: 280px;
}

.border-line {
  border-right: 1px solid #eeeeee;
}

.line {
  height: 1px;
  width: 45%;
  background-color: #e0e0e0;
  margin-top: 10px;
}

.or {
  width: 10%;
  font-weight: bold;
}

.text-sm {
  font-size: 14px !important;
}

::placeholder {
  color: #bdbdbd;
  opacity: 1;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

::-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

input,
textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304ffe;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

.btn-blue {
  background-color: #1a237e;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #c0c0c0;
  cursor: pointer;
}

.bg-blue {
  color: #fff;
  background-color: #1a237e;
}

@media screen and (max-width: 991px) {
  .logo {
    margin-left: 0px;
  }

  .image {
    width: 300px;
    height: 220px;
  }

  .border-line {
    border-right: none;
  }

  .card2 {
    border-top: 1px solid #eeeeee !important;
    margin: 0px 15px;
  }
}
</style>