<template>
  <div>
    <v-card>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md6>
            <v-toolbar >
                <v-chip class="ma-2" color="primary" label> MARK </v-chip>
                <v-chip class="ma-2" color="primary" outlined pill>
                  {{ score }}/{{ q.questions.length}}
                </v-chip>
              
              <template v-slot:extension>
                <v-tabs
                  dark
                  v-model="tab"
                  background-color="#006064"
                  show-arrows
                  ><!--background-color="#AD1457"-->
                  <v-tab v-for="(item, index) in q.questions" :key="index" @click="Next">
                    question {{ index + 1 }}
                  </v-tab>
                </v-tabs>
              </template>
            </v-toolbar>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="(item, index) in q.questions" :key="index">
                

                <v-card flat>
                  <v-card-text>
                    <v-toolbar color="#AD1457" dark
                      ><h5>{{ item.question }}</h5></v-toolbar
                    >
                    <v-radio-group v-model="answer" column mandatory>
                      <v-radio
                        :label="item.optionA"
                        value="A"
                        color="#AD1457"
                        selected
                      >
                      </v-radio>
                      <br />
                      <v-radio
                        value="B"
                        :label="item.optionB"
                        color="#AD1457"
                      >
                        option
                      </v-radio>
                      <br />
                      <v-radio
                        value="C"
                        :label="item.optionC"
                        color="#AD1457"
                      >
                      </v-radio>
                      <br />
                      <v-radio
                        value="D"
                        :label="item.optionD"
                        color="#AD1457"
                      >
                      </v-radio>
                      <br />
                      <v-btn
                        color="#AD1457"
                        @click="addMark(item)"
                        v-if="submit == 0"
                        dark
                        >Submit</v-btn
                      >
                     

                      <v-card v-if="t == 1" dark color="green">
                        <h5>Correct Answer</h5>
                      </v-card>
                      <v-card v-if="t == 0" dark color="red">
                        <h5>
                          Wrong Answer <br />Correct answer is Option
                          {{ item.correct_option }}
                        </h5>
                      </v-card>
                      
                    </v-radio-group>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tab: null,
      q: {},
      index: 0,
      score: 0,
      t: null,
      answer: "A",
      submit: 0,
    };
  },
  created() {
    let apiURL = `http://localhost:2000/api/quiz/item_quiz/${this.$route.params.qid}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.q = res.data;
        console.log("this for test",this.q)
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    addMark(f) {
      if (f.correct_option === this.answer) {
        this.score = this.score + 1;
        this.t = 1;
      } else {
        this.t = 0;
      }
      this.submit = 1;
    },
    Next() {
      this.index = this.index + 1;
      this.submit = 0;
      this.t = null;
      this.answer = "A";
    },
  },
};
</script>
