import axios from 'axios';

const create = 'http://localhost:3333/api/task/create'
const getAll = 'http://localhost:3333/api/task/getalltask/'
class TaskService {
    static createTask(form){
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        return axios.post(create, {
            json
        }).then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error.response);
            return error.response;
        })
    }
    static getAllTask(id){
        var url = getAll+`${id}`;
        console.log(url);
        return axios.get(url).then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error.response);
            return error.reponse;
        })
    }
}

export default TaskService