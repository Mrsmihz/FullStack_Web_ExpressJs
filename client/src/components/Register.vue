<template>
  <div>
    <h1>{{ msg }}</h1>
    <b-form @submit="createAccount" method="POST" class="mt-3">
      <b-form-group>
        <b-form-input
        type="text"
        placeholder="Username"
        v-model="username">

        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
        type="password"
        placeholder="Password"
        v-model="password">

        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
        type="text"
        placeholder="First Name"
        v-model="first_name">

        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
        type="text"
        placeholder="Last Name"
        v-model="last_name">

        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
        type="email"
        placeholder="Email"
        v-model="email">

        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import AccountService from '../services/AccountService';

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
  props:['msg'],
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
      var result = await AccountService.createAccount(this.createForm());
      if (result.status == 201){
        console.log('success by vuejs');
        this.clearForm();
        this.$root.$refs.App.$refs.login_register.showLogin();
      }
      else if (result.status == 409){
        console.log('duplicate');
      }
      else if (result.status == 404){
        console.log('error');
      }
    },
    clearForm:function(){
      this.username = '',
      this.password = '',
      this.first_name = '',
      this.last_name = '',
      this.email = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
