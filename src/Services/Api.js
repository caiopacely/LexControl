import axios from 'axios'

const api = axios.create({
    baseURL: 'https://juridiccontrolback.onrender.com'
})

export default api