import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersAsync } from "../redux/reducers/users/users.thunks";

const UserListing = () => {
	const dispatch = useDispatch();
	const { isLoading, users, errorMessage } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(loadUsersAsync());
	}, []);

	return (
		<div>
			{isLoading && <h3>Loading...</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			  {users&&users.map((information) => {
            return (
              <section className="container" >
                <div className="content" >
                 <h3>{information.ptitle}</h3>
                  {information.a.map((details) => {
                    return (
                      <ul className="list ">
                         <i className=" fa fa-hand-o-right  px-2">
                          </i>
                          <a className="font-weight-normal p-1" href={details.avalue}>
                          {details.aname}
                        </a>
                      </ul>
                    );
                  })}
                </div>
              </section>
            );
          })}
		   </div>
   	  );
   };

export default UserListing;
