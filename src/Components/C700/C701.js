import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../C1001/C1001";
import data from "../../sitedata.json";
import "bootstrap/dist/css/bootstrap.min.css";

function C701() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error, isAuthenticated, user } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser || isAuthenticated) {
      history.push("/welcome");
    }
  }, [isAuthenticated,history]);

  return (
    <>
      <h1 className="text-center text-danger my-4">Login</h1>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "40vh" }}>
        <div className="card shadow" style={{ width: "100%", maxWidth: "340px" }}>
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-start">
                <label className="form-label">{data.menu7.userlabel}</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <label className="form-label">{data.menu7.plabel}</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Logging in..." : data.menu7.button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default C701;