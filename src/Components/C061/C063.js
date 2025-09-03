import UsersService from "./C062.js";
import actions from "../../source/redux/reducers/users/C052.js";

export const loadUsersAsync = () => (dispatch) => {
	dispatch(actions.usersLoadStart());

	UsersService.getAllUsers({pname:"p1c151"})
		.then((response) => dispatch(actions.usersLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.usersLoadError(error.message)));
};
