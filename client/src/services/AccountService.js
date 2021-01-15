import axios from 'axios';

const register = 'http://localhost:3333/api/register';
const login = 'http://localhost:3333/api/login';
class AccountService{
    static createAccount(form){
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
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
}
export default AccountService
