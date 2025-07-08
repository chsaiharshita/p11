import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Pages2() {
  return (
    <div>
      {data.Pages2.map((information) => {
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
                            <a href={detail.link}  id="p">
                             <i  className=" fa fa-hand-o-right  px-2"></i>
                                  {detail.p} 
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

export default Pages2;
