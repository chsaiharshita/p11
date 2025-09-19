import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDashboard,
  addDashboardItem,
  updateDashboardItem,
  deleteDashboardItem,
} from "../../source/redux/reducers/dashbordSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { events, news, rewards, loading, error } = useSelector(
    (state) => state.dashboard
  );

  const [newEvent, setNewEvent] = useState("");
  const [newReward, setNewReward] = useState("");
  const [newNews, setNewNews] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  useEffect(() => {
    if (token) dispatch(fetchDashboard({ token }));
  }, [token, dispatch]);

  const handleAdd = (type, text) => {
    if (!text.trim()) return;
    dispatch(addDashboardItem({ token, type, item: { aname: text, avalue: null } }));
    if (type === "events") setNewEvent("");
    if (type === "rewards") setNewReward("");
    if (type === "news") setNewNews("");
  };

  const handleDelete = (type, id) => {
    dispatch(deleteDashboardItem({ token, type, id }));
  };

  const handleEditStart = (id, currentValue) => {
    setEditingId(id);
    setEditingValue(currentValue);
  };

  const handleEditSave = (type, id, avalue) => {
    if (!editingValue.trim()) return;
    dispatch(
      updateDashboardItem({
        token,
        type,
        id,
        newValue: { aname: editingValue, avalue }, // keep avalue if it exists
      })
    );
    setEditingId(null);
    setEditingValue("");
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditingValue("");
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
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <li
              key={item._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                {editingId === item._id ? (
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    style={{ width: "300px", display: "inline-block" }}
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                  />
                ) : (
                  <>
                    <strong>{item.aname}</strong>
                    {item.avalue && (
                      <>
                        <br />
                        <a href={item.avalue} target="_blank" rel="noreferrer">
                          {item.avalue}
                        </a>
                      </>
                    )}
                  </>
                )}
              </div>
              <div>
                {editingId === item._id ? (
                  <>
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => handleEditSave(type, item._id, item.avalue)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={handleEditCancel}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEditStart(item._id, item.aname)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(type, item._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))
        ) : (
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