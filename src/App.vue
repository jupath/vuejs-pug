<template lang="pug">
  #app
    .container
      app-header
      app-dashboard
</template>

<script>
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appDashboard : Dashboard
  }
}
</script>

<style lang="scss">
body {
  background: url('./assets/bg.svg') repeat;
}
</style>
