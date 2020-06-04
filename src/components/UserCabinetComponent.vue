<template>
    <v-container>
        <v-row>
            <v-col cols="2">

            </v-col>
            <v-col cols="9">

                <v-card
                        class="pa-2"
                        raised
                        tile
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">USER</div>
                            <v-list-item-title class="headline mb-1">Nickname</v-list-item-title>
                            <v-list-item-subtitle>Since 29 january 2018</v-list-item-subtitle>
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
                <v-card
                        class="pa-10"
                        raised
                        tile

                >
                    <v-list-item >
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1">Main info</v-list-item-title>
                            <v-list-item-subtitle>Contact data</v-list-item-subtitle>
                        </v-list-item-content>

                    </v-list-item>


                    <v-list two-line>
                        <v-list-item @click="">
                            <v-list-item-icon>
                                <v-icon color="indigo">mdi-phone</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>(650) 555-1234</v-list-item-title>
                                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                            </v-list-item-content>

                            <!--<v-list-item-icon>
                                <v-icon>mdi-message-text</v-icon>
                            </v-list-item-icon>-->
                        </v-list-item>

                        <v-list-item @click="">
                            <v-list-item-action></v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>(323) 555-6789</v-list-item-title>
                                <v-list-item-subtitle>Work</v-list-item-subtitle>
                            </v-list-item-content>

                            <!--<v-list-item-icon>
                                <v-icon>mdi-message-text</v-icon>
                            </v-list-item-icon>-->
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item @click="">
                            <v-list-item-icon>
                                <v-icon color="indigo">mdi-email</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>aliconnors@example.com</v-list-item-title>
                                <v-list-item-subtitle>Personal</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item @click="">
                            <v-list-item-action></v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>ali_connors@example.com</v-list-item-title>
                                <v-list-item-subtitle>Work</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item @click="">
                            <v-list-item-icon>
                                <v-icon color="indigo">mdi-map-marker</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>1400 Main Street</v-list-item-title>
                                <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
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
                            <v-subheader>Today</v-subheader>


                            <v-expansion-panels popout>
                                <v-expansion-panel
                                        v-for="(message, i) in messages"
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
                                                <v-avatar
                                                        size="36px"
                                                >
                                                    <img
                                                            v-if="message.avatar"
                                                            alt="Avatar"
                                                            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                    >
                                                    <v-icon
                                                            v-else
                                                            :color="message.color"
                                                            v-text="message.icon"
                                                    ></v-icon>
                                                </v-avatar>
                                            </v-col>

                                            <v-col
                                                    class="hidden-xs-only"
                                                    sm="5"
                                                    md="3"
                                            >
                                                <strong>Order {{i+1}}</strong>
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
                                                {{ message.excerpt }}
                                            </v-col>
                                        </v-row>
                                    </v-expansion-panel-header>

                                    <v-expansion-panel-content>
                                        <v-divider></v-divider>
                                        <v-card-text v-text="lorem"></v-card-text>
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
    export default {
        name: "UserCabinetComponent",
        data: () => ({
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