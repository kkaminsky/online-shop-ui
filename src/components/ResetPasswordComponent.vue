<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid>

    <v-flex xs12 sm8 md4 offset-md4>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://picsum.photos/1920/1080?random"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline " style="float: right">Reset password</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-text>

          <v-combobox
            v-model="select"
            :items="items"
            chips
            label="Reset method"
          >
            <template v-slot:selection="data">
              <v-chip
                :key="JSON.stringify(data.item)"
                :selected="data.selected"
                :disabled="data.disabled"
                class="v-chip--select-multi"
                @click.stop="data.parent.selectedIndex = data.index"
                @input="data.parent.selectItem(data.item)"
              >
                <v-avatar class="accent white--text">
                  {{ data.item.slice(0, 1).toUpperCase() }}
                </v-avatar>
                {{ data.item }}
              </v-chip>
            </template>
          </v-combobox>


          <v-text-field
            v-model="login"
            :label=select
            required
          ></v-text-field>

          <v-btn @click="submit" color="primary" text>submit</v-btn>

        </v-card-text>

      </v-card>
    </v-flex>


  </v-container>


</template>

<script>
  export default {
    name: "ResetPasswordComponent",
    data(){
      return{
        login:"",
        //flag: false,
        select: 'email',
        items: [
          'email',
          'phone'
        ]
      }
    },
    methods:{
      submit(){
        let vm = this
        this.$http.post("/api/reset",{
          "login":this.login,
          "method":this.select
        }).then(res=>{
          localStorage.setItem("username",res.data)
          vm.$router.push("/confirmreset")
        },e=>{
          alert("Ошибка!" + e.response.data.message)
        })
      }

    }
  }
</script>

<style scoped>

</style>
