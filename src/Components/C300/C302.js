import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";


function C302() {
  return (
    <div>
    {data.PagetypeC.map((information) => {
      return (
        <section className="container" id="container-A">
          <div className="content">
            <h3 className="  m-3">{information.heading}</h3>
            {information.detailservices.map((content) => {
              return (
                <>
                  <h5 className="">{content.header}</h5>
                  <section>
                    {content.paragraph.map((detail) => {
                      return (
                        <ul className="">
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

export default C302;
