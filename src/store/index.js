import Vue from 'vue'
import Vuex from 'vuex'
import listGames from "../data/listGames";
import inCartGames from "../data/inCartGames";
import {requests} from "../api";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        listGames: [],
        inCartGames: [],
        orderSuccesfulCreated: null
    },
    mutations: {
        addInCart (state,game) {
            state.inCartGames.push(game)
        },
        deleteFormCart(state,game){
            state.inCartGames = state.inCartGames.filter(g=>g.id !== game.id)
        },
        clearCart(state) {
            state.inCartGames = []
        }
    },
    actions: {
        requestListGames ({state}) {
            requests.getGameList().then(games => {
                state.listGames = games
            })
        },
        createOrder ({state, commit}) {
            let orderPayload = []
            state.inCartGames.forEach(item => {
                console.log('item')
                console.log('items', Array(item.count).fill(item.id))
                orderPayload = orderPayload.concat(Array(item.count).fill(item.id))
            })
            let idUser = localStorage.getItem('userId')
            requests.createOrder(orderPayload, idUser).then(success => {
                state.orderSuccesfulCreated = success
            })
            // commit('clearCart')
        }
    }
})

export default store