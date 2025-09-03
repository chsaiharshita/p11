import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C391() {
  return (
    <div>
      {data.Pagetype11.map((information) => {
        return (
          <section className="container" >
            <div className="content">
              <h3 className="m-3 ">{information.title}</h3>
              {information.header.map((content) => {
                return (
                  <>
                  <div>
                    <h5 className=" " id="">{content.subtitle}</h5>
                     <p className="m-3" id="p">{content.p}</p>
                     </div>
                    <section>
                      {content.subheader.map((detail) => {
                        return (
                          <ul className="" >
                            {detail.p}
                            <a  href={detail.link}  id="p" >
                           
                                  {detail.title} 
                              </a>
                           </ul>
               
                        );
                     })}
                    </section>
                    <div className="col-lg-5 centered  p-4 container ">
                        <img
                          className="img-thumbnail  d-lg "
                          style={{ width: "100%", height: "350px" }}
                          alt={content.imgalt}
                          src={content.imgsrc}
                        
                        />
                      </div> 
                   
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

export default C391;
