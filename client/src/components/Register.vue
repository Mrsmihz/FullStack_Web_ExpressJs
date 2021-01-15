<template>
  <div class="container">
    <h1>AccountService Test</h1>
    <div class="register-container">
      <form method="POST">
        <input v-model="username" placeholder="username">
        <input v-model="password" placeholder="password">
        <input v-model="first_name" placeholder="Firstname">
        <input v-model="last_name" placeholder="Lastname">
        <input v-model="email" placeholder="Email">
        <button v-on:click="createAccount">submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import AccountService from '../AccountService';

export default {
  name: 'Register',
  data() {
    return {
      username:'',
      password:'',
      first_name:'',
      last_name:'',
      email:'',
    }
  },
  methods:{
    createForm:function(){
      let form = new FormData();
      form.append('username', this.username);
      form.append('password', this.password);
      form.append('first_name', this.first_name);
      form.append('last_name', this.last_name);
      form.append('email', this.email);
      return form
    },
    async createAccount(e){
      e.preventDefault();
      if (await AccountService.createAccount(this.createForm()) == 'success'){
        console.log('success by vuejs');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register-container{
  background-color:azure;

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
