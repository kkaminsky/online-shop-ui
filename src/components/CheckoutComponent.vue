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
        <v-row class="mt-5">
            <v-col cols="2"></v-col>
            <v-col >
                <h1 class="display-1 font-weight-bold mb-3" style="text-align: left">
                    1. Address
                </h1>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
        <v-row>
            <v-col cols="2"></v-col>
            <v-col >
                <v-text-field
                        outlined
                        label="choose your address"
                v-model="address">

                </v-text-field>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
        <v-row >
            <v-col cols="2"></v-col>
            <v-col cols="8">
                <div>
                    <yandex-map :coords="coords" @click="onClick">
                        <ymap-marker
                                :coords="coords"
                                :options="options"
                        ></ymap-marker>
                    </yandex-map>
                </div>
            </v-col>
            <v-col cols="2"></v-col>

        </v-row>
        <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="6"></v-col>
            <v-col cols="2">
                <v-btn color="info"  to="/payment">go to payment</v-btn>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "CheckoutComponent",
        data () {
            return {
                enabled: null,
                coords: [57.153110,65.578404],
                address: "",
                options:{
                    preset: "islands#redDotIcon"
                },
                items2: [
                    {
                        text: 'Your cart',
                        disabled: false,
                        href: 'cart',
                    },
                    {
                        text: 'Shipment address',
                        disabled: false,
                        href: 'checkout',
                    },
                    {
                        text: 'Payment',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                    },
                    {
                        text: 'Confirm',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                    }]
            }
        },
        methods:{
            markerCallback(mrk){
                this.mrk = mrk
            },
            onClick(e) {

                this.coords = e.get('coords')

                this.$http.get("https://geocode-maps.yandex.ru/1.x/?apikey=59a55828-0cd7-468b-a92c-c702d2937654&format=json&geocode="+e.get('coords')[1].toString()+","+e.get('coords')[0].toString()).then(
                    res=>{
                        console.log(res)
                        this.address = null
                        this.address = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.name
                        //this.addressPoints = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')
                    },
                    err=>{
                        alert(err.message)
                    })
            }
        }
    }
</script>

<style scoped>
    .ymap-container {
        height: 600px;
    }
    .red {
        color: red;
    }
</style>