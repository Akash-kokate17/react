import axios from "axios";

export function myInterceptor1() {
    axios.interceptors.request.use((req) => {
       if(req.url.includes('github')){
        req.headers.authorization = "my secret token";
       }
       return req;
    });
}


export function requestStartedInterceptor() {
    axios.interceptors.request.use(req => {
        console.log('requestStartedInterceptor')
        req.meta = req.meta || {}
        req.meta.requestStartedAt = new Date().getTime();
        return req;
    });
}
export function responseReceivedInterceptor() {
    axios.interceptors.response.use(res => {
        res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt
        return res;
    },
        err => {
            err.durationInMs = new Date().getTime() - err.config.meta.requestStartedAt
            throw err;
        });
}