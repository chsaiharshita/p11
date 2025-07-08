import React from "react";
import "./styles.css";
import data from "../../sitedata.json";

function index() {
  return (
    <>
    <section>
      <div className="contactus">
        <div className="container" id="contact" >
        {data.Contactus.map((information) =>{
             return(
          <div>
            <h3 className="common__heading ">{information.title}</h3>
            <div className=" d-flex justify-content-center ">
             <div className="row display__flexbox">
             {information.Contact.map((content) => {
              return(
                <>
               <div className="col-lg-4 col-md-4 col-xs-2 col-sm-2 ">
              <div className="contactus__card text-center " >
              <div className=" p-2 text-start" >
                <span className="">
                <img
                  className="card_img"
                  src={content.imgsrc}
                  alt={content.imgalt}
                     />
                </span>
                <h4 className="heading">{content.heading}</h4>
                </div>
                <section>
                {content.paragraph.map((details) => {
                        return (
                          <ul className="a">
                          <a href={details.link1} target="_blank" >
                             {details.p}
                          </a>
                          <a>{details.title}</a>
                        </ul>
                        );
                      })}
                    </section>
                  </div>
                </div>
               
              </>
              );
              })}
               <section>
              <h5 id="margin">{information.p}</h5>
              </section>
             </div>
              </div>
              </div>
              );
              })}   
                
          </div>
      </div>
      </section>
    </>
  );
}

export default index; 