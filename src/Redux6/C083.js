import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './C080/authActions';
import { useHistory } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
 
  const jwt = localStorage.getItem("jwt");
  if(jwt) {
     //alert("success page")
    history.push("./node220");

  }
  const handleSubmit = async (e) => {
    
    e.preventDefault();


    try {
      // Validation: Check if username and password are provided
      if (!username || !password) {
         // Set isAuthenticated to true
        setErrorMessage('Username and password are required.'); // Set error message
        return; // Exit early if validation fails
      } else {
        setErrorMessage(''); // Clear error message if validation passes
      }

      // Dispatch the login action and get the JWT token
      const token = await dispatch(login(username, password));
      if (token) {
        // Store the JWT token in local storage
        localStorage.setItem('jwt', token);
        localStorage.setItem('isAuthenticated',true)

        
    //    // history.push('/eshram-boc/original');
    //alert("original page");

       history.push("./node220"); // Redirect to the desired route
      } else {
        // Handle login error here, e.g., show an error message to the user
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error(error);
      // Handle login error here, e.g., show an error message to the user
      setErrorMessage('An error occurred while logging in.');
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '300px',
  };

  const inputContainerStyle = {
    margin: '10px',
  };

  const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
  };

  const centerStyle = {
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px', // Adjust this margin to your preference
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <h3 className="text-center">Login</h3>
          <form style={formStyle} onSubmit={handleSubmit}>
            <div style={inputContainerStyle}>
              <label style={labelStyle}>Username:</label>
              <input
                type="text"
                placeholder="Username"
                style={inputStyle}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div style={inputContainerStyle}>
              <label style={labelStyle}>Password:</label>
              <input
                type="password"
                placeholder="Password"
                style={inputStyle}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
              <div style={{ ...centerStyle, ...errorStyle }}>{errorMessage}</div>
            )} {/* Display error message */}
            <button
                style={buttonStyle}
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
            >
          {loading ? 'Logging in...' : 'Login'}
          </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
