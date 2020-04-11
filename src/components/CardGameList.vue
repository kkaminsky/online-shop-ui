<template>
    <v-card>
        <v-img :src="gameObj.img"></v-img>
        <v-card-text class="text--primary pb-0">
            <div>{{gameObj.name}}</div>
        </v-card-text>
        <v-card-actions>
            <v-btn text color="normal">Узнать больше</v-btn>
            <v-btn text color="primary">Купить</v-btn>

        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "CardGameList",
        props:
        {
            gameObj: Object
        }
    }
</script>

<style scoped>

</style>