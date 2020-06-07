<template>
    <v-container>
        <v-row>
            <v-col cols="2"></v-col>
            <v-col >
                <v-breadcrumbs :items="items2">
                    <template v-slot:divider>
                        <v-icon>mdi-forward</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
        <v-row >
            <v-col cols="2"></v-col>
            <v-col cols="8">
                <div>
                    <!--<v-select v-model="enabled" :items="slots" label="Slot" clearable></v-select>-->
                    <v-data-table
                            :headers="headers"
                            :items="items"
                            :search="search"
                            :show-select="showSelect"
                            :loading="isLoading"
                            hide-default-footer
                            item-key="name"
                            class="elevation-3"
                    >
                        <template v-slot:body="{ items }">
                                <tr v-for="item in items" :key="item.id">
                                    <td width="10%" align="left">
                                        <v-select  outlined dense  v-model="item.count" :items="[1,2,3,4,5]" class="mt-5">

                                        </v-select>
                                    </td>
                                    <td align="left">
                                        Pictrue
                                    </td >
                                    <td align="left">
                                        {{item.name+item.id}}
                                    </td>
                                    <td align="left">
                                        Status
                                    </td>
                                    <td align="left">
                                        {{item.cost}}
                                    </td>
                                    <td align="left">
                                        {{item.cost * item.count}}
                                    </td>
                                    <td>

                                            <v-icon small @click="delete1(item)">
                                                mdi-delete
                                            </v-icon>

                                    </td>
                                </tr>
                        </template>
                        <template v-if="isEnabled('no-data')" v-slot:no-data>
                            NO DATA HERE!
                        </template>
                        <template v-if="isEnabled('no-results')" v-slot:no-results>
                            NO RESULTS HERE!
                        </template>
                        <template  v-slot:footer>
                            <div class="subtitle-2 pb-2">

                                Subtotal (excl. VAT): {{subTotal}}
                            </div>
                        </template>
                    </v-data-table>
                </div>
            </v-col>
            <v-col cols="2"></v-col>

        </v-row>
        <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="6"></v-col>
            <v-col cols="2">
                <v-btn color="info"  to="/checkout">Proceed to checkout</v-btn>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
    </v-container>

</template>

<script>
   import inCartGames from "../data/inCartGames";

    export default {
        name: "CartComponent",
        data () {
            return {
                enabled: null,
                items2: [
                    {
                        text: 'Your cart',
                        disabled: false,
                        href: 'breadcrumbs_dashboard',
                    },
                    {
                        text: 'Shipment address',
                        disabled: true,
                        href: 'breadcrumbs_link_1',
                    },

                    {
                        text: 'Confirm',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                    }
                ],
                search: null,
                slots: [
                    'body',
                    'body.append',
                    'body.prepend',
                    'footer',
                    'header.data-table-select',
                    'header',
                    'progress',
                    'item.data-table-select',
                    'item.<name>',
                    'no-data',
                    'no-results',
                    'top',
                ],
                headers: [
                    {
                        text: 'Quantity',
                        align: 'start',
                        value: 'count',
                    },
                    { text: '',sortable: false },
                    { text: 'Product description', value: 'calories' ,sortable: false},
                    { text: 'Current status'},
                    { text: 'Unit Price', value: 'cost' },
                    { text: 'Amount', value: 'protein' },
                    { text: '',sortable: false },
                ],
            }
        },

        computed: {
            items(){
                return this.$store.state.inCartGames
            },
            showSelect () {
                return this.isEnabled('header.data-table-select') || this.isEnabled('item.data-table-select')
            },
            subTotal(){
                let a = 0;
                this.items.forEach(item=>{
                    a+=item.count*item.cost
                })
              return a
            },
            hideHeaders () {
                return !this.showSelect
            },
            isLoading () {
                return this.isEnabled('progress')
            },
        },

        watch: {
            enabled (slot) {
                if (slot === 'no-data') {
                    this.items = []
                } else if (slot === 'no-results') {
                    this.search = '...'
                } else {
                    this.search = null
                    this.items = desserts
                }
            },
        },

        methods: {
            isEnabled (slot) {
                return this.enabled === slot
            },
            delete1(game){
                this.$store.commit('deleteFormCart',game)
            }
        }
    }
</script>

<style scoped>

</style>