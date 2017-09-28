<template>
    <div class="Assessment">

        <div v-if="!loaded" width="100%" align="center"><img src="/App/static/loading.jpg"   width="300"></div>

          <div v-for="section in model.sections">

            <table width="100%"><tr><td width="10%"></td>
            <td class="box" width="80%">

            <div class="sectiontitle">{{ section.title }}</div>

            <div v-for="question in section.questions">
                <div class="question">{{question.id}} {{ question.title }} :  {{ question.subtitle }}</div>

                <table><tr>

                  <div v-for="option in question.options">

                  <td width="40">
                  <label>
                      <input class="option-input radio"  @change="saveAnswer(question, option); sendToServer();" :checked="option.number == getAnswer(question.id)" type="radio" :name="question.id" v-bind:value="option.number"/>
                  </label>
                  </td>

                  <td valign="top">
                    {{option.number}}. {{option.text}}
                  </td>

                  </div>

                </tr></table>

            </div>

          </td><td width="10%"></td></tr></table>
          <br><br>

          </div>



      </div>

</template>

<script>

// import vueSlider from 'vue-slider-component'

var apiURL = 'https://localhost:7071/api/c/'

export default {
  name: 'Assessment',
  props: ['company'],
  components: {
    // vueSlider
  },
  data () {
    return {
      assessment: { company: '' },
      model: { id: 'x', sections: [] },
      answers: [],
      loaded: false
    }
  },
  created () {
    this.fetchFromServer()
  },
  methods: {
    fetchFromServer: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.company)
      xhr.onload = function () {
        var assessment = JSON.parse(xhr.responseText)
        self.assessment = assessment
        self.model = assessment.model
        self.assessment.model = null
        self.answers = assessment.Answers
        self.loaded = true
      }
      xhr.send()
    },

    sendToServer: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('POST', apiURL + self.company, /* async */ true)
      var data = JSON.stringify(self.assessment)
      xhr.send(data)
    },

    getAnswer: function (qid) {
      var answer = this.answers.find(function (a) { return a.id === qid })
      return answer != null ? answer.answer : false
    },

    saveAnswer: function (question, option) {
      var found = false
      this.assessment.Answers.forEach(function (a) {
        if (a.id.valueOf() === question.id.valueOf()) {
          a.answer = option.number
          found = true
          console.log(a.id + '=' + option.number)
        }
      })

      if (!found) {
        this.assessment.Answers.push({ 'id': question.id, 'answer': option.number })
      }
    }
  }
}
</script>

<style scoped>

  .Assessment {
    font-family: 'Segoe UI Light', Tahoma, Verdana, Arial, sans-serif;
    font-size: 14pt;
    color: #444;
  }

  .sectiontitle {
    font-family: 'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: #dddddd solid 1px;
    font-size: 2.6em;
    margin-bottom: 20pt;
  }

  .question {
    font-size: 1.6em;
    font-weight: bold;
    margin-top: 12pt;
  }

  .option
  {
    font-size: 1.2em;
    font-color: black;
  }

  .box {
    background: #fafafa;
    margin: 5 auto;
    padding: 20px;
    text-align: left;

    border: #dddddd solid 1px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    /* box-shadow */
    -webkit-box-shadow:#dddddd 3px 3px 5px;
    -moz-box-shadow: #dddddd 3px 3px 5px;
    box-shadow: #dddddd 3px 3px 5px;
  }



@keyframes click-wave {
  0% {
    height: 30px;
    width: 30px;
    opacity: 0.35;
    position: relative;
  }
  100% {
    height: 100px;
    width: 100px;
    margin-left: -40px;
    margin-top: -40px;
    opacity: 0;
  }
}

.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 2px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 25px;
  width: 25px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
}
.option-input:hover {
  background: #9faab7;
}
.option-input:checked {
  background: darkgreen;
}
.option-input:checked::before {
  height: 25px;
  width: 25px;
  position: absolute;
  content: '✔';
  display: inline-block;
  font-size: 20px;
  text-align: center;
  line-height: 25px;
}
.option-input:checked::after {
  -webkit-animation: click-wave 0.65s;
  -moz-animation: click-wave 0.65s;
  animation: click-wave 0.65s;
  background: green;
  content: '';
  display: block;
  position: relative;
  z-index: 100;
}
.option-input.radio {
  border-radius: 50%;
}
.option-input.radio::after {
  border-radius: 50%;
}


</style>
