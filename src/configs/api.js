import axios from "axios"

axios.interceptors.response.use(function (response) {
    if (response.status !== 200) {
        throw new Error();
    }
    let data = response.data
    if (response.data.code !== 200) {
        throw new Error(data.message)
    }
    return data.data;
}, function (error) {
    return Promise.reject(error);
})

export default axios