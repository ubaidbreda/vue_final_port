<template>
   <MDBNavbar expand="lg" dark bg="dark" class="fixed-top" container>
    <MDBNavbarBrand 
      data-hover="UbaidullahBreda" 
      class="text" 
      href="#">
        ウバイドゥラブレダ
      </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem router-link :to="{name: 'Home'}">
          Home
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name: 'About'}">
          About
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name: 'Resume'}">
          Resume
        </MDBNavbarItem>
      </MDBNavbarNav>
      <MDBNavbarNav>
        <MDBNavbarItem router-link :to="{name: 'Projects'}">
          Projects
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name: 'Testimonials'}">
          Testimonials
        </MDBNavbarItem>
      </MDBNavbarNav>
      <MDBNavbarNav>
        <MDBNavbarItem router-link :to="{name: 'Contact'}">
          Contact
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
import {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  export default {
    components: {
      MDBBtn,
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem
    },
    setup() {
      const collapse1 = ref(false);
      const dropdown1 = ref(false);
      return {
        collapse1,
        dropdown1
      }
    }
  };
</script>

<style>
.text:hover{
    font-size: 0%;
    }

.text:hover:after{
  content: attr(data-hover);
  font-size: 20px;
    }
</style>  