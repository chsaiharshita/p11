import React from 'react';
import { useHistory } from 'react-router-dom';
import  { useState, useEffect } from 'react';

const Logout = ({ onLogout }) => {
  const history = useHistory();

  const handleLogout = () => {
    // Remove the JWT token from local storage
    localStorage.removeItem('jwt');
    localStorage.setItem('isAuthenticated',false);
    
    // Redirect to the login page or any other appropriate page
   // history.push("/eshram-boc/node801");
    
  };
useEffect(() => {
  localStorage.removeItem('jwt');
  localStorage.setItem('isAuthenticated',false);
   // alert(localStorage.getItem("isAuthenticated"));
  history.push("./node801");
}, [history])
  
return(
    <button onClick={onLogout}>

    </button>
)
 };

export default Logout;
