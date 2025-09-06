import React from "react";
import "./C200.css";
import data from "../../sitedata.json";


function About() {
  return (
    <div>
      {data.About.map((information) => {
        return (
          <section className="container">
            <div className="content">
             <h3 className="  ">{information.heading}</h3>
               {information.detailservices.map((content) => {
                return (
                  <>
                   <h5 className="  ">{content.header}</h5>
                     <section>
                       {content.paragraph.map((detail) => {
                         return (
                           <ul >
                             <p className="" id="p">
                              {detail.p}
                             </p>
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

export default About;
