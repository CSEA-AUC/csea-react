import Axios from 'axios'

const API_ROOT = 'http://localhost:8000/';

export function fetchResource(endpoint, params={}) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    params = {params};
    return Axios.get(fullUrl, params)
}