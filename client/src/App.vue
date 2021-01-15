<template>
  <div id="app">
    <b-container fluid="md">
      <b-row>
        <b-col>
          <Login v-if="login"/>
          <Register v-if="register"/>
          <div class="mt-5">
            <b-button class="mr-3" v-on:click="showLogin">Login</b-button>
            <b-button v-on:click="showRegister">Register</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Register from './components/Register'
import Login from './components/Login'

export default {
  name: 'App',
  data(){
    return{
      login:true,
      register:false,
    }
  },
  components: {
    Register,
    Login
  },
  methods:{
    showLogin:function(){
      this.login = true;
      this.register = false;
    },
    showRegister:function(){
      this.login = false;
      this.register = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
