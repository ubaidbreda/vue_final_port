<template>
<Navbar/>
  <router-view/>
<Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>


<style>
#app {
  font-family: "Lucida Console", "Courier New", monospace;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

MDBNavBarItem.router-link-exact-active {
  color: #42b983;
}
</style>
