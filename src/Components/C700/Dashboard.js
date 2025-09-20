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
  const { events, news, rewards, news1, news2, loading, error } = useSelector(
    (state) => state.dashboard
  );

  // Local states for new items
  const [newEvent, setNewEvent] = useState("");
  const [newReward, setNewReward] = useState("");
  const [newNews, setNewNews] = useState("");

  // Combined editing state: keeps both id and type
  const [editing, setEditing] = useState({
    id: null,
    type: null,
    value: "",
  });

  useEffect(() => {
    if (token) dispatch(fetchDashboard({ token }));
  }, [token, dispatch]);

  // Add new item
  const handleAdd = (type, text) => {
    if (!text.trim()) return;

    let newsEndpoint = "p0ac1411"; // default for news
    if (type === "news") {
      // You can add logic to decide which endpoint to add to
      newsEndpoint = "p0ac1412"; // example: always adding to p0ac1412
    }

    dispatch(addDashboardItem({ token, type, item: { aname: text, avalue: null }, newsEndpoint }));

    if (type === "events") setNewEvent("");
    if (type === "rewards") setNewReward("");
    if (type === "news") setNewNews("");
  };

  // Delete item
  const handleDelete = (type, id) => {
    let newsEndpoint = null;
    if (type === "news") {
      const found = news.find((n) => n._id === id);
      if (news1.some((n) => n._id === id)) newsEndpoint = "p0ac1411";
      else if (news2.some((n) => n._id === id)) newsEndpoint = "p0ac1412";
    }
    dispatch(deleteDashboardItem({ token, type, id, newsEndpoint }));
  };

  // Start editing
  const handleEditStart = (type, id, currentValue) => {
    setEditing({ id, type, value: currentValue });
  };

  // Save edit
  const handleEditSave = (type, id, avalue) => {
    if (!editing.value.trim()) return;

    let newsEndpoint = null;
    if (type === "news") {
      if (news1.some((n) => n._id === id)) newsEndpoint = "p0ac1411";
      else if (news2.some((n) => n._id === id)) newsEndpoint = "p0ac1412";
    }

    dispatch(
      updateDashboardItem({
        token,
        type,
        id,
        newValue: { aname: editing.value, avalue },
        newsEndpoint,
      })
    );
    setEditing({ id: null, type: null, value: "" });
  };

  const handleEditCancel = () => {
    setEditing({ id: null, type: null, value: "" });
  };

  // Render a section (events, rewards, news)
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
          data.map((item) => {
            const isEditing = editing.id === item._id && editing.type === type;
            return (
              <li
                key={item._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      style={{ width: "300px", display: "inline-block" }}
                      value={editing.value}
                      onChange={(e) =>
                        setEditing({ ...editing, value: e.target.value })
                      }
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
                  {isEditing ? (
                    <>
                      <button
                        className="btn btn-sm btn-success me-2"
                        onClick={() =>
                          handleEditSave(type, item._id, item.avalue)
                        }
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
                        onClick={() =>
                          handleEditStart(type, item._id, item.aname)
                        }
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
            );
          })
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
