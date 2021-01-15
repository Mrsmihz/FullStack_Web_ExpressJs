<template>
    <div>
        <b-form @submit="Login" method="POST">
            <b-form-group>
                <b-form-input
                type="text"
                placeholder="Username"
                v-model="username"
                required>

                </b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                type="password"
                placeholder="Password"
                v-model="password"
                required>

                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>
<script>
import AccountService from '../services/AccountService'

export default {
    name:'Login',
    data() {
        return {
            username:'',
            password:''
        }
    },
    methods:{
        createForm: function(){
            let form = new FormData();
            form.append('username', this.username);
            form.append('password', this.password);
            return form;
        },
        async Login(e){
            e.preventDefault();
            if (await AccountService.Login(this.createForm()) === "OK"){
                console.log('logged in');
            }
        }
    }
}
</script>
