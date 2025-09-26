import React from "react";
import { useSelector } from "react-redux";
import C131 from "../Common/C131";
import "./C401.css";

function C411() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.MahilaRakshak?.map((page, pageIndex) => (
        <section className="container" key={pageIndex}>
          <div className="content">
            {/* ✅ Heading also inside reusable TableComponent style */}
            <C131
              content={{
                header: page.heading, // heading ni header la pass chestunnam
                p: "",                // optional description empty
                paragraph: []         // table rows unnecessary ikkada
              }}
            />

            {/* ✅ Detail Services list → TableComponent call */}
            {page.detailservices?.map((tableData, tableIndex) => (
              <C131 key={tableIndex} content={tableData} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C411;