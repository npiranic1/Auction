import axios from 'axios';
import BASE_URL from './config';

// getting all bids
export async function getBids(id){
    return axios.get(BASE_URL + "/bids/" + id);
};

export async function placeBid(userId, productId, bid){
    axios.post(("" + BASE_URL + "/bid/user/" + userId + "/product/" + productId), {
        price: bid
    }).then(function (response) {
        console.log("odgovor funkcije");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      });
      // handle error
};