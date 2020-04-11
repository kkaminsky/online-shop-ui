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
                  <span class="headline">SignUp</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-text>


            <v-combobox
              v-model="select"
              :items="items"
              chips
              label="Registration method"
            >
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                  :input-value="data.selected"
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




            <v-flex  v-if="select==='vk'" class="mt-5 mb-5 text-xs-center">
              <v-btn @click="oauth()">
                Регистрация с помощью Вконтакте
              </v-btn>
            </v-flex>

            <v-flex v-else>
              <v-text-field
                v-model="name"

                :counter="10"
                label="Name"
                data-vv-name="name"
                required
              ></v-text-field>

              <v-text-field
                            v-model="login"
                            :label="select"
                            required
              ></v-text-field>





              <v-text-field
                type="password"
                v-model="password"
                label="Password"
                data-vv-name="password"
                required
              ></v-text-field>

              <v-btn  @click="submit" color="primary" text>submit</v-btn>
            </v-flex>





          </v-card-text>

        </v-card>
      </v-flex>


  </v-container>


</template>

<script>
    export default {
      name: "RegisterComponent",
      data(){
        return{
          login:"",
          name:"",
          password:"",
          select: 'email',
          items: [
            'email',
            'phone',
            'vk'
          ]
        }
      },
      methods:{
        submit2(){
          let vm = this
        },
        submit(){
          let vm = this
          this.$http.post("/api/register",{
            "login":this.login,
            "password":this.password,
            "name":this.name,
            "method":this.select
          }).then(res=>{

            localStorage.setItem("username",this.name)
            //vm.flag = true
            vm.$router.push("/confirm")
          },e=>{
            console.log(Object.keys(e.response.data))
            alert("Ошибка!" + e.response.data.message)
          })
        },
        oauth(){
          let vm = this

          let redirWin = window.open("https://oauth.vk.com/authorize?client_id=7045685&display=page&redirect_uri=http://localhost:8081/redirect&scope=groups&response_type=code&v=5.95",'_blank', 'height=355,width=660,scrollbars=yes,status=1')

          var timer = setInterval(function() {
            console.log("timer work")
            if(redirWin.closed) {
              clearInterval(timer);
              console.log(localStorage.getItem("123"))
              vm.$http.post("/api/oauth",{
                "code": localStorage.getItem("code"),
                "str":"str"
              }).then(res=>{

                localStorage.setItem("username",res.data)
                localStorage.setItem("enable","true")

                vm.$router.push("/usercabinet")
              },err=>{
                alert(err.message)
              })
            }
          }, 500);
          /*this.$http.get("/login")
            .then(res=>{
              console.log(res)
          },
          err=>{
              console.log(err)
          })*/
        },

      }
    }
</script>

<style scoped>

</style>
