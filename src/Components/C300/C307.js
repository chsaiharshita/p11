import React from "react";
import C148 from "../Common/C148";
import siteData from "../../sitedata.json";

function C307() {
  const dept = siteData.tables.Guduru;

  return (
    <C148
      title={dept.title}
      columns={dept.columns}
      apiUrl={dept.apiUrl}
    />
  );
}

export default C307;