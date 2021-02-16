<template>
  <div id="app">
    <b-container fluid="md">
      <b-row>
        <b-col>
          <LoginAndRegister v-show="login_register" ref="login_register"/>
          <Index v-show="index" ref="index"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LoginAndRegister from './components/LoginAndRegiser'
import Index from './components/Index'
import AccountService from './services/AccountService'

export default {
  async beforeCreate(){
    await AccountService.getSession().then(response => {
      if (response.status == 200){
        console.log(response.data);
        this.$nextTick(function(){
          this.showIndex(response.data);
        })
      }
      else if (response.status == 404) {
        this.$refs.login_register.showLogin();
        this.$nextTick(function(){
          this.login_register = true;
        })
      }
    }).catch(error => {
      if (error.response.status == 404) {
        this.$refs.login_register.showLogin();
        this.$nextTick(function(){
          this.login_register = true;
        })
      }
    })
  },
  name: 'App',
  data(){
    return{
      login_register:false,
      index:false,
    }
  },
  components: {
    LoginAndRegister,
    Index,
  },
  created(){
      this.$root.$refs.App = this;
  },
  methods:{
    showIndex:function(user){
      this.$refs.index.setUser(user);
      this.$nextTick(function(){
        this.login_register = false;
        this.index = true;
      })
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
