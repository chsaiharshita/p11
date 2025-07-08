import React from "react";
import data from "../../sitedata.json";
import "./Footer.css";


function Webpolicies() {
  return (
    <div>
      {data.websitepolicies.map((information) => {
        return (
          <section className="container" >
            <div className="content">
              <h3 className="  ">{information.heading}</h3>
              {information.detailservices.map((content) => {
                return (
                  <>
                    <h5 className="  ">{content.header}</h5>
                    <p>{content.p}</p>
                    <section>
                      {content.paragraph.map((detail) => {
                        return (
                          <ul className="" id="p">
                            {detail.p}
                            <a  href={detail.link} >
                             <i  className=" "></i>
                               {detail.title} 
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

export default Webpolicies;
