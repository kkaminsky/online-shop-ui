<template>
    <v-container>
        <v-row>
            <v-col cols="2"></v-col>
            <v-col >
                <v-breadcrumbs>
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
                    {{resultText}}
                </h1>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: "ConfirmComponent",
        created() {
            this.$store.dispatch('createOrder')
        },
        computed: {
            resultCreate () {
                return this.$store.state.orderSuccesfulCreated
            },
            resultText () {
                if (this.resultCreate === null) {
                    return 'Подождите...'
                }
                if (this.resultCreate === false) {
                    return 'Произошла ошибка, попробуйте позже'
                }
                if (this.resultCreate === true) {
                    return 'Ваш заказ успешно создан'
                }
            }
        }
    }
</script>

<style scoped>

</style>