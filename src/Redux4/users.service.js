import apiClient from "../../src/source/helpers/apiClient.js";
import url from "../sitedata.json";

// Functional version of getAllUsers
const getAllUsers = () => {
  return apiClient().post(url, { pname: "p1c6" });
};

// Exporting the service as an object
const UsersService = {
  getAllUsers,
};

export default UsersService;
