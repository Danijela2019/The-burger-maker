import axios from 'axios';

 const instance = axios.create({
    baseURL: 'https://the-burger-maker.firebaseio.com/',
})

export default instance;