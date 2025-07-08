import UsersService from "../../src/Redux2/users.service.js";
import actions from "../source/redux/reducers/users/users.actions.js";

export const loadUsersAsync = () => (dispatch) => {
	dispatch(actions.usersLoadStart());

	UsersService.getAllUsers({pname:"p1c152"})
		.then((response) => dispatch(actions.usersLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.usersLoadError(error.message)));
};
