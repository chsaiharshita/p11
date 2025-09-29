import React from "react";
import { useSelector } from "react-redux";
import C131 from "../Common/C131";
import C139 from "../Common/C139";
import "./C401.css";

function C412() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.BLUECOLTS?.map((page, pageIndex) => (
        <section className="container" key={pageIndex}>
          <div className="content">
            {/* Heading + Paragraphs together */}
            <C131
              content={{
                header: page.heading,
                p: page.detailservices
                  ?.map((para) => para.p)
                  .join(" "), // all paras join into one block
              }}
           className="no-gap" />

            {/* Table */}
            {page.columns && page.rows && (
              <C139
                heading={page.heading}
                columns={page.columns}
                rows={page.rows}
              />
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C412;