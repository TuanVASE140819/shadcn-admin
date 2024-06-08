import axios from 'axios'

const api = axios.create({
  baseURL: 'https://report-work.onrender.com/',

  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Credentials': 'true',
  },
})

export default api
