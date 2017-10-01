<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }
}
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,700,900')
body
  color: white
  font-family: Raleway
  position: relative
  height: 100%
html
  height: 100%
  position: relative


.t-center
  text-align: center

img
  height: auto
  max-width: 100%
</style>
