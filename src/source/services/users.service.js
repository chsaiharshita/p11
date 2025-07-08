import apiClient from "../helpers/apiClient";
import  {url} from "../../sitedata.json";

class UsersService {
	getAllUsers = () => apiClient().post(url,{pname:""});
}

export default new UsersService();
