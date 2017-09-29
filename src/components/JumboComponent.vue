<template>
	<section class="jumbo">
		<app-nav></app-nav>   
		  <div class="nav-content container">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-md-offset-1 col-sm-offset-1">
          <h5>Chapter 1</h5>
          <h2>Main important message</h2>
          <p>It was popularised in the 1960's with the release of Letraset sheets containing Loremipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <button class="button button-white">Read More</button>
          <button class="button button-transparent">
            <p>Read More</p></button>
        </div>
      </div>
    </div>
	</section>
</template>

<script>
import NavComponent from '../components/NavComponent.vue'
export default {
  name: 'app',
  components: {
    appNav: NavComponent
  }
}
</script>

<style lang="sass">
.jumbo
	background-image: url('../assets/Bgpart1.png')
	height: 600px
	background-size: cover
	background-position: center center
	background-repeat: no-repeat
	width: 100%

	@media (min-device-pixel-ratio: 2)
		background-image: url('../assets/Bgpart1@2x.png')
	@media (min-device-pixel-ratio: 3)
		background-image: url('../assets/Bgpart1@3x.png')


	.nav-content
		padding-top: 5em
		@media (max-width: 450px)
			padding-top: 0em
	h2,h5
		font-weight: bold

	h2
		margin-top: 0

	p
		line-height: 2

	.button
		padding: 10px 30px
		border-radius: 25px
		color: black
		border: 1px solid white
		margin-right: 15px
		transition: all 0.2s ease
		margin-top: 15px


		&:last-of-type
			margin-right: 0

	.button-white
		background-color: white
		&:hover
			background-color: transparent
			color: white

	.button-transparent
		background-color: transparent
		color: white

		p
			margin: 0
			line-height: 20px
			position: relative
			margin-left: 15px
			&:before
				content: url('../assets/Play.png')
				height: 10px
				width: 10px
				position: absolute
				top: 2px
				left: -25px


</style>
