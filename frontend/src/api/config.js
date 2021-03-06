import { getToken } from "utility/storageService";
export const BASE_URL = process.env.REACT_APP_URL

export function getHeaders(){
    const token = getToken();
    if (token) {
        return {
            headers: {
            'Authorization': 'Bearer ' + token
            }
        };
    } else {
        return {};
    } 
}




