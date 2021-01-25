<template>
    <div>
        <template v-for="task in this.tasks">
            <div :key="task.id" class="card-box">
                <b-card
                :title="task.title"
                img-src="https://stickershop.line-scdn.net/stickershop/v1/product/1008584/LINEStorePC/main.png">
                    <b-card-text>
                        {{ task.desc }}
                        <br/>
                        {{ task.owner }}
                    </b-card-text>
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
        }
    },
    components:{
        //Task
    },
    methods:{

    },
    async beforeCreate(){
        var id = this.$root.$refs.App.$refs.index.id;
        var response = await TaskService.getAllTask(id);
        console.log(response.data);
        this.tasks = response.data;
        console.log(this.tasks);
    },
}
</script>

<style scoped>
    .card-box{
        width:33.33%;
        float:left;
        padding:0.5em;
    }
</style>