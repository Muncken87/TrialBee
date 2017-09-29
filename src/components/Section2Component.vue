<template>
  <section class="section-2">
    <div class="container t-center z">
      <div class="studies-title">
        <h4>Studies</h4>
        <h2>Chronical Diseases</h2>
      </div>
      <div class="studies-posts">
        <div class="row">

          <div class="col-md-4">
            <img src="../assets/Study_item1@3x_trim.jpg">
            <div class="card">
              <h3>IPSEN</h3>
              <h2>Do you have multiple myeloma</h2>
              <p>Be a part of an important clinical research study investigating a threatment on multiple myeloma</p>
            </div>
          </div>

          <div class="col-md-4">
            <img src="../assets/Study_item2@3x_trim.jpg">
            <div class="card">
              <h3>IPSEN</h3>
              <h2>Do you have multiple myeloma</h2>
              <p>Be a part of an important clinical research study investigating a threatment on multiple myeloma</p>
            </div>
          </div>

          <div class="col-md-4">
            <img src="../assets/Study_item3@3x_trim.jpg">
            <div class="card">
              <h3>IPSEN</h3>
              <h2>Do you have multiple myeloma</h2>
              <p>Be a part of an important clinical research study investigating a threatment on multiple myeloma</p>
            </div>
          </div>

          <div class="col-md-4">
            <img src="../assets/Study_item4@3x_trim.jpg">
            <div class="card">
              <h3>IPSEN</h3>
              <h2>Do you have multiple myeloma</h2>
              <p>Be a part of an important clinical research study investigating a threatment on multiple myeloma</p>
            </div>
          </div>

        </div><!-- end row -->
      </div><!-- end studies post -->
    </div><!-- end container -->
  </section>
</template>

<script>

export default {
  name: 'app'
}
</script>
<style lang="sass" scoped>
.section-2
  background-image: url('../assets/Bgpart2_rot.png')
  height: 600px
  background-size: cover
  background-position: center center
  background-repeat: no-repeat
  width: 100%
  padding: 10em 0

  .studies-title
    margin-top: 7em
    h2
      font-weight: bold
      margin-top: 0


  .studies-posts
    margin-top: 5em
    position: relative

    .card
      background-color: white
      padding: 20px
      text-align: left
      box-shadow: 0px 0px 7px rgba(0,0,0,0.20)

      h3,h2,p
        color: black

      h3
        color: #747474
        font-size: 14px
        text-transform: uppercase
        font-weight: 300
        margin-bottom: 5px

      h2
        font-weight: bold
        font-size: 24px
        margin-top: 0

      p
        font-weight: 400

    .col-md-4
      margin-bottom: 30px
      border-radius: 4px

.z
  z-index: 2

img
  width: 100%

  // @media (min-device-pixel-ratio: 2)
  //   background-image: url('../assets/Bgpart1@2x.png')
  // @media (min-device-pixel-ratio: 3)
  //   background-image: url('../assets/Bgpart1@3x.png')

</style>
