import React from "react";
import ReactDOM from "react-dom";
import "./home.css";
import data from "../../sitedata.json";


function C005() {
  return (
    <div className="mt-4 mt-sm-0">
       <div className="row">
          <div className=" text-start text-white m-2 py-2 ">
               <div className=""> 
                {data.section3.map((details) => {
                 return (
                  <>
                  <div>
                  <h3 className="font-weight-bold  text-center " id="h7">
                   <section clasName="underline mr-auto"></section>
                   {details.title}
                     </h3>
                       </div>
                        {details.card1.map((e) => {
                          return (
                         <>
                           <div className=" " id=""  >
                              <div className="  ">
                                <div className="card__picture1 p-1 text-left" id="tool1">
                                    <div className="col-lg" id="events">
                                    <img
                                    src={e.imgsrc}
                                    alt={e.imgalt}
                                    className="card__img1"
                                    href={details.button_link}
                                            />
                                        </div>
                                       <h5 className=" " id="covid2" >
                                      {e.title}
                                     <i/>
                                    </h5>
                                   <p className="  " id="para2">
                                  {e.description}
                                  </p>
                                   {e.para.map((f) => {
                                   return (
                                   <p className=" " id="para4"  >
                                  {f.subtitle} <a href={f.link} target="_blank">{f.viewmore} </a>
                                    </p> 
                                  )})}
                               </div>
                             </div>
                           </div>
                         </>
                       )})}
                     </>
                   )})}
                 </div>
                </div>  
            
             </div> 
             </div>
       
         )}
export default C005;