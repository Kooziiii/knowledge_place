<template>
    <v-container>
        <v-row justify="center" no-gutters>
            <v-col lg="12" sm="12" md="12" class="px-1 text-center" width="100%">
                    <v-btn
                            color="black"
                            class=" white--text font-weight-bold" large elevation="0"
                            v-for="link in links" :key="link.text"
                            router :to="link.route">{{link.text}}</v-btn>
            </v-col>
            <v-col cols="12" class="pt-3 text-center" >
                <v-card class="flex" height="30px" tile color="black">
                <v-card-text class=" py-0 white--text">
                    <span class="subtitle-2">©︎ {{ new Date().getFullYear() }} HIPHOP INFO</span>
                </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Footer",
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

<style scoped>

</style>