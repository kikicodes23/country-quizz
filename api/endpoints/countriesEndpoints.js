import axios from "axios";
import { API_URL, headers } from "@/api/config";

export const getAllCountries = () => {
    return axios.get(`${API_URL}/all?fields=name,capital,flags`, {
        headers: headers,
    });
};
