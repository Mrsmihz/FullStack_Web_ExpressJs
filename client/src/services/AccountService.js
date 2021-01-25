import axios from 'axios';

const register = 'http://localhost:3333/api/register';
const login = 'http://localhost:3333/api/login';
const logout = 'http://localhost:3333/api/login/logout';
class AccountService{
    static createAccount(form){
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        console.log(json);
        return axios.post(register, {
            json
        }).then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error.response);
            return error.response;
        })
    }
    static Login(form){
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        return axios.post(login, {
            json
        }).then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error.response);
            return error.response;
        })
    }

    static getSession(){
        return axios.get(login).then(response => {
            return response;
        })
    }
    static logout(){
        return axios.get(logout).then(() => {
            console.log("logged out");
        })
    }
}
export default AccountService
