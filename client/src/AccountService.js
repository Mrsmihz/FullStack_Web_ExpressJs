import axios from 'axios';

const url = 'http://localhost:3333/api/register';

class AccountService{
    static createAccount(form){
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
        console.log(json);
        return axios.post(url, {
            json
        }).then(response => {
            return response.data;
        })
    }
}
export default AccountService
