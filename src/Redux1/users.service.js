import apiClient from "../../src/source/helpers/apiClient.js";
import  url from "../sitedata.json";

class UsersService {
	getAllUsers = () => apiClient().post(url,{pname:"p1c151"});
	 //change the project names here... p2-for project 2 ; p3- for Project3 //
}

export default new UsersService();
