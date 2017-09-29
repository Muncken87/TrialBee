<template>
  <div id="app">
    <app-jumbo></app-jumbo>
    <app-section-1></app-section-1>
    <app-section-2></app-section-2>
  </div>
</template>

<script>
import JumboComponent from '../src/components/JumboComponent.vue'
import Section1Component from '../src/components/Section1Component.vue'
import Section2Component from '../src/components/Section2Component.vue'
export default {
  name: 'app',
  components: {
    appJumbo: JumboComponent,
    appSection1: Section1Component,
    appSection2: Section2Component
  }
}
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,700,900')
body
  color: white
  font-family: Raleway

.t-center
  text-align: center

img
  height: auto
  max-width: 100%

</style>
