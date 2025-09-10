import React from "react";
import { useSelector } from "react-redux";
import Paragraph from "../Common/Paragraph";
import "./C007.css";

function Webpolicies() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.websitepolicies?.map((information, index) => (
        <section className="container" key={index}>
          <div className="content">
            <h3 className="m-3 heading-black">{information.heading}</h3>

            {information?.detailservices?.map((content, subIndex) => (
              <div key={subIndex}>
                {content.header && <h5>{content.header}</h5>}
                {content.p && <p>{content.p}</p>}

                <section>
                  {content?.paragraph?.map((detail, paraIndex) => (
                    <Paragraph key={paraIndex} text={detail.p} />
                  ))}
                </section>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Webpolicies;
