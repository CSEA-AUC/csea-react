import Axios from 'axios'

const API_ROOT = 'http://localhost:8000/';

export function fetchResource(endpoint) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    return Axios.get(fullUrl)
}