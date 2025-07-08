import { useState } from "react";
import "./login.css";
import data from "../../Pitisitedata.json";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${username} logged in`);
  };

  return (
  <>
     <h1>Login</h1>
    <div className="login-container" style={{ marginTop: "100px", textAlign: "center" }}>
      <div className="login-box" style={{ display: "inline-block", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
       
        <form onSubmit={handleSubmit}>
          <div>
            <label>{data.menu7.userlabel}</label>
            <input
              type="text"
              value={username}
             
              onChange={(e) => setUsername(e.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </div>
          <br />
          <div>
            <label>{data.menu7.plabel}</label>
            <input
              type="password"
              value={password}
            
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </div>
          <br />
          <button type="submit">{data.menu7.button}</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;