import React from "react";
import { useSelector } from "react-redux";
import Paragraph from "../Common/Paragraph";
import "./stylesheet.css";

function Node272() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
    {siteData?.Node272?.map((information, index) => (
        <section className="container" key={index}>
          <div className="content">
            <Paragraph
            heading={information.heading}
            />

            {information?.detailservices?.map((content, subIndex) => (
              <Paragraph
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

export default Node272;
