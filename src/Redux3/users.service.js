import apiClient from "../../src/source/helpers/apiClient.js";
import url from "../sitedata.json";

// Functional version of getAllUsers
const getAllUsers = () => {
  return apiClient().post(url, { pname: "p1c153" });
};

// Exporting an object similar to a service
const UsersService = {
  getAllUsers,
};

export default UsersService;
