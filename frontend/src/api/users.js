import axios from 'axios';
import BASE_URL from './config';

export async function getRandomUser(){
    return axios.get(BASE_URL + "/user");
};