import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersAsync } from "../../src/Redux3/users.thunks.js";
import "./Users.css";

const UserListing = () => {
	const dispatch = useDispatch();
	const { isLoading, users, errorMessage } = useSelector((state) => state.users);

	useEffect(() => {
    dispatch(loadUsersAsync());
    localStorage.setItem('users', JSON.stringify(users));
	}, []);

	return (
		<div>
			{isLoading &&    <div className="gif container" >
            <img 
            src="./images/please-wait.gif" 
            alt="Loading"
            style={{height:"350px", width:"350px"}}
       />
            
        </div>}
			{errorMessage && <h3>{errorMessage}</h3>}
			  {users&&users.map((information) => {
            return (
              <section className="container">
                <div className="content" >
                 <h3 className="" id="header_1">{information.ptitle}</h3>
                 <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                  <thread   > 
                  <tr  >
                  <th style={{width:"35%"}} >Title</th>
                 <th style={{width:"45%" }} >Description</th>
                  <th  style={{width:"20%"}}>File</th>
                  </tr>
                  <tbody id="">
                  {information.a.map((details) => {
                    return (
                      <tr >
                      <td id ="tab"> {details.aname}</td>
                      <td id ="tab1">{details.aname}</td>
                      <td > 
                       <a  href={details.avalue} target="_blank">
                       View
                       <i className="fa fa-download pdf-download" aria-hidden="true"></i>
                         </a> </td>
                        </tr>
                     );
                     })}
                    </tbody>
                  </thread>
                   </table> 
                </div>
              </section>
            );
          })}
		   </div>
   	  );
   };

export default UserListing;
