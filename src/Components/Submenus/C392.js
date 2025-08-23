import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C392() {
  return (
    <div>
      {data.Pagetype14.map((information) => {
        return (
          <section className="container" >
            <div className="content">
              <h3 className=" m-3">{information.title}</h3>
              {information.header.map((content) => {
                return (
                  <>
                    <h5 className="  ">{content.subtitle}</h5>
                   <p>{content.p}</p>
                    <section>
                      {content.subheader.map((detail) => {
                        return (
                          <ul className="" id="p">
                            {detail.p}
                            <a  href={detail.link}  >
                             <i  className=" "></i>
                               {detail.title} 
                           </a>
                          </ul>
                        );
                     })}
                    </section>
        <div className="col-lg-5 centered  p-4 container ">
          <img
            className="img-thumbnail  d-lg "
           
            alt={content.imgalt}
            src={content.imgsrc}
            id="community"
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

export default C392;
