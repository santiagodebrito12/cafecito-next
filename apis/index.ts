import axios from 'axios';

const UsersApi = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export default UsersApi;