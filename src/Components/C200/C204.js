import React from "react";
import { useSelector } from "react-redux";
import C132 from "../Common/C132"; 
import "./stylesheet.css";

function C204() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.C204?.map((tableData, index) => (
        <section className="container" key={index}>
          <div className="content">
            <C132
              heading={tableData.heading}
              columns={tableData.columns}
              rows={tableData.rows}
            />
          </div>
        </section>
      ))}
    </div>
  );
}

export default C204;
