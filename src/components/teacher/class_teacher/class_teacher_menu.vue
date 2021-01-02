<template>
<div>
     <tbar />
     <div class="row" height=0>
   <div class="col-sm-3">
  <sbar/>
   </div>
      <div class="col-sm-9">
          <v-app id="inspire">
            <v-container>
              <v-row>
                <div>
                  <v-col>
                    <v-hover v-slot="{ hover }" close-delay="20">
                      <v-card
                        :loading="loading"
                        class="mx-auto my-10"
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"
                      >
                        <v-img
                          src="./img/attendance.jpg"
                          width="200px"
                          height="200px"
                          align="center"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="green" text :to="{path : '/attendence/'+$route.params.tid+'--'+$route.params.class+'--'+$route.params.div}">
                            Attendence
                          </v-btn>

                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-hover>
                  </v-col>
                </div>
                <div>
                  <v-col>
                    <v-hover v-slot="{ hover }" open-delay="20">
                      <v-card
                        :loading="loading"
                        class="mx-auto my-10"
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"
                      >
                        <v-img
                          src="./img/timetable.png"
                          width="200px"
                          height="200px"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="red" text  @click= "opennewtab('https://victers.kite.kerala.gov.in/pages/')">Timetable</v-btn>

                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-hover>
                  </v-col>
                </div>

                <div>
                  <v-col>
                    <v-hover v-slot="{ hover }" open-delay="20">
                      <v-card
                        :loading="loading"
                        class="mx-auto my-10"
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"
                      >
                        <v-img
                          src="./img/activities.png"
                          width="200px"
                          height="200px"
                          align-center
                          justify-center
                        ></v-img>
                        <v-card-actions class="justify-center">
                          <v-btn color="indigo" text :to="{path : '/miscellaneous_activities/'+$route.params.tid+'--'+$route.params.class+'--'+$route.params.div}">
                           miscellaneous<br> activities
                          </v-btn>

                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-hover>
                  </v-col>
                </div>

               
              </v-row>
            </v-container>
          </v-app>
        </div>
     </div>
</div>
</template>


<script>
import sbar from "../sidebar.vue";
  import tbar from "../teacher_head.vue";
  export default {
    name: "sb",
    components: {
     sbar,
     tbar
    },
     methods: {
             opennewtab(url) {
                window.open(url);
    },
     }
  }
</script>