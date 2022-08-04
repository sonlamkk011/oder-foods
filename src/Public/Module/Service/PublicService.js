import axios from 'axios';
import { BASE_URL_SERVER } from "../Configs/Server";

export const currentUserId = localStorage.getItem("current_user_id");

const API_ENDPOINT = {
    ACCESS_AUTH_TOKEN: "/api/v1/token",
    LIST_FOODS: '/api/v1/foods/list',
    REGISTER_ACCOUNT: '/api/v1/accounts/register',
    GET_AUTH_USER: '/api/v1/accounts/login',
}

class PublicService {
    accessAuthToken = async (data) => {
        return await axios.post(
            BASE_URL_SERVER + API_ENDPOINT.ACCESS_AUTH_TOKEN,
            data,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
    };

    getListFoods = async () => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_FOODS);
    }


    registerAccount = async (data) => {
        return await axios.post(BASE_URL_SERVER + API_ENDPOINT.REGISTER_ACCOUNT, data);
    }

    getAuthUser = async (accessToken) => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_AUTH_USER, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
    };

}

const publicService = new PublicService();
export default publicService;