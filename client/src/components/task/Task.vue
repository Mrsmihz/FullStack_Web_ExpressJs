<template v-for="task in this.tasks">
    <div>
        <b-card
        :title="task.title">
        </b-card>
        <b-card-text>
            {{ task.desc }}
            <br/>
            {{ task.owner }}
        </b-card-text>
    </div>
</template>
<script>
export default {
    name:'Task',
    data(){
        return {
            tasks:{
                a:{
                    title:'tesdf',
                    desc:'askd',
                    owner:'1'
                }
            }
        }
    },
    components:{

    },
    methods:{

    }
}
</script>