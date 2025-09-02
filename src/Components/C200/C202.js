import  React from "react";
import "./style.css";
import data from "../../sitedata.json";

function C202() {
     return (
           <>
           {data.Organisation.map((details) => {
             return (
             <>
               <section>
                <div className="container" id ="images">
                  <div className="row">
                      <h3 className="font-weight-bold center m-3" id="organisation">{details.title}</h3>
                        {details.paragraph.map((e) => {
                         return (
                           <>
                             <div className="" id="org">
                               <img
                                   download
                                    style={{ width: "100%", height: "100%" }}
                                    alt=""
                                    src={e.imgsrc}
                                    />
                                   </div>
                                  </>
                                );
                              })}
                          </div>
                       </div>
                    </section>
                  </>
               )})}
           </>
         )
      } 
export default C202;