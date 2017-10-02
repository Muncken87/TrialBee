<template>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active dot"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1" class="dot"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2" class="dot"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item" v-for="item in carousel_items" v-bind:class="{ active: item.active }">
        <div class="carousel-image" v-bind:style="{ backgroundImage: 'url(' + item.bg + ')'}">
          <div class="carousel-side-image" v-bind:style="{ backgroundImage: 'url(' + item.side_img + ')'}"></div>
        </div>
        <!-- container for carousel images and text -->
        <div class="jumbo-container container">
          <div class="jumbo-text-area">
            <div class="table-container">
              <div class="left-table">
                <img v-bind:src="item.icon"/>
              </div>
              <div class="right-table">
                <h2>{{item.header}}</h2>
                <h1>{{item.title}}</h1>
              </div>
            </div>
            <p>{{item.content}}</p>
          </div> <!-- end jumbo-text-area -->
        </div> <!-- end container -->
      </div> <!-- end item -->
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
      carousel_items: [
        {
         active: true,
         bg: '/src/assets/Carousel-Bgplate.png',
         side_img: '/src/assets/Carousel-image1.png',
         header: 'Process',
         title: 'Step 1: Lorem Ipsum',
         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat erat malesuada lacus blandit tempor. Duis at nibh finibus, hendrerit diam ut, pharetra est. In tincidunt eleifend nisi, non cursus enim laoreet pretium. Vestibulum congue maximus dignissim. Etiam vulputate tempor orci at ullamcorper. Phasellus enim neque, congue ut enim nec, faucibus rutrum diam. Mauris nec magna nec turpis porttitor pulvinar. Donec consequat orci id sodales placerat.',
         icon: '/src/assets/Step1-icon.png'
        },
         {
         bg: '/src/assets/Carousel-Bgplate.png',
         side_img: '/src/assets/Carousel-image2.png',
         header: 'Process',
         title: 'Step 1: Lorem Ipsum',
         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat erat malesuada lacus blandit tempor. Duis at nibh finibus, hendrerit diam ut, pharetra est. In tincidunt eleifend nisi, non cursus enim laoreet pretium. Vestibulum congue maximus dignissim. Etiam vulputate tempor orci at ullamcorper. Phasellus enim neque, congue ut enim nec, faucibus rutrum diam. Mauris nec magna nec turpis porttitor pulvinar. Donec consequat orci id sodales placerat.',
         icon: '/src/assets/Step2-icon.png'
        },
         {
         bg: '/src/assets/Carousel-Bgplate.png',
         side_img: '/src/assets/Carousel-image3.png',
         header: 'Process',
         title: 'Step 1: Lorem Ipsum',
         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat erat malesuada lacus blandit tempor. Duis at nibh finibus, hendrerit diam ut, pharetra est. In tincidunt eleifend nisi, non cursus enim laoreet pretium. Vestibulum congue maximus dignissim. Etiam vulputate tempor orci at ullamcorper. Phasellus enim neque, congue ut enim nec, faucibus rutrum diam. Mauris nec magna nec turpis porttitor pulvinar. Donec consequat orci id sodales placerat.',
         icon: '/src/assets/Step3-icon.png'
        }
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.carousel
  margin: 200px auto
  .carousel-control
    background-color: none !important
    background-image: none !important
    height: 100%
    opacity: 1
    &:hover
      opacity: 0.5

    .arrow-right,.arrow-left
      height: 45px
      width: 45px
      position: absolute
      background-size: contain
      transform: translate(-10%, -50%)
      @media (max-width: 992px)
        display: none

    .arrow-right
      top: 50%
      right: 75px
      background-image: url('../assets/icon/xlarge/white/circlearrowback_right.png')
      @media(max-width: 1070px)
        right: 25px

    .arrow-left
      top: 50%
      left: 75px
      background-image: url('../assets/icon/xlarge/white/circlearrowback.png')
      @media(max-width: 1070px)
        left: 25px
        

  .dot
    background-color: rgba(0,0,0,0.5)
    border: 0px solid rgba(0,0,0,0)
    width: 15px
    height: 15px
  .active
    background-color: white

  .carousel-inner
    overflow: visible
    .item
      .carousel-image
        background-size: cover
        height: 700px
        positon: relative
      .carousel-side-image
        position: absolute
        top: -50px
        left: 35px
        background-size: cover
        width: 300px
        height: calc(700px + 100px)
        @media(max-width: 1070px)
          display: none

      .jumbo-container
        position: absolute
        left: 375px
        top: 8em
        text-align: left
        max-width: 600px
        margin: 0 auto
        padding: 0px 25px
        @media(max-width: 1070px)
          left: 50%
          transform: translate(-50%,0)
          width: 700px
          max-width: 100%

        .jumbo-text-area
          display: table
          p
            line-height: 1.8
      
          .table-container
            margin-bottom: 1em
            
            .right-table
              display: table-cell
              vertical-align: middle

              h2,h1
                font-weight: bold
                text-transform: uppercase
                display: block

              h2
                color: #555555
                font-size: 1.7em
                @media (max-width: 768px)
                  font-size: 1em

              h1
                margin-top: 0
                @media (max-width: 768px)
                  font-size: 1.5em

            .left-table
              display: table-cell
              vertical-align: middle

              img
                vertical-align: middle
                margin-right: 20px
                @media (max-width: 768px)
                  max-width: 50px
</style>
