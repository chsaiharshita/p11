import React from "react";
import C148 from "../Common/C148";
import ScrollCardAPI from "../Common/ScrollCardAPI";
import siteData from "../../sitedata.json";

function C903() {
  
  const dept = siteData.tables.Events;
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", maxWidth: "100%" }}>
  <ScrollCardAPI apiUrl={dept.apiUrl} title={dept.title} />
</div>

  );
}

export default C903;
