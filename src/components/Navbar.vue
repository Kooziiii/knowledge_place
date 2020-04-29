<template>
    <nav>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                width="100%">
            <v-btn
                    width="100%"
                    color="white"
                    elevation="0"
                    class="font-weight-bold"
                    x-large
                    v-for="link in links" :key="link.text"
                    router :to="link.route">{{link.text}}</v-btn>
        </v-navigation-drawer>
        <v-toolbar id="header" color="black" height="100%" display="flex">
            <v-toolbar-title class="my-5">
                <v-img width="300px" src="../assets/HIPHOPINFO-logo-white.png"></v-img>
            </v-toolbar-title>
            <!--<p class="pl-7 mt-4 white--text title hidden-md-and-down">HIPHOP INFOMATION</p>-->
            <v-spacer></v-spacer>
            <v-toolbar-items @click.stop="drawer = !drawer" class="hidden-md-and-up">
                <v-btn color="black" elevation="0">
                    <v-icon large color="white">mdi-menu</v-icon>
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-items class="hidden-sm-and-down" height="10%">
                <v-btn
                        color="black"
                        class=" white--text mr-8 font-weight-bold subtitle-2" large elevation="0"
                        v-for="link in links" :key="link.text"
                        router :to="link.route">{{link.text}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </nav>
</template>
<script>
    export default {
        name: "Navbar",
        data() {
            return {
                drawer: null,
                links: [
                    {text: 'aboutme', route: '/'},
                    {text: 'outputs', route: '/outputs'},
                    {text: 'skills', route: '/skills'},
                    {text: 'contact', route: '/contact'}
                ],
            }
        }
    }
</script>