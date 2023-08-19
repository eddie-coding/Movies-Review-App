import axios from 'axios';

export default axios.create({
    baseURL:'hhttp://localhost:8080/api/',
    headers: {"ngrok-skip-browser-warning": "true"}
});