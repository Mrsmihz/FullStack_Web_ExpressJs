<template>
    <div>
        <h1>{{username}}</h1>
        <h1>{{password}}</h1>
        <h1>{{first_name}}</h1>
        <h1>{{last_name}}</h1>
        <h1>{{email}}</h1>
        <b-form method="get" @submit="logout">
            <b-button type="submit" class="mt-3">Logout</b-button>
        </b-form>
    </div>
</template>

<script>
import AccountService from '../services/AccountService';

export default {
    name:'Index',
    data(){
        return {
            username:'',
            password:'',
            first_name:'',
            last_name:'',
            email:''
        }
    },
    methods:{
        setUser:function(data){
            this.username = data.username;
            this.password = data.password;
            this.first_name = data.first_name;
            this.last_name = data.last_name;
            this.email = data.email;
        },
        logout:async function(){
            await AccountService.logout();
        }
    }

}
</script>
