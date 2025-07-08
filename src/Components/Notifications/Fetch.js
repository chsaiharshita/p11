import React from "react";
import data from "../../sitedata.json";


function Fetch() {
  return (
    <div>
      {data.Fetch.map((information) => {
        return (
          <section className="container" >
            <div className="content">
              <h3 className="  ">{information.ptitle}</h3>
              {information.a.map((content) => {
                return (
                  <>
                    <h5 className="  ">{content.header}</h5>
                    <p>{content.aname}</p>
                   
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

export default Fetch;
