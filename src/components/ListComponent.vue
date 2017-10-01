<template>
  <div class="list-jumbo">
    <app-nav></app-nav>
    <app-sidebar v-bind:class="{ active: seen }" v-on:closeSidebar="closeSideBar"></app-sidebar>
    <div class="m-top">
      <p>Study List</p>
      <h2>Patients</h2>
    </div>
    <div class="container">
      <div class="table-container">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th class="checkbox-box">
                <input type="checkbox" value="1" id="checkbox">
                <label for="checkbox"></label>
              </th>
              <th>Site</th>
              <th>Email</th>
              <th>Country</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="patient in patients" @click="selectedPatient(patient)" v-bind:class="{selectedPatient: patient.highlighted}">
            <td class="checkbox-box">
              <input type="checkbox" value="0" v-bind:id="patient.id" checked=''>
              <label v-bind:for="patient.id"></label>
            </td>
            <td class="bold">{{patient.name}}</td>
            <td>{{patient.email}}</td>
            <td><img v-bind:src="patient.countryImage">{{patient.country}}</td>
            <td>{{patient.city}}</td>
            <td>{{patient.status}}</td>
          </tr>
          </tbody>
        </table>
      </div> <!-- end table-container-->
  </div> <!-- end container -->
</div>
</template>

<script>
import NavComponent from './NavComponent.vue'
import SideBarComponent from './SideBarComponent.vue'
export default {
  name: 'list',
  components: {
    appNav: NavComponent,
    appSidebar: SideBarComponent
  },
  data() {
    return{
      patients: [
        {
          highlighted: false,
          name: 'Something important',
          email: 'something@test.se',
          country: 'France',
          city: 'Paris',
          status: true,
          id: 1,
          countryImage: '../src/assets/icon/flag/fr.png'
        },
        {
          highlighted: false,
          name: 'Le Bull Hopital de soleil',
          email: 'something@test.se',
          country: 'France',
          city: 'Paris',
          status: true,
          id: 2,
          countryImage: '../src/assets/icon/flag/fr.png'
        },
        {
          highlighted: false,
          name: 'Lestats hopital de la cheese',
          email: 'someemail@test.se',
          country: 'France',
          city: 'Paris',
          status: true,
          id: 3,
          countryImage: '../src/assets/icon/flag/fr.png'
        },
        {
          highlighted: false,
          name: 'London Hospital',
          email: 'sherlock@test.se',
          country: 'Great britain',
          city: 'London',
          status: true,
          id: 4,
          countryImage: '../src/assets/icon/flag/gb.png'
        },
        {
          highlighted: false,
          name: 'London Hospital',
          email: 'sherlock@test.se',
          country: 'Great britain',
          city: 'London',
          status: true,
          id: 5,
          countryImage: '../src/assets/icon/flag/gb.png'
        },
        {
          highlighted: false,
          name: 'Hopital Berlin',
          email: 'sherlock@test.se',
          country: 'Germany',
          city: 'Berlin',
          status: true,
          id: 6,
          countryImage: '../src/assets/icon/flag/ge.png'
        },
        {
          highlighted: false,
          name: 'Hospital de la Rue',
          email: 'sherlock@test.se',
          country: 'France',
          city: 'Paris',
          status: true,
          id: 7,
          countryImage: '../src/assets/icon/flag/fr.png'
        }
      ],
      seen: false
    }
  },
  methods: {
    selectedPatient: function(selected){
      this.seen = !this.seen;
      selected.highlighted = !selected.highlighted;
    },
    closeSideBar: function(){
      console.log("Parent closed sidebar toggled");
      this.seen = false;
    }
  }
}
</script>
<style lang="sass" scoped>
.list-jumbo
  background-color: #002b93
  height: 300px

  .m-top
    margin-top: 3em
    text-align: center

    h2,p
      text-transform: uppercase

    h2
      margin-top: 0.25em

  .table-container
    margin-top: 4em
    border: 1px solid #ccc
    background-color: #fff
    color: black

    .table>thead>tr>th
      border-bottom: 1px solid #ccc

    .table>thead>tr>th
      padding: 20px

    .table
      margin-bottom: 0
      tbody
        tr
          &:hover
            cursor: pointer

    thead
      box-shadow: 0px 2px 2px rgba(0,0,0,0.15)

    img
      margin-right: 10px

    .checkbox-box
      width: 25px
      position: relative

      label
        cursor: pointer
        position: absolute
        width: 25px
        height: 25px
        top: 18px
        left: 16px
        background: #fff
        border: 1px solid #ccc
        border-radius: 2px
        &:after
          opacity: 1
          content: ''
          position: absolute
          width: 20px
          height: 10px
          background: transparent
          top: 3px
          left: 3px
          border: 3px solid #002F8D
          border-top: none
          border-right: none
          transform: rotate(-45deg)


      input[type=checkbox]
        visibility: hidden
        &:checked + label:after
          opacity: 0

    .table>tbody>tr>td
      padding: 20px

  .bold
    font-weight: bold

.active
  right: 0

.selectedPatient
  background-color: #eee
</style>
