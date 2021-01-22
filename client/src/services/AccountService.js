import axios from 'axios';

const register = 'http://localhost:3333/api/register';
const login = 'http://localhost:3333/api/login';
const logout = 'http://localhost:3333/api/login/logout';
class AccountService{
    static createAccount(form){
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
        console.log(json);
        return axios.post(register, {
            json
        }).then(response => {
            return response.data;
        })
    }
    static Login(form){
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
        return axios.post(login, {
            json
        }).then(response => {
            return response.data;
        })
    }

    static getSession(){
        return axios.get(login).then(response => {
            return response.data;
        })
    }
    static logout(){
        return axios.get(logout).then(() => {
            console.log("logged out");
        })
    }
}
export default AccountService
