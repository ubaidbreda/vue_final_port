<template>
  <MDBFooter dark bg="dark" class="fixed-bottom" :text="['center', 'lg-start']">
    <!-- Copyright -->
    <div class="text-center p-3">
      © 2020 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>

<script>
import { MDBFooter } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBFooter
    },
  };
</script>

<style>

</style>