<template>
  <div>
  <tbar />
   <div class="row" height="0">
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
                          src="./imgs/link.png"
                          width="200px"
                          height="200px"
                          align="center"
                        ></v-img>
                        <v-card-actions>
                          <v-btn color="black" text :to="{path : '/lecture/'+$route.params.sid+'&&'+$route.params.cid+'&&'+$route.params.tid}">
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
                          <v-btn color="red" text  :to="{path : '/s_notes/'+$route.params.sid+'&&'+$route.params.cid+'&&'+$route.params.tid}"> notes </v-btn>

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
                          <v-btn color="grey" text :to="{path : '/s_textbook/'+$route.params.sid+'&&'+$route.params.cid+'&&'+$route.params.tid}">
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
                          <v-btn color="pink" text :to="{path : '/s_homework/'+$route.params.sid+'&&'+$route.params.cid+'&&'+$route.params.tid}">
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
                          <v-btn color="blue" text  :to="{path : '/s_chat/'+$route.params.tid+'&&'+$route.params.cid+'&&'+$route.params.sid}"> chat </v-btn>

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
                          <v-btn color="black" text :to="{path : '/s_assignment/'+$route.params.sid+'&&'+$route.params.cid+'&&'+$route.params.tid}">
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
                          <v-btn color="blue" text :to="{path : '/s_quiz/'+$route.params.sid+'&&'+$route.params.cid+'&&'+$route.params.tid}">
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
                          <v-btn color="orange" text :to="{path : '/s_question&answer/'+$route.params.sid+'&&'+$route.params.cid+'&&'+$route.params.tid}">
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
                          <v-btn color="blue" text :to="{path : '/s_question_paper/'+$route.params.sid+'&&'+$route.params.cid+'&&'+$route.params.tid}">
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
                          <v-btn color="green" text :to="{path : '/s_report/'+$route.params.sid+'&&'+$route.params.cid+'&&'+$route.params.tid}">
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

</template>


<script>
import sbar from "./s_sbar.vue";
import tbar from "./s_head.vue";

export default {
  name: "sb",
  components: {
    tbar,
    sbar,
  
  }
};
</script>