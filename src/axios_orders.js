import axios from 'axios';

 const instance = axios.create({
    baseURL: 'https://the-burger-maker-1691c-default-rtdb.firebaseio.com/',
})

export default instance;