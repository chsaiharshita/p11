import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../C1001/C1001"; // your login action
import data from "../../sitedata.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard"; // 👈 import dashboard

function C701() {
  const dispatch = useDispatch();

  // ✅ auth reducer state
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth || {}
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  // ✅ If already logged in → show dashboard
  if (isAuthenticated) {
    return <Dashboard />;
  }

  // ✅ Else → show login form
  return (
    <>
      {/* 🔴 Login Heading */}
      <h1 className="text-center text-danger my-4 display-6 fw-bold">Login</h1>

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "40vh" }}
      >
        <div className="card shadow" style={{ width: "100%", maxWidth: "380px" }}>
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="mb-3 text-start">
                <label className="form-label">{data.menu7.userlabel}</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  style={{ fontSize: "18px", padding: "12px" }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3 text-start">
                <label className="form-label">{data.menu7.plabel}</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  style={{ fontSize: "18px", padding: "12px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-4"
                  disabled={loading}
                >
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
