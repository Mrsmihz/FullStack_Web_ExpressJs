<template>
    <div>
        <template v-for="task in this.test">
            <div :key="task.id + task.id" class="card-box" v-show="!task.visible">
                <b-form @submit="editTask" method="POST">
                    <b-form-group>
                        <b-form-input
                            type="text"
                            placeholder="Title"
                            :value="task.title"
                            v-model="new_title">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input
                            type="text"
                            placeholder="Description"
                            :value="task.desc"
                            v-model="new_desc">
                        </b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
                <b-button v-on:click="task.visible = !task.visible" class="mt-3">Back</b-button>
            </div>
            <div :key="task.id" class="card-box" v-show="task.visible">
                <b-card
                :title="task.title"
                img-src="https://stickershop.line-scdn.net/stickershop/v1/product/1008584/LINEStorePC/main.png">
                    <b-card-text>
                        {{ task.desc }}
                        <br/>
                        {{ task.owner }}
                    </b-card-text>
                    <b-button v-on:click="deleteTask(task.id)">DELETE</b-button>
                    <b-button v-on:click="showForm(task)">EDIT</b-button>
                </b-card>
            </div>
        </template>
    </div>
</template>

<script>
//import Task from './Task'
import TaskService from '../../services/TaskService'
export default {
    data(){
        return {
            tasks:{},
            test:[],
            new_title:'',
            new_desc:'',
            edited_id:''
        }
    },
    components:{
        //Task
    },
    methods:{
        createForm:function(){
            let form = new FormData();
            form.append('title', this.new_title);
            form.append('desc', this.new_desc);
            return form
        },
        deleteTask:async function(key){
            var result = await TaskService.deleteTask(key);
            if (result.status == 200){
                this.$root.$refs.Index.showTask = false;
                this.$nextTick(function(){
                    this.$root.$refs.Index.showTask = true;
                })
            }
        },
        editTask:async function(e){
            e.preventDefault();
            var result = await TaskService.editTask(this.edited_id, this.createForm());
            console.log(result);
            this.updateView();
        },
        showForm:function(task){
            this.edited_id = task.id;
            this.new_title = task.title;
            this.new_desc = task.desc;
            task.visible = !task.visible;
        },
        updateView:async function(){
            var id = this.$root.$refs.Index.id;
            var response = await TaskService.getAllTask(id);
            this.tasks = response.data;
            this.test = this.tasks.map(i => ({...i, visible:true}));
            this.$nextTick(() => {
                for (var task of this.test){
                    task.visible = true;
                }
            })
        }
    },
    async beforeCreate(){
        var id = this.$root.$refs.Index.id;
        var response = await TaskService.getAllTask(id);
        this.tasks = response.data;
        this.test = this.tasks.map(i => ({...i, visible:true}));
        console.log(this.test);
    }
}
</script>

<style scoped>
    .card-box{
        width:33.33%;
        float:left;
        padding:0.5em;
    }
</style>