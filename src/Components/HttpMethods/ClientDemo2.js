import axios from "axios";

const client = axios.create({
    baseURL :'https://jsonplaceholder.typicode.com'
})
client.interceptors.request.use((req)=>{
    req.headers.authorization = 'some value'
    return req;
})
export default client