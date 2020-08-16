const API_URL = 'https://jsonplaceholder.typicode.com/todos/'

const request = (
    endpoint: string, 
    method?: string, 
    data?:any, 
    token?: string
) => {
    const url = `${API_URL}${endpoint}`
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }

    // if(method === 'POST') {
    //     config.body = JSON.stringify(data)
    // }

    return fetch(url, config)
        .then(response => response.json())
}

const get = async (endpoint:string) => await request(endpoint);
const post = (endpoint:string, data: any, token: string) : object => request(endpoint, 'POST', data, token);
const put = (endpoint:string, data: any): object => request(endpoint, 'PUT', data);
const _delete = (endpoint:string): object => request(endpoint);

export default {
    get,
    post,
    put,
    delete: _delete
};