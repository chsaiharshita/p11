import React from "react";
import { useSelector } from "react-redux";
import C131 from "../Common/C131"; // Use C131 instead of C139
import C121 from "../Common/C121";
function C406() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.DCRB?.map((page, pageIndex) => (
        <section className="container" key={pageIndex}>
          <div className="content">

                   {/* Heading */}
            <C131
              content={{
                header: page.heading,
                p: "",
                paragraph: []
              }}
            />

            {/* Paragraphs */}
            {page.detailservices &&
              page.detailservices.map((para, i) => (
                <C131
                  key={i}
                  content={{
                    header: "",
                    p: para.p,
                    paragraph: []
                  }}
                />
              ))}
            {/* Transform data to C131 format */}
            {page.columns && page.rows && (
              <C131
                content={{
                  header: page.heading,
                  paragraph: page.rows,
                  ...page.columns.reduce((acc, col) => {
                    acc[col] = col; // column headers
                    return acc;
                  }, {}),
                }}
              />
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C406;
