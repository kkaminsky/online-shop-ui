import Vue from 'vue'
import Vuex from 'vuex'
import listGames from "../data/listGames";
import inCartGames from "../data/inCartGames";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        listGames: listGames,
        inCartGames: inCartGames
    },
    mutations: {
        addInCart (state,game) {
            state.inCartGames.push(game)
        },
        deleteFormCart(state,game){
            state.inCartGames = state.inCartGames.filter(g=>g.id !== game.id)
        }
    }
})

export default store