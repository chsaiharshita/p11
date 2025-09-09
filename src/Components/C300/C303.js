import React from "react";
import { useSelector } from "react-redux";
import TableComponent from "../Common/TableComponent";
import "./stylesheet.css";

function C303() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.Pagetype22a?.map((information, index1) => (
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

export default C303;
