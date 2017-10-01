<template>
  <div id="app">
    <table>
      <tr width="100%">
        <td><img src="/app/static/logo.png" width="33%"></td>
        <td align="right">Hello {{username()}}</td>
      </tr>

    </table>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  username() {
    var name = localStorage.getItem('username')
    return (name) ? name : '?';
  }
}
</script>
