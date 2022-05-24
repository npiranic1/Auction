import axios from 'axios';
import BASE_URL from './config';

export async function getRandomProduct(){
    return axios.get(BASE_URL + "/products/random");
};


