<template>
  <div id="app">

  <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap@next/dist/css/bootstrap.min.css"/>
  <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"/>    
  
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
