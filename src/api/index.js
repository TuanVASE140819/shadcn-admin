import axios from 'axios'

const api = axios.create({
  baseURL: 'https://report-work.onrender.com',
})

export default api 
