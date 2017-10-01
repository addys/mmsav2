<template>
  <div class="login">

    <a href="http://mmsa-v2.azurewebsites.net/.auth/login/facebook?post_login_redirect_uri=/app">FB</a>
    <br/>
    <a href="http://mmsa-v2.azurewebsites.net/.auth/login/google?post_login_redirect_uri=/app">GOOG</a>
    <br/>
    <a href="http://mmsa-v2.azurewebsites.net/.auth/login/microsoftaccount/callback?post_login_redirect_uri=/app">MSFT</a>


  </div>
</template>

<script>

export default {
  name: 'login'
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
