import axios from 'axios';

const create = 'http://localhost:3333/api/task/create'
const getAll = 'http://localhost:3333/api/task/getalltask/'
const deleteTask = 'http://localhost:3333/api/task/delete/'
const editTask = 'http://localhost:3333/api/task/edit/'
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
    static deleteTask(id){
        var url = deleteTask + `${id}`;
        return axios.delete(url, {id:id}).then(response => {
            return response;
        }).catch(error => {
            return error.response;
        })
    }
    static editTask(id, form){
        var url = editTask + `${id}`;
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        console.log(url);
        console.log(json);
        return axios.put(url, {
            json
        }).then(response => {
            return response;
        }).catch(error => {
            return error.response;
        })
    }
}

export default TaskService