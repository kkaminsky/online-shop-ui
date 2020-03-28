<template>
    <v-app>
        <v-card class="overflow-hidden">
            <v-app-bar

                    color="#fcb69f"
                    dark
                    src="https://picsum.photos/1920/1080?random"
            >
                <template v-slot:img="{ props }">
                    <v-img
                            v-bind="props"
                            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                    ></v-img>
                </template>

                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

                <v-toolbar-title>Simple Online Shop</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-app-bar>

        </v-card>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
        >
            <v-list

                    nav
                    dense
            >
                <v-list-item-group
                        v-model="group"


                >
                    <v-list-item disabled>
                        <v-img
                                :src="require('./assets/logo.svg')"
                                class="my-3"
                                contain
                                height="100"
                        />
                    </v-list-item>


                    <v-list-item to="/">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content >Home</v-list-item-content>
                    </v-list-item>

                    <v-list-item to="/about">
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>

                      <v-list-item-content >About</v-list-item-content>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-content class="mt-10">
            <router-view/>
        </v-content>
    </v-app>
</template>
<script>
    import HelloWorld from './components/HelloWorld';

    export default {
        name: 'App',

        components: {
            HelloWorld,
        },

        data: () => ({
            drawer: false,
        }),
    };
</script>
<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
