<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
            <b-navbar-brand>
                Welcome, {{ username }}
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse">

            </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>

            </b-collapse>
            <b-navbar-nav>
                <b-nav-item v-on:click="showCreateTask()">Tasks</b-nav-item>
                <b-nav-item href="#">About</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown :text="username" right>
                    <b-dropdown-item>{{ first_name }}</b-dropdown-item>
                    <b-dropdown-item>{{ last_name }}</b-dropdown-item>
                    <b-dropdown-item>{{ email }}</b-dropdown-item>
                    <b-dropdown-item v-on:click="logout()">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name:'Navbar',
    data(){
        return {
            username:'',
            first_name:'',
            last_name:'',
            email:''
        }
    },
    methods:{
        logout:function(){
            console.log('logged out by navbar')
            this.$root.$refs.App.$refs.index.logout();
            this.$nextTick(function(){
                location.reload();
            })
        },
        setUser:function(data){
            this.username = data.username;
            this.first_name = data.first_name;
            this.last_name = data.last_name;
            this.email = data.email;
        },
        showCreateTask:function(){
            if (this.$root.$refs.App.$refs.index.createTask){
                this.$root.$refs.App.$refs.index.createTask = false;
                this.$root.$refs.App.$refs.index.showTask = true;
            }
            else{
                this.$root.$refs.App.$refs.index.createTask = true;
                this.$root.$refs.App.$refs.index.showTask = false;
            }
        }
    }
}
</script>