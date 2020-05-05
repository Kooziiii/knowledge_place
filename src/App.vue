<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer class="px-0 py-0" color="black">
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footer from "./components/Footer";

export default {
  name: 'App',
  components:{
    Footer,
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
