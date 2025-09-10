import React from "react";
import { useSelector } from "react-redux";
import TableComponent from "../Common/TableComponent";
import "./stylesheet.css";

function C303() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.Pagetype22a?.map((page, pageIndex) => (
        <section className="container" key={pageIndex}>
          <div className="content">
            {/* ✅ Heading also inside reusable TableComponent style */}
            <TableComponent
              content={{
                header: page.heading, // heading ni header la pass chestunnam
                p: "",                // optional description empty
                paragraph: []         // table rows unnecessary ikkada
              }}
            />

            {/* ✅ Detail Services list → TableComponent call */}
            {page.detailservices?.map((tableData, tableIndex) => (
              <TableComponent key={tableIndex} content={tableData} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C303;
