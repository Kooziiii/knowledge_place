<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <router-view></router-view>
      <Sidebar></Sidebar>
    </v-content>

    <v-footer class="px-0 py-0" color="black">
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footer from "./components/Footer";
  import Sidebar from "./components/Sidebar";

export default {
  name: 'App',
  components:{
    Sidebar,
    Footer,
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
