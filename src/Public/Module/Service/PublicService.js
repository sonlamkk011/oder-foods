import axios from 'axios';

import { BASE_URL_SERVER} from "../Configs/Server";

const API_ENDPOINT ={
    LIST_FOODS : '/api/v1/foods/list',
}

class PublicService {

    getListFoods = async () => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_FOODS);
    }

}

const publicService = new PublicService();
export default publicService;