import axios from 'axios'

export async function asyncGetProducts() {
    try {
        const responce = axios.get('http://localhost:3001/')
        return responce
    }
    catch(err){
        console.error(' Y O U  S K  2');
        return [];
    }
}