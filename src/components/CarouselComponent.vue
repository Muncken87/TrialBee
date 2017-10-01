<template>
  <div id="carousel-example-generic" class="carousel slide container" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active dot"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1" class="dot"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2" class="dot"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <div class="carousel-image" style="background-image: url('src/assets/Carousel-Bgplate.png')"></div>
        <div class="carousel-side-image" style="background-image: url('src/assets/Carousel-image3.png')"></div>
      </div>
      <div class="item">
        <div class="carousel-image" style="background-image: url('src/assets/Carousel-Bgplate.png')"></div>
      </div>
      <div class="item">
        <div class="carousel-image" style="background-image: url('src/assets/Carousel-Bgplate.png')"></div>
      </div>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="arrow-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="arrow-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
    }
  }
}
</script>
<style lang="sass" scoped>
.carousel-control
  background-color: none !important
  background-image: none !important
  height: 100%

  .arrow-right,.arrow-left
    height: 60px
    width: 60px
    position: absolute
    background-size: contain
    transform: translate(-10%, -50%)

    @media (max-width: 768px)
      height: 45px
      width: 45px

    @media (max-width: 450px)
      height: 30px
      width: 30px

  .arrow-right
    top: 50%
    right: 75px
    background-image: url('../assets/icon/xlarge/white/circlearrowback_right.png')

  .arrow-left
    top: 50%
    left: 75px
    background-image: url('../assets/icon/xlarge/white/circlearrowback.png')

.dot
  background-color: rgba(0,0,0,0.5)
  border: 0px solid rgba(0,0,0,0)
  width: 15px
  height: 15px
.active
  background-color: white

.carousel-inner
.item
  .carousel-image
    background-size: cover
    height: 75vh
  .carousel-side-image
    position: absolute
    top: -50px
    left: 35px
    background-size: cover
    width: 300px
    height: calc(75vh + 100px)

.carousel
  margin: 200px auto

.container
  max-width: 900px

</style>
