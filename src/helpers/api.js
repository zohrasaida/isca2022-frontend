import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:5000'
});


//instance.get('/test');

export default api;