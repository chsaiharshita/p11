
import React from "react";
import C148 from "../Common/C148";
import siteData from "../../sitedata.json";

function C308() {
  const dept = siteData.tables.Naidupeta;

  return (
    <C148
      title={dept.title}
      columns={dept.columns}
      apiUrl={dept.apiUrl}
    />
  );
}

export default C308;