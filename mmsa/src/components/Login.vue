<template>
  <div class="login">

    <a href="http://mmsa-v2.azurewebsites.net/.auth/login/facebook?post_login_redirect_uri=/app/login/">FB</a>
    <br/>
    <a href="http://mmsa-v2.azurewebsites.net/.auth/login/google?post_login_redirect_uri=/app/login/">GOOG</a>
    <br/>
    <a href="http://mmsa-v2.azurewebsites.net/.auth/login/microsoftaccount/callback?post_login_redirect_uri=/app/login/">MSFT</a>


  </div>
</template>

<script>

export default {
  name: 'login',
  created () {
  //  console.log('query = ' + JSON.stringify(this.$route.query))
  //  console.log('path = ' + JSON.stringify(this.$route.path))
  //  console.log('params = ' + JSON.stringify(this.$route.params))
  //  console.log('route = ' + JSON.stringify(this.$route))
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color:red;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
