import React from "react";
import C148 from "../Common/C148";
import siteData from "../../sitedata.json";

function C310() {
  const dept = siteData.tables.Traffic;

  return (
    <C148
      title={dept.title}
      columns={dept.columns}
      apiUrl={dept.apiUrl}
    />
  );
}

export default C310;