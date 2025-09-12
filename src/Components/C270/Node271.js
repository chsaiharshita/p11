import React from "react";
import { useSelector } from "react-redux";
import C121 from "../Common/C121";
import "./stylesheet.css";

function Node271() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
    {siteData?.Node271?.map((information, index) => (
        <section className="container" key={index}>
          <div className="content">
            <C121
            heading={information.heading}
            />

            {information?.detailservices?.map((content, subIndex) => (
              <C121
                key={subIndex}
                subHeading={content.header}
                text={content.p}
                list={content.paragraph}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Node271;
