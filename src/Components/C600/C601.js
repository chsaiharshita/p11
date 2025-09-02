import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import data from "../../sitedata.json";
import Contactmap from "./map.js"


function C601() {
  return (
     <>
       {data.contact.map((details) => {
          return (
             <>
               <section>
                 <div className="contact">
                   <section className="container  py-4" >
                     <h3 className="font-weight-bold text-left" id="contact_title">
                       <section clasName="underline mr-auto"></section>
                       {details.title}
                     </h3>
                     <div className="row m-1" id="">
                       <div className="col-lg-6 centered  py-4 container"   id="border1">
                   
                    <div>

                  <h5 className="font-weight-bold">{details.heading}</h5>
                  
                    <i className="fa fa-file-pdf-o" 
                    aria-hidden="true" 
                    style={{color:"red"}}> 
   
                 <a href={details.link} target="_blank" 
                    style={{marginLeft:"5px"}}>{details.description}</a> 
                     </i>
                        </div>
                      
                       </div>
                       <div className="col-lg-6 centered  py-4 container "  id="border">
                       <div className="contact1">
                       
                       <h5 className="font-weight-bold text-black text-left  ">
                       {details.header}
                       </h5>
                       <div className="address_border">
                       <img className="address "
                            src="./images/address1.png"  
                         />
                         <div>
                     {details.paragraph.map((e) => {
                           return( 
                             <>
                             <div className="style">
                              <p className="m-1 para_contact">{e.p}</p>
                              </div>
                              </>
                         )})}
                         </div>
                       </div>
                     </div>
                     <div className="address_location">
                       <h5 className="font-weight-bold text-black ">{details.subtitle}</h5>
                       </div>
                       <div className="  " id="newmap" >
                       <Contactmap />
                       </div>
                       </div>
                     </div>
                   </section>
                 </div>
               </section>
             </>
            );
          })}
        
        </>
  )
};

export default C601; 