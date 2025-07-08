import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersAsync } from "../../src/Redux4/users.thunks.js";
import data from "../sitedata.json"

const UserListing = () => {
	const dispatch = useDispatch();
	const { isLoading, users, errorMessage } = useSelector((state) => state.users);

	useEffect(() => {
    dispatch(loadUsersAsync());
    if (users && users.length > 0) {
      localStorage.setItem('users', JSON.stringify(users));
    }
	}, [dispatch]);

	return (
		<div>
			{isLoading && <div className="gif container" >
            <img 
            src="./images/please-wait.gif" 
            alt="Loading"
            style={{height:"350px", width:"350px"}}
       />
            
        </div>}
			{errorMessage && <h3>{errorMessage}</h3>}
			  {users&&users.map((information) => {
            return (
              <section className="container" >
                <div className="content" >
                  <div className="col-xs-4  col-lg-12 col-md-6 col-sm "style={{ marginBottom: '20px' }} >
                    <div>
                 <h3 className="m-3" style={{color:"#B92A06", fontWeight:"bold"}} >{information.ptitle}</h3>
                 </div>
                  <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10"id="customer" >
               <thread>
           {data.Redux4.map((i) => {
              return(
                <tr >
               <th style={{width:"5%"}}>S.No</th>
              <th style={{width:"45%"}}>{i.Trade_Name}</th>
             <th style={{width:"25%"}}>{i.Duration}</th>
             <th style={{width:"25%"}}>{i.Type}</th>
               </tr>
               )})}
               <tbody>
                  {information.trades.map((details,index) => {
                    return (
                          <tr key={index}>
                            <td>{index+1}</td>
                         <td style={{textAlign:"left", paddingLeft:"10px"}}> {details.TradeName}</td>
                        <td> {details.Duration} </td> 
                        <td> {details.Type} </td>  
                         </tr>
                    );
                  })}
                  </tbody>
                  </thread>
                  </table>
                </div>
                </div>
              </section>
            );
          })}
		   </div>
   	  );
   };

export default UserListing;
