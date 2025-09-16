import React from "react";
import { useSelector } from "react-redux";
import CommonOrgChart from "../Common/C128";
import "./style.css";

function C202() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <>
      {siteData?.Organisation?.map((details, index) => (
        <CommonOrgChart
          key={index}
          title={details.title}
          paragraph={details.paragraph}
        />
      ))}
    </>
  );
}

export default C202;
