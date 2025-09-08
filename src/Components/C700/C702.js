import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstitutes } from "../C1001/C1002.js"
const InstituteTable = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 10;

  const {
    institutes = [],
    columns = [],
    total = 0,
    loading = false,
    error = null,
  } = useSelector((state) => state.institute || {});

  useEffect(() => {
    dispatch(fetchInstitutes(page, limit));
  }, [dispatch, page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <h2>Institute / Trades Table</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {institutes.map((inst) => (
                  <tr key={inst._id || inst.ccode}>
                    {columns.map((col) => (
                      <td key={col.key}>{inst[col.key] || "-"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>
            <span style={{ margin: "0 10px" }}>
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default InstituteTable;