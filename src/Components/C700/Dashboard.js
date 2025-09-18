// src/Components/Dashboard.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDashboard,
  addDashboardItem,
  deleteDashboardItem,
} from "../../source/redux/reducers/dashbordSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { events, news, rewards, loading, error } = useSelector(
    (state) => state.dashboard
  );

  // Local states for inputs
  const [newEvent, setNewEvent] = useState("");
  const [newReward, setNewReward] = useState("");
  const [newNews, setNewNews] = useState("");

  useEffect(() => {
    if (token && user?.pname) {
      dispatch(fetchDashboard({ token, pname: user.pname }));
    }
  }, [token, user, dispatch]);

  const handleAdd = (type, text) => {
    if (!text.trim()) return;
    dispatch(
      addDashboardItem({
        token,
        pname: user.pname,
        type,
        item: { a: [{ aname: text, avalue: "" }] }, // send a field array
      })
    );

    if (type === "events") setNewEvent("");
    if (type === "rewards") setNewReward("");
    if (type === "news") setNewNews("");
  };

  const handleDelete = (type, id) => {
    dispatch(deleteDashboardItem({ token, pname: user.pname, type, id }));
  };

  const renderSection = (label, type, data, input, setInput) => (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h4 className="mb-0">{label}</h4>
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder={`Add ${label}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn-success"
            onClick={() => handleAdd(type, input)}
          >
            Add
          </button>
        </div>
      </div>

      <ul className="list-group list-group-flush">
        {(Array.isArray(data) ? data : []).map((item) => (
          <li
            key={item._id}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div>
              {Array.isArray(item.a) && item.a.length > 0 ? (
                item.a.map((attr, idx) => (
                  <div key={idx}>
                    <strong>{attr.aname}:</strong> {attr.avalue}
                  </div>
                ))
              ) : (
                <span>No attributes</span>
              )}
            </div>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(type, item._id)}
            >
              Delete
            </button>
          </li>
        ))}
        {(!Array.isArray(data) || data.length === 0) && (
          <li className="list-group-item text-muted">
            No {label.toLowerCase()} added yet.
          </li>
        )}
      </ul>
    </div>
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {renderSection("Events", "events", events, newEvent, setNewEvent)}
      {renderSection("Rewards", "rewards", rewards, newReward, setNewReward)}
      {renderSection("News", "news", news, newNews, setNewNews)}
    </div>
  );
}

export default Dashboard;