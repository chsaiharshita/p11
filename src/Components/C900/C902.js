import React from "react";
import { useSelector } from "react-redux";
import C121 from "../Common/C121";

function C902() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.SocialMedia?.map((information, index) => (
        <section className="container" key={index}>
          <div className="content" style={{ textAlign: "center" }}>
            {/* Main heading */}
            <C121 heading={information.heading} />

            {/* Social media links */}
            {information?.detailservices?.map((content, subIndex) => (
              <C121
                key={subIndex}
                text={
                  <a
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ff0000", fontWeight: "bold", textDecoration: "underline" }}
                  >
                    {content.p}
                  </a>
                }
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C902;
