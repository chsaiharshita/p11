import apiClient from "../helpers/apiClient";
import { url } from "../../sitedata.json";

// Functional version of getAllUsers
const getAllUsers = () => {
  return apiClient().post(url, { pname: "" });
};

// Export as a plain object, similar to service class instance
const UsersService = {
  getAllUsers,
};

export default UsersService;
