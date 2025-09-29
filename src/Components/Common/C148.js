import React, { useEffect, useState } from "react";
import "./C148.css";

function C148({ title, columns, apiUrl }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRows(data);
        } else if (data.a && Array.isArray(data.a)) {
          setRows(data.a); // 👈 your Mongo format
        } else {
          setRows([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) return <p>Loading {title}...</p>;
  if (error) return <p>Error loading {title}: {error.message}</p>;

  return (
    <div className="table-wrapper">
      <h3>{title}</h3>
      <table border="1" cellPadding="8" align="center">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col, i) => (
                <td key={i}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default C148;