<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">
        <img src="../assets/Logo/horizontal2-nosubtext.png"/>
      </a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#1">Dolor<span class="sr-only">(current)</span></a></li>
        <li><a href="#2">Ipsum</a></li>
        <li><a href="#3">Lorem</a></li>
        <li><a href="#4">List</a></li>
        <li><a href="#5">Login</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="sass" scoped>
.navbar-default
  border-radius: 0
  background: none
  border: none
  padding: 15px 0px

  .navbar-nav
    li
      padding: 0px 20px
      a
       background: none
       color: white
       text-transform: uppercase
       font-weight: bold
        background: none
       &:hover,&:focus
        color: #c3c3c3

  .navbar-header
    margin-bottom: 15px

    .navbar-toggle
      &:hover,&:focus
        background-color: #2951c1

      .icon-bar
        background-color: white
</style>
