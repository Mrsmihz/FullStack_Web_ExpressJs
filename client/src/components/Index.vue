<template>
    <div>
        <Navbar ref="navbar"/>
        <createTask v-show="createTask" ref="createtask"/>
        <showTask v-if="showTask" ref="showTask" class="mt-3"/>
    </div>
</template>

<script>
import AccountService from '../services/AccountService';
import Navbar from './Navbar'
import createTask from '../components/task/createTask'
import showTask from '../components/task/showTask'

export default {
    name:'Index',
    data(){
        return {
            username:'',
            password:'',
            first_name:'',
            last_name:'',
            email:'',
            id:'',
            createTask:false,
            showTask:false,
        }
    },
    components:{
        Navbar,
        createTask,
        showTask
    },
    methods:{
        setUser:function(data){
            this.id = data.id;
            this.username = data.username;
            this.password = data.password;
            this.first_name = data.first_name;
            this.last_name = data.last_name;
            this.email = data.email;
            this.$refs.navbar.setUser(data);
            this.$nextTick(function(){
                this.showTask = true;
            })
        },
        logout:async function(){
            await AccountService.logout();
        },
        showCreateTask:function(){
            if (this.createTask){
                this.createTask = false;
                this.showTask = true;
            }
            else{
                this.showTask = false;
                this.createTask = true;
            }
        }
    }

}
</script>
