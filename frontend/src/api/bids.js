import axios from 'axios';
import BASE_URL from './config';

// getting all bids
export async function getBids(id){
    return await axios.get(BASE_URL + "/bids/" + id);
};

export async function placeBid(productId, bid){
    return (await axios.post(("" + BASE_URL + "/bid/product/" + productId), {
        price: bid
    }, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })).data;
};