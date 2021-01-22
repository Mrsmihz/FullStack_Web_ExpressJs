<template>
    <div>
        <Register v-show="register"/>
        <Login v-show="login"/>
        <div class="mt-5">
            <b-button class="mr-3" v-on:click="showLogin">Login</b-button>
            <b-button v-on:click="showRegister">Register</b-button>
        </div>
    </div>
</template>
<script>
import Register from './Register'
import Login from './Login'
export default {
    name:'LoginAndRegister',
    data(){
        return {
            login:false,
            register:false,
        }
    },
    components:{
        Register,
        Login,
    },
    methods:{
        showLogin:function(){
            this.login = true;
            this.register = false;
        },
        showRegister:function(){
            this.login = false;
            this.register = true;
        },
    }
}
</script>
