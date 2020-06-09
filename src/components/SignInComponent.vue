<template>
  <v-container fluid>

    <v-flex  md4 offset-md4>
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
                <span class="headline " style="float: right">SignIn</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-text>
          <v-card>
              {{errorText}}
          </v-card>
          <v-text-field
            v-model="login"
            label="E-mail"
            data-vv-name="email"
            required
          ></v-text-field>


          <v-text-field
            type="password"
            v-model="password"
            label="Password"
            data-vv-name="password"
            required
          ></v-text-field>
          <div align="right">
<!--            <v-btn small text to="/resetpassword">-->
<!--              Forgot password-->
<!--            </v-btn>-->
            <v-btn small text  to="/register">
              Register
            </v-btn>
          </div>
          <v-btn :disabled="!disableButton" @click="submit" large text class="my-2" color="primary">submit</v-btn>

        </v-card-text>

      </v-card>


    </v-flex>
    <div align="right">
<!--      <vue-recaptcha-->

<!--              :sitekey="sitekey"-->
<!--      />-->
    </div>

  </v-container>


</template>

<script>
  import VueRecaptcha from 'vue-recaptcha'
  import {requests} from "../api";
  export default {
    name: "SignInComponent",
    data(){
      return{
        login:"",
        password:"",
        flag: false,
        loginSuccessfull: false,
        errorText: '',
        sitekey: '6Lego-gUAAAAAICYKh-H0IHFvbGG1f94Bh4klZRG'
      }
    },
    components:{
      VueRecaptcha
    },
    computed: {
      disableButton () {
          return this.login.length > 0 && this.password.length > 0
      }
    },
    methods:{
      validate () {
        this.$refs.recaptcha.execute()
      },
      register (recaptchaToken) {
        /*axios.post('https://yourserverurl.com/register', {
          email: this.email,
          password: this.password,
          recaptchaToken: recaptchaToken
        })*/
      },
      onCaptchaExpired () {
        this.$refs.recaptcha.reset()
      },
      submit(){
        let vm = this
        requests.signin(this.login, this.password).then(res => {
            if (res.success) {
                localStorage.setItem("username", res.username)
                localStorage.setItem("enable","true")
                localStorage.setItem("token", res.token)
            } else {
                this.errorText = res.message
            }

        })
      }

    }
  }
</script>

<style scoped>

</style>
