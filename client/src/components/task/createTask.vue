<template>
    <div style="width:30%;" class="mt-3 box">
        <b-form method="post" @submit="createTask">
            <b-form-input v-model="title" placeholder="Title" type="text"></b-form-input>
            <b-form-input v-model="desc" placeholder="Description" type="text"></b-form-input>
            <b-button type="submit">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
    import TaskService from '../../services/TaskService'
    export default {
        name:'createTask',
        data(){
            return{
                desc:'',
                title:'',
                owner:''
            }
        },
        methods:{
            createForm:function(){
                let form = new FormData();
                this.owner = this.$root.$refs.App.$refs.index.id;
                form.append('title', this.title);
                form.append('desc', this.desc);
                form.append('owner', this.owner);
                return form
            },
            createTask:async function(e){
                e.preventDefault();
                var result = await TaskService.createTask(this.createForm());
                if (result.status == 201){
                    console.log('ok');
                    this.clearForm();
                    console.log(this.$root.$refs.App.$refs.index.showCreateTask());
                }
                else if (result.status == 404){
                    console.log('created failed')
                }
            },
            clearForm:function(){
                this.desc = '';
                this.title = '';
                this.owner = '';
            }
        }
    }
</script>

<style scoped>
    .box{
        
    }
</style>