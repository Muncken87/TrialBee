<template>
  <div>
    <app-jumbo></app-jumbo>
    <app-section-1></app-section-1>
    <app-section-2></app-section-2>
  </div>
</template>

<script>
import JumboComponent from './JumboComponent.vue'
import Section1Component from './Section1Component.vue'
import Section2Component from './Section2Component.vue'
export default {
  name: 'main-page',
  components: {
    appJumbo: JumboComponent,
    appSection1: Section1Component,
    appSection2: Section2Component,
  }
}
</script>
<style lang="sass" scoped>

</style>
