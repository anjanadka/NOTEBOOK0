<template>
<div>
    <tbar />
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Student</h3>
            <form @submit.prevent="handleUpdateForm">
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
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div></div>
</template>

<script>
import axios from "axios";
import tbar from "./a_head";
    export default {
        components: {
            tbar
        },
    data() {
        return {
            student: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.student = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

            axios.post(apiURL, this.student).then((res) => {
                console.log(res)
                this.$router.push('/viewStudent')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>