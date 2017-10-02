<template>
  <!-- Sidebar for the list section -->
  <section class="sidebar" v-bind:class="{ remove: hide, overflow: hide }">

    <div class="sidebar-header">
      <button type="button" class="close" aria-label="Close" @click="closeSidebar">
        <span></span>
        <span></span>
      </button>
      <p>FG342HY</p>
      <h1>Sidebar</h1>
      <div class="progress-block">
        <div class="progress-bar-shadow">
          <div class="progress-bar-fill"></div>
        </div>
      </div>
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
            <img src="src/assets/icon/mid/redalert.png" class="important-notice"/>
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

      </section> <!-- end detail list -->
    </div> <!-- end row -->
  </section> <!-- end sidebar section -->
</template>

<script>

export default {
  name: 'main-page',
  data() {
    return{
      // Boolean value for the sidebar to open or close 
      hide: false
    }
  },
  methods: {
    // Emit the closesidebar function and pass it on to the ListComponent
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
  right: -50vw
  width: 50vw
  background-color: #f4f4f4
  color: black
  height: 100vh
  border-left: 1px solid #ccc
  transition: all 0.2s ease
  overflow-x: hidden
  z-index: 2

  .sidebar-header
    background-color: white
    border-bottom: 1px solid #ccc
    padding: 15px

    .progress-block
      display: block
      width: 100%
      max-width: 100%
      .progress-bar-shadow
        position: relative
        background-color: rgba(0,0,0,0.1)
        height: 17px
        border-radius: 8px
        max-width: 100%
        width: 98%

        .progress-bar-fill
          position: absolute
          top: 3px
          left: 4px
          width: 50%
          background-color: #002b93
          height: 11px
          border-radius: 8px

    p
      color: #a7a6a6
      font-weight: bold
    h1
      margin-top: 0

    button
      outline: none
      position: relative
      display: block
      width: 25px
      height: 25px
      margin-right: 15px
      span
        position: absolute
        width: 25px
        height: 2px
        display: block
        background-color: #000
        left: 0
        top: 11px
        &:first-of-type
          transform: rotate(135deg)
        &:last-of-type
          transform: rotate(45deg)

  .detail-list
    padding: 15px
    @media (max-width: 450px)
      padding: 5px

    .card
      border: 1px solid #ccc
      background-color: white
      text-align: center
      padding: 15px 0px
      margin-bottom: 30px
      box-shadow: 0px 8px 8px rgba(0,0,0,0.10)
      position: relative

      img
        height: 70px
        max-width: 70px
        margin-bottom: 15px
        margin-top: 15px

      .important-notice
        position: absolute
        right: -25px
        top: -15px
        max-width: 50px
        height: auto
        margin: 0
        @media (max-width: 450px)
          right: -4px
          top: 4px

.remove
  right: -70vw !important

.overflow
  overflow: hidden
</style>
