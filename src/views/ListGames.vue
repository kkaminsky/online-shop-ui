<template>
    <v-container>
        <v-row>
            <v-col md="6">
                <v-select
                        :items="filterTypes"
                        label="Фильтр по типу"
                        outlined
                ></v-select>
            </v-col>
            <v-col md="6">
                <v-select
                        :items="filterGenres"
                        label="Фильтр по жанру"
                        outlined
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="game in listGames" :md="3" :key="game.id">
                <card-game-list :game-obj="game"></card-game-list>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import listGames from "../data/listGames";
    import CardGameList from "../components/CardGameList";
    export default {
        name: "ListGames",
        data() {
            return {
                listGames: listGames,
                filterTypes: [
                    {
                        text: 'Для всей семьи',
                        value: 'family'
                    },
                    {
                        text: 'Для двоих',
                        value: 'pair'
                    }
                ],
                filterGenres: [
                    {
                        text: 'Криминал',
                        value: 'crime'
                    },
                    {
                        text: 'Экономика',
                        value: 'economy'
                    }
                ]
            }
        },
        components: {
            CardGameList
        }
    }
</script>

<style scoped>

</style>