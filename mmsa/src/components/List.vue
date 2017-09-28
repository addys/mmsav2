<template>
    <div id="list-template">

        <div v-if="!loaded" width="100%" align="center"><img src="/App/static/loading.jpg" width="300"></div>

        <div v-if="loaded">

          <div class="title">Existing Assessments</div>

          <table class="box">
            <thead>
              <tr>
                  <th class="header" width="300">Company Name</th><th class="header">Last Updated</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="d in docs">
              <td class="text"> <router-link :to="{ name: 'Assessment', params: { company: d.company }}">{{ d.company }}</router-link></td>
              <td class="text">{{ d.timestamp | moment("DD-MM-YYYY") }}</td>
            </tr>
          </tbody>
        </table>

          <button v-on:click="sendToServer">Create New</button>

      </div>
      </div>

</template>

<script>

var apiURL = 'https://localhost:7071/api/list'

export default {
  name: 'List',
  data () {
    return {
      docs: [],
      moment: window.moment,
      loaded: false
    }
  },
  created: function () {
    this.fetchFromServer()
  },
  methods: {
    fetchFromServer: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL)
      xhr.onload = function () {
        var results = JSON.parse(xhr.responseText)
        self.docs = results
        self.loaded = true
      }
      xhr.send()
    }
  }

}
</script>

<style scoped>

  #list-template {
    font-family: 'Segoe UI Light', Tahoma, Verdana, Arial, sans-serif;
    font-size: 14pt;
    color: #444;
  }

  .title {
    font-family: 'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: #dddddd solid 1px;
    font-size: 2.2em;
  }

  .header {
    font-size: 1.6em;
    font-weight: bold;
    margin-top: 12pt;
  }

  .text
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
</style>
