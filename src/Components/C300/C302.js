// src/Components/C200/C203.js
import React from "react";
import { useSelector } from "react-redux";
import TableComponent from "../Common/TableComponent";
import "./stylesheet.css";

function C302() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.PagetypeA?.map((information, index1) => (
        <section className="container" key={index1}>
          <div className="content">
            <h3 className="m-3">{information.heading}</h3>

            {information.detailservices?.map((content, index2) => (
              <TableComponent key={index2} content={content} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C302;
