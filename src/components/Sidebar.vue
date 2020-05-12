<template>
    <!-- ページネーションの設定-->
    <v-content>
        <div class="text-center">
            <v-list>
                <v-list-item v-for="list in displayLists" :key="list.index">
                    <v-list-item-content>
                        <v-list-item-title>{{ list.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-pagination
                    class="pagination"
                    :total-visible="7"
                    v-model="page"
                    :length="length"
                    @input = "pageChange"
            ></v-pagination>
        </div>
    </v-content>
    <!--
    <v-container>
        <v-row>
            <v-col cols="8">
                <v-card>
                    <v-tabs background-color="white" color="deep-purple accent-4" right>
                        <v-tab>Landscape</v-tab>
                        <v-tab>City</v-tab>
                        <v-tab>Abstract</v-tab>
                        <v-tab>None</v-tab>
                        <v-tab-item v-for="n in 4" :key="n">
                            <v-container fluid>
                                <v-row>
                                    <v-col height="100px" v-for="i in 6" :key="i" cols="12" md="6">
                                        <v-img
                                                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                                                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                                aspect-ratio="1"
                                        ></v-img>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-col>
            <v-col cols="4">
                <p>メイン記事</p>
            </v-col>
        </v-row>
    </v-container>-->
</template>

<script>
    export default {
        name: "Sidebar",
        data () {
            return {
                page: 1,
                lists: [],
                displayLists: [],
                pageSize: 10,
            }
        },
        methods: {
            pageChange: function(pageNumber){
                this.displayLists = this.lists.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
            }
        },
        mounted: function(){
            this.lists = new Array(99).fill().map((v,i)=> {
                return { id : i,title : 'Title' + i };
            });

            this.length = Math.ceil(this.lists.length/this.pageSize);

            this.displayLists = this.lists.slice(this.pageSize*(this.page -1), this.pageSize*(this.page));
        }
    }
</script>

<style scoped>
    .pagination :focus{
        outline: none;
    }
</style>