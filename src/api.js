const API_URL = 'http://shop.sceri.net/'
const API_ENDPOINTS = {
    LIST_GAMES: API_URL + 'api/shop/games/list',
    CREATE_ORDER: API_URL + 'api/shop/order/create',
    SIGNIN: API_URL + 'api/auth/signin',
    REGISTER: API_URL + 'api/auth/signup'
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
    },
    signin (email, password) {
        return axios.post(API_ENDPOINTS.SIGNIN, {email: email, password: password}).then(res => {
                return res.data
            }
        )
    },
    signup (email, name, password) {
        return axios.post(API_ENDPOINTS.REGISTER, {
            email,
            password,
            username:name,
            phoneNumber: '123',
            response: 'string'
        }).then(res => {
            return res.data.success
        })
    }
}

export {requests}