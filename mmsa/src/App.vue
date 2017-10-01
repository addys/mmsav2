<template>
  <div id="app">
    <table>
      <tr width="100%">
        <td><img src="/app/static/logo.png" width="33%"></td>
        <td align="right" width="200">
          Hello {{username()}}
          <br/>
          <a href="/.auth/logout?post_logout_redirect_uri=/app#/login">Sign Out</a>
        </td>
      </tr>

    </table>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    username () {
      var name = localStorage.getItem('username')
      return name || '?'
    }
  }
}
</script>
