//import axios
import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://donasi.appdev.my.id/api'
})

export default Api