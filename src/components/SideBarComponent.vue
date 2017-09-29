<template>
  <section class="sidebar" v-bind:class="{ remove: hide }">
    <div class="sidebar-header">
      <button type="button" class="close" aria-label="Close" @click="closeSidebar">
        <span></span>
        <span></span>
      </button>
      <p>FG342HY</p>
      <h1>Sidebar</h1>
    </div>
    <div class="row">
      <section class="detail-list">
        <div class="col-md-4">
          <div class="card">
            <img src="src/assets/icon/xxlarge/participant-details@3x.png"/>
            <p>Participant details</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img src="src/assets/icon/xxlarge/settings@3x.png"/>
            <p>Configuration</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img src="src/assets/icon/xxlarge/importantevents@3x.png"/>
            <p>Appointments</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img src="src/assets/icon/xxlarge/statistics@3x.png"/>
            <p>Activity</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img src="src/assets/icon/xxlarge/notification@3x.png"/>
            <p>Notifications</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img src="src/assets/icon/xxlarge/timeline@3x.png"/>
            <p>Timeline</p>
          </div>
        </div>
    </section>
    </div>
  </section>
</template>

<script>

export default {
  name: 'main-page',
  data() {
    return{
      hide: false
    }
  },
  methods: {
    closeSidebar: function() {
      this.$emit('closeSidebar');
    }
  }
}
</script>
<style lang="sass">
.sidebar
  position: fixed
  top: 0
  right: -60vw
  width: 60vw
  background-color: #f4f4f4
  color: black
  height: 100vh
  border-left: 1px solid #ccc
  transition: all 0.2s ease
  overflow: auto


  .sidebar-header
    background-color: white
    border-bottom: 1px solid #ccc
    padding: 30px

    button
      outline: none
      span
        width: 25px
        height: 2px
        position: relative
        display: block
        background-color: #000
        &:first-of-type
          transform: rotate(135deg)
          top: -2px
        &:last-of-type
          top: -4px
          transform: rotate(45deg)

    p
      color: #a7a6a6
      font-weight: bold
    h1
      margin-top: 0

  .detail-list
    padding: 30px

    .card
      border: 1px solid #ccc
      background-color: white
      text-align: center
      padding: 15px 0px
      margin-bottom: 30px
      box-shadow: 0px 8px 8px rgba(0,0,0,0.10)

      img
        height: 70px
        max-width: 70px
        margin-bottom: 15px
        margin-top: 15px

.remove
  right: -60vw !important
</style>
