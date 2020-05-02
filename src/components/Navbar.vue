<template>
    <nav>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                width="80%">
            <v-btn
                    width="100%"
                    color="white"
                    elevation="0"
                    class="font-weight-bold body-2"
                    x-large
                    v-for="link in links" :key="link.text"
                    router :to="link.route">{{link.text}}</v-btn>
        </v-navigation-drawer>
        <v-toolbar id="header" color="black" height="80%">
            <v-toolbar-title class="ml-3 my-5" width="100%" >
                <v-btn color="transparent" :ripple="false" height="100%" width="100%" router to='/'>
                    <v-img width="20vw" min-width="150px" src="../assets/HIPHOPINFO-logo-white.png"></v-img>
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items @click.stop="drawer = !drawer" class="hidden-md-and-up">
                <v-btn color="black" elevation="0">
                    <v-icon large color="white">mdi-menu</v-icon>
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                        color="black"
                        class=" white--text px-8 font-weight-bold subtitle-2" large elevation="0"
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
                    {text: '日本人ラッパー一覧', route: '/japanese'},
                    {text: '世界のラッパー一覧', route: '/foreigner'},
                    {text: 'イベント・リリース情報', route: '/information'},
                    {text: 'お問い合わせ', route: '/contact'}
                ],
            }
        }
    }
</script>