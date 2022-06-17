import axios from 'axios';
import {BASE_URL, getHeaders } from './config';

export async function registerUser(firstName, lastName, email, password){
    return (await axios.post(BASE_URL + "/user/register", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    }, getHeaders())).data;
}

export async function loginUser(email, password){
    return (await axios.post(BASE_URL + "/user/login", {
        email: email,
        password: password
    }, getHeaders())).data;
}