import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import siteData from "../../sitedata.json";
import "./C155.css";

function C169() {
  const { id } = useParams(); // may be undefined
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = siteData.C144?.columns || [];

  useEffect(() => {
    const url = siteData.P11url9; // events
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => {
        const data = Array.isArray(json.a) ? json.a : [];
        setItems(data);

        if (id !== undefined) {
          // single record mode
          const index = parseInt(id, 10);
          if (!isNaN(index)) {
            setItem(data[index] || null);
          }
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h4 className="text-center mt-4">Loading...</h4>;
  if (error) return <h4 className="text-danger mt-4">Error: {error}</h4>;

  // ✅ If /node144 → show full table
  if (id === undefined) {
    return (
      <div className="container mt-4" style={{ maxWidth: "1000px" }}>
        <h2 className="mb-3 text-left" style={{ color: "red" }}>
          NoticeBoard
        </h2>

        <table className="table table-bordered table-striped table-sm event-table">
          <thead className="table-dark text-center">
            <tr>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", verticalAlign: "middle" }}>
            {items.map((e, i) => (
              <tr key={i} className="table-row-hover" style={{ height: "100px" }}>
                <td>{e.aname}</td>
                <td>{e.aname}</td>
                <td>
                  {e.avalue ? (
                    <a
                      href={e.avalue}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm"
                      style={{ backgroundColor: "brown", color: "white" }}
                    >
                      View <i className="fa fa-download"></i>
                    </a>
                  ) : (
                    "No file"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // ✅ If /node144/:id → show single record
  if (!item) return <h4 className="text-warning mt-4">Not found</h4>;

  return (
    <div className="container mt-4" style={{ maxWidth: "1000px" }}>
      <h2 className="mb-3 text-left" style={{ color: "red" }}>
        NoticeBoard
      </h2>

      <table className="table table-bordered table-striped table-sm event-table">
        <thead className="table-dark text-center">
          <tr>
            {columns.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ textAlign: "center", verticalAlign: "middle" }}>
          <tr className="table-row-hover" style={{ height: "100px" }}>
            <td>{item.aname}</td>
            <td>{item.aname}</td>
            <td>
              {item.avalue ? (
                <a
                  href={item.avalue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{ backgroundColor: "brown", color: "white" }}
                >
                  View <i className="fa fa-download"></i>
                </a>
              ) : (
                "No file"
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default C169;