import axios from 'axios';
import BASE_URL from './config';

export async function getRandomProduct(){
    return axios.get(BASE_URL + "/products/random");
};

export async function getNewArrivals(){
    return axios.get(BASE_URL + "/products/new-arrivals");
}

export async function getLastChance(){
    return axios.get(BASE_URL + "/products/last-chance");
}

export async function getSingleProduct(id){
    return axios.get(BASE_URL + "/products/single-product/" + id);
}


