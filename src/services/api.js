import Axios from 'axios'

let API_ROOT = 'http://localhost:8000/';

if (process.env.NODE_ENV === 'production') {
    API_ROOT = 'https://csea-backend.herokuapp.com/';
}
export function fetchResource(endpoint, params = {}) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    params = {params};
    return Axios.get(fullUrl, params)
}

export function postForm(endpoint, data) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    return Axios.post(fullUrl, data)
}