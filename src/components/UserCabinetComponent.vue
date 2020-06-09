<template>
    <v-container>
        <v-row v-if="!token">
            <v-col cols="2"></v-col>
            <v-col cols="8">
                <v-card>
                    <div class="center mb-2 mt-2">
                        Сначала авторизуйтесь
                    </div>
                </v-card>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
        <v-row v-if="token">
            <v-col cols="2">

            </v-col>
            <v-col  cols="9">

                <v-card
                        class="pa-2"
                        raised
                        tile
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">USER</div>
                            <v-list-item-title class="headline mb-1">{{nick}}</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-avatar

                                size="100"

                        >
                            <v-avatar color="red" size="100">
                                <span class="white--text headline">NI</span>
                            </v-avatar>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-container fill-height fluid>
                            <v-row>
                                <v-col>


                                </v-col>
                                <v-col>

                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="4" align="left">

            </v-col>
            <v-col cols="6">
                <v-card
                        raised
                        class="pa-2"
                        tile
                >
                    <v-container fluid>
                        <v-subheader>Your orders</v-subheader>
                        <v-row justify="center">


                            <v-expansion-panels popout>
                                <v-expansion-panel
                                        v-for="(message, i) in listOrders"
                                        :key="i"
                                        hide-actions
                                >
                                    <v-expansion-panel-header>
                                        <v-row
                                                align="center"
                                                class="spacer"
                                                no-gutters
                                        >
                                            <v-col
                                                    cols="4"
                                                    sm="2"
                                                    md="1"
                                            >

                                            </v-col>

                                            <v-col
                                                    class="hidden-xs-only"
                                                    sm="5"
                                                    md="3"
                                            >
                                                <strong>Order {{message.id}}</strong>
                                                <span
                                                        v-if="message.total"
                                                        class="grey--text"
                                                >

                                                        &nbsp;({{ message.total }})
                                                </span>
                                            </v-col>

                                            <v-col
                                                    class="text-no-wrap"
                                                    cols="5"
                                                    sm="3"
                                            >
                                                <v-chip
                                                        v-if="message.new"
                                                        :color="`${message.color} lighten-4`"
                                                        class="ml-0 mr-2 black--text"
                                                        label
                                                        small
                                                >
                                                    {{ message.new }} new
                                                </v-chip>
                                                <strong v-html="message.title"></strong>
                                            </v-col>

                                            <v-col
                                                    v-if="message.excerpt"
                                                    class="grey--text text-truncate hidden-sm-and-down"
                                            >
                                                &mdash;
                                                тест
                                            </v-col>
                                        </v-row>
                                    </v-expansion-panel-header>

                                    <v-expansion-panel-content>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div>address: {{message.delivery.city}}</div>
                                            <div>cost: {{message.cost}}</div>
                                            <div>status: {{message.status}}</div>
                                            <div>Состав заказа:</div>
                                            <div v-for="itemGame in message.games"> {{itemGame}}</div>
                                        </v-card-text>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    import {requests} from "../api";

    export default {
        name: "UserCabinetComponent",
        beforeMount() {
            this.nick = localStorage.getItem('login')
            this.token = localStorage.getItem('token')
            this.userId = localStorage.getItem('userId')
            if (this.token) {
                requests.getOrders(this.token, this.userId).then(data => {
                    console.log('res', data)
                    this.listOrders = data.payload
                })
            }
        },
        created () {

        },
        data: () => ({
            userId: [],
            listOrders: [],
            nick : '',
            token: '',
            messages: [
                {
                    color: 'red',
                    icon: 'mdi-airplane-landing',
                    name: 'Social',
                    new: 1,
                    total: 3,
                    title: 'Wait',
                }
            ],
            lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
        })
    }
</script>

<style scoped>

</style>