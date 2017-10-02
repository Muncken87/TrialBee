<template>
  <!-- first section underneath the jumbo on first page -->
  <section class="section-1">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-md-offset-1 col-sm-offset-1">
          <h2>Something important</h2>
          <p>It was popularised in the 1960's with the release of Letraset sheets containing Loremipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
         <div class="col-md-7 col-sm-7 phone-img t-center m-height">
          <img src="../assets/Mobile.png"/>
        </div>
      </div> <!-- end row -->
    </div> <!-- end container -->
  </section> <!-- end section -->
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="sass" scoped>
.section-1
  margin-top: 5em
  h2,p
    color: black
  h2
    font-weight: bold

  .phone-img
    img
      position: relative
      top: -500px
      height: auto
      max-width: 100%
      @media (max-width: 1200px)
        top: -220px
        max-width: 75%
        margin-top: 50px

      @media (max-width: 992px)
        top: -75px

      @media (max-width: 768px)
        top: 0

      @media (max-width: 450px)
        top: 0

  .m-height
    max-height: 400px
    @media (max-width: 768px)
      max-height: 700px
    @media (max-width: 450px)
      max-height: 500px

</style>
