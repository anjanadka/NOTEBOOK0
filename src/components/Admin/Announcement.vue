<template>
<div>
    <tbar />
   <div class="row" height=0>
  <div class="col-sm-4">
  <sbar/>
   </div>
  <div class="col-sm-8">
        
<div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Announcement</h3>
            <br>
            <form @submit.prevent="handleSubmitForm">
                   <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="annoncement.title" required>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" v-model="annoncement.desc" required></textarea>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div></div></div></div>
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
                annoncement: {
                  title : '',
                  desc : ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:7000/api/create-announcement';
                
                axios.post(apiURL, this.annoncement).then(() => {
                  this.$router.push('/Announcement')
                  this.annoncement= {
                     title : '',
                     desc : ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        
    }
}
</script>