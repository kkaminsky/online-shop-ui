<template>
    <v-card>
        <v-img :src="gameObj.img"></v-img>
        <v-card-text class="text--primary pb-0">
            <div>{{gameObj.name + gameObj.id}}</div>
            <div>Cost: {{gameObj.cost}}</div>
        </v-card-text>
        <v-card-actions>
<!--            <v-btn text color="normal">Read more</v-btn>-->
            <v-btn text color="primary" @click="buy(gameObj)" :disabled="disableBuy">Buy</v-btn>

        </v-card-actions>
    </v-card>
</template>

<script>
    import inCartGames from "../data/inCartGames";
    export default {
        name: "CardGameList",
        props:
        {
            gameObj: Object
        },
        methods:{
            buy(gameObj){
                this.$store.commit('addInCart',gameObj)
                //inCartGames.push(gameObj)
                this.disableBuy = true
            }
        },
        data () {
            return {
                disableBuy: false
            }
        }
    }
</script>

<style scoped>

</style>