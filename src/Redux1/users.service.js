import apiClient from "../../src/source/helpers/apiClient.js";
import url from "../sitedata.json";

// Function to get all users
const getAllUsers = () => {
  return apiClient().post(url, { pname: "p1c151" });
};

// Export as an object (similar to a service)
const UsersService = {
  getAllUsers,
};

export default UsersService;
