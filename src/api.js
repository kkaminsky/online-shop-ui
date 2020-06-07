const API_URL = 'http://shop.sceri.net/'
const API_ENDPOINTS = {
    LIST_GAMES: API_URL + 'api/shop/games/list',
    CREATE_ORDER: API_URL + 'api/shop/order/create'
}
import axios from 'axios'

const requests = {
    getGameList() {
        return axios.get(API_ENDPOINTS.LIST_GAMES).then(res => {
            return res.data.games.map(item => {
                return {
                    id: item.id,
                    name: item.title,
                    cost: 0.0,
                    count: 1,
                    img: "https://cs1.livemaster.ru/storage/6f/b7/28e11f07c9b26c017e888310e46a--aktivnyj-otdyh-i-razvlecheniya-igra-nastolnaya-parchis.jpg"
                }
            })
        })
    },
    createOrder(items, userId) {
        return axios.post(API_ENDPOINTS.CREATE_ORDER, {games: items, userId: userId}).then(res => {
            return res.data.success
        })
    }
}

export {requests}