import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstitutes } from "../C1001/C1002";
import data from "../../sitedata.json";

const InstituteTable = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 10;

  const { institutes, total, loading, error } = useSelector(
    (state) => state.institute
  );

  useEffect(() => {
    dispatch(fetchInstitutes(page));
  }, [dispatch, page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <h2>{data.instituteTableTitle}</h2>

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
                  {data.instituteTable.map((col) => (
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
                  <tr key={inst.id || inst.code}>
                    {data.instituteTable.map((col) => (
                      <td key={col.key}>{inst[col.key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination Controls */}
          <div style={{ marginTop: "20px" }}>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
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
