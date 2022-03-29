<template>
<div class="pt-5 pb-5">

</div>
<div class="container rounded shadow-5-strong border pt-4 pb-4 bg-light">
  <h1><u>About Me</u></h1>
  <div class="row border-top pb-2">
    <div class="col-6 pt-4">
        <img :src="require('@/assets/landing/hero_img.jpg')" alt="About.Img" srcset="" class="img-fluid rounded">
    </div>
    <div class="col pt-4">
      <h3><u>head</u></h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, iste nesciunt. Voluptatibus pariatur esse perspiciatis qui illum nesciunt minus quaerat inventore, autem a maxime consectetur assumenda unde sint natus fugit.</p>
      <h3><u>head</u></h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, iste nesciunt. Voluptatibus pariatur esse perspiciatis qui illum nesciunt minus quaerat inventore, autem a maxime consectetur assumenda unde sint natus fugit.</p>
      <br>
      <div class="row">
        <div class="col-6">
          <h4><u>details</u></h4>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div class="col-6">
          <h4><u>hobbies</u></h4>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>
      <br>
      <MDBBtn color="dark" size="lg">Download CV</MDBBtn>
    </div>
    
  </div>
</div>

</template>

<script>
import { 
    MDBBtn 
  } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBBtn
    }
  };
</script>

<style>

</style>
