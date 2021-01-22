<template>
    <div>
        <b-form @submit="Login" method="POST" class="mt-3">
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
            <b-button type="submit" variant="primary">Login</b-button>
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
            password:'',
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
                await AccountService.getSession().then(response => {
                    this.$root.$refs.App.user = response;
                    this.$root.$refs.App.showIndex();
                })
            }
        }
    }
}
</script>
