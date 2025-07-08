import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Page1() {
  return (
    <div>
    {data.Page1.map((information) => {
      return (
        <section className="container" >
          <div className="content">
            <h3 className=" m-3 ">{information.heading}</h3>
            {information.detailservices.map((content) => {
              return (
                <>
                  <h5 className="m-3  ">{content.header}</h5>
                  <section>
                    {content.paragraph.map((detail) => {
                      return (
                     
                          <ul className="" id="p">{detail.p}
                           <a   href={detail.link}  >
                           {detail.description}
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

export default Page1;


