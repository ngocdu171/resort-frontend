import axios from 'axios';
import myURL from '../myURL';

let userInfo = {
    username: null,
    password: null
}

let myAuth = {
    authenticate: (username, password) => {
        return new Promise((resolve, reject) => {
            //axios.get('http://localhost:3000/user/' + username,
            axios.get(myURL+'user/' + username,
                {
                    auth: {
                        username: username,
                        password: password
                    }
                })
                .then(result => {
                    userInfo = {
                        username: username,
                        password: password
                    }
                    resolve(result);
                })
                .catch(error => {
                    console.log(error);
                    reject();
                }
                )
        });
    },
    getAxiosAuth: () => {
        return {
            auth: userInfo
        }
    }
}

export default myAuth;