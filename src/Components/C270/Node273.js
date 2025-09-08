/*import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Node273() {
  return (
    <div>
      {data.Node273.map((information) => {
        return (
          <section className="container" >
            <div className="content">
              <h3 className="  m-3">{information.heading}</h3>
              {information.detailservices.map((content) => {
                return (
                  <>
                    <h5 className="">{content.header}</h5>
                    <section>
                      {content.paragraph.map((detail) => {
                        return (
                            <ul className="m-2">
                            <a href={detail.link} target="_blank" id="p">
                             <i  className=" fa fa-hand-o-right  px-2"></i>
                                  {detail.p} 
                                </a>
                            </ul>
                          );
                        })}
                     </section>

                   
   
                  </>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Node273;*/
import React from "react";
import { useSelector } from "react-redux";
import Paragraph from "../Common/Paragraph";
import "./stylesheet.css";

function Node273() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.Node273?.map((information, index) => (
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

export default Node273;

