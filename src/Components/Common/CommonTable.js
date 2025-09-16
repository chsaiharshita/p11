// src/components/Common/CommonTable.js
import React, { useState } from "react";
import "./CommonTable.css";

function CommonTable({ title, data, columns, postsPerPage = 15 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentData = data.slice(indexOfFirst, indexOfLast);

  return (
    <section className="container">
      <div className="content">
        {title && <h3>{title}</h3>}

        <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>S.No</th>
              {columns.map((col, idx) => (
                <th key={idx} style={{ width: col.width }}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) =>
              row.cproperties?.map((e, innerIndex) => (
                <tr key={`${index}-${innerIndex}`}>
                  <td>{indexOfFirst + index + 1}</td>
                  {columns.map((col, idx) => (
                    <td key={idx} style={col.style}>
                      {col.render ? col.render(row, e) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: Math.ceil(data.length / postsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLast >= data.length}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default CommonTable;
