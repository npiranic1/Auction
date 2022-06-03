import axios from 'axios';
import BASE_URL from './config';

// getting all bids
export async function getBids(id){
    return await axios.get(BASE_URL + "/bids/" + id);
};

export async function placeBid(userId, productId, bid){
    return (await axios.post(("" + BASE_URL + "/bid/user/" + userId + "/product/" + productId), {
        price: bid
    })).data;/* .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        return error;
      }); */
      // handle error
};