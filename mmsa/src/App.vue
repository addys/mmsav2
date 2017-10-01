<template>
  <div id="app">
    <table>
      <tr width="100%">
        <td><img src="/app/static/logo.png" width="33%"></td>
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
      return name || '?'
    }
  }
}
</script>
