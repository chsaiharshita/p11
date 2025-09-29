import React from "react";
import "./style2.css"; // optional table styling

function C146({ data }) {
  if (!data) return null;

  return (
    <section className="container">
      <div className="content-text">
        {data.title && (
          <h2 align="center">
            <b>
              <u>{data.title}</u>
            </b>
          </h2>
        )}

        <table align="center" border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              {data.columns?.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows?.map((row, i) => (
              <tr key={i}>
                {/* Auto S.No if "S.No" or "Sl.No" exists */}
                {data.columns[0].toLowerCase().includes("s.no") ? (
                  <td>{i + 1}</td>
                ) : null}

                {Object.values(row).map((val, j) => (
                  <td key={j}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default C146;