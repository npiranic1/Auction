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
    return axios.get(BASE_URL + "/products/single-product/" + id)
        .catch(function (error){
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data); // error message
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
        });
}


