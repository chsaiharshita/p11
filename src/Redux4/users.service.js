import apiClient from "../../src/source/helpers/apiClient.js";
import  url from "../sitedata.json";

class UsersService {
	getAllUsers = () => apiClient().post(url,{pname:"p1c6"});
}

export default new UsersService();
