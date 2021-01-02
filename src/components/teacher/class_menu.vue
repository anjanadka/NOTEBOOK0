<template>
  <div>
    <tbar />
    <div class="row" height="0">
      <div class="col-sm-3">
         <v-navigation-drawer height="100%" permanent color=#130d70 >
       <v-list
        dense nav
       >
      <v-list-item-group
        v-model="selectedItem"
        color="white"
      >
        <v-list-item :to="{path :'/t_main/'+$route.params.tid}">
          <v-list-item-icon >
            <v-icon color="white" >home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="c in cl" :key="c._id" :to="{ path: '/classmenu/'+$route.params.tid+'&&'+c._id}">
         
          <v-list-item-icon >
            <v-icon color="white" >mdi-television</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ c.class }} 
              {{ c.div }} -
              {{ c.subject }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      </div>
      <div class="col-sm-9">
        <div>
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
                          src="./imgs/link.png"
                          width="200px"
                          height="200px"
                          align="center"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="black" text :to="{path : '/lecture_links/'+$route.params.tid+'&&'+$route.params.cid}">
                            lecture links
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
                          src="./imgs/note.png"
                          width="200px"
                          height="200px"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="red" text  :to="{path : '/notes/'+$route.params.tid+'&&'+$route.params.cid}"> notes </v-btn>

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
                          src="./imgs/textbook.jpg"
                          width="200px"
                          height="200px"
                          align-center
                          justify-center
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="grey" text :to="{path : '/textbook/'+$route.params.tid+'&&'+$route.params.cid}">
                            Textbook & References
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
                          src="./imgs/homework.png"
                          width="200px"
                          height="200px"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="pink" text :to="{path : '/homework/'+$route.params.tid+'&&'+$route.params.cid}">
                            Homework
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
                          src="./imgs/chat.png"
                          width="200px"
                          height="200px"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="blue" text  :to="{path : '/chatlist/'+$route.params.tid+'&&'+$route.params.cid}"> chat </v-btn>

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
                          src="./imgs/ass.png"
                          width="200px"
                          height="200px"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="black" text :to="{path : '/assignment/'+$route.params.tid+'&&'+$route.params.cid}">
                            assignment
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
                          src="./imgs/Quiz.png"
                          width="200px"
                          height="200px"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="blue" text :to="{path : '/quiz_details/'+$route.params.tid+'&&'+$route.params.cid}">
                            Quiz
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
                          src="./imgs/qanda1.png"
                          width="200px"
                          height="200px"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="orange" text :to="{path : '/question&answer/'+$route.params.tid+'&&'+$route.params.cid}">
                            Q & A
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
                          src="./imgs/qp.png"
                          width="200px"
                          height="200px"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="blue" text :to="{path : '/question-paper/'+$route.params.tid+'&&'+$route.params.cid}">
                            Question paper
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
                          src="./imgs/report.jpg"
                          width="200px"
                          height="200px"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="green" text :to="{path : '/list_s_report/'+$route.params.tid+'&&'+$route.params.cid}">
                            Report
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
  </div>
</template>


<script>
import axios from "axios";
import tbar from "./teacher_head.vue";
export default {
  name: "sb",
  components: {
    tbar,
  },
  data(){
    return {
            selectedItem: 1,
            cl: [],
            right: null,
    }
  },
    created() {
          let apiURL1 = `http://localhost:5000/api/edit-class/${this.$route.params.tid}`;
            axios.get(apiURL1).then((res) => {
            this.cl = res.data;
        });
    }
};
</script>