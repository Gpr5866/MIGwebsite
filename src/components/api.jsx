import axios from 'axios'

const api = axios.create({
    // baseURL: `http://localhost:5000/userstes`
    baseURL: `https://migapi.herokuapp.com/userstes`
})

export default api