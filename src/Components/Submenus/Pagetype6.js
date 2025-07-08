import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Pagetype6() {
  return (
    <div>
      {data.Pagetype6.map((information) => {
        return (
          <section className="container" id="">
            <div className="content">
              <h3 className="m-3">{information.heading}</h3>
              {information.detailservices.map((content) => {
                return (
                  <>
                  <div className="" id="q">
                    <h5 className="  " style={{color:"red" }}>{content.header}</h5>
                    <p>{content.p}</p>
                    <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                  <thread  > 
                  <tr >
                 <th style={{width:"5%"}} >{content.Serial}</th>
                 <th style={{width:"65%"}}>{content.Trainingwing}</th>
                 <th style={{width:"30%"}}>{content.Contact}</th>
                  </tr>
                  <tbody id="customer">
                 {content.paragraph.map((details) => {
                     return (
                        <tr  >
                        <td > {details.Serial}</td>
                      <td style={{textAlign:"left", paddingLeft:"10px"}}> {details.Trainingwing} </td> 
                      <td > 
                      <a  href={details.link} target="_blank">
                       View
                         </a> 
                         <i className="fa fa-download pdf-download" aria-hidden="true"></i>
                         </td>  
                       </tr>
                     );
                   })}
                    </tbody>
                  </thread>
                </table>
                </div>
               <section>
                <div className="" id="q">
                <h5 className="  " style={{color:"red"}}>{content.header1}</h5>
                    <p>{content.p1}</p>
                    <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                  <thread  > 
                  <tr >
                 <th style={{width:"5%"}} >{content.Serial1}</th>
                 <th style={{width:"65%"}}>{content.Trainingwing1}</th>
                 <th style={{width:"30%"}}>{content.Contact1}</th>
                  </tr>
                  <tbody id="customer">
                 {content.paragraph1.map((details) => {
                     return (
                        <tr  >
                        <td > {details.Serial}</td>
                      <td style={{textAlign:"left", paddingLeft:"10px"}}> {details.Trainingwing} </td> 
                      <td> 
                      <a  href={details.link1}>
                       View
                         </a> 
                         <i className="fa fa-download pdf-download" aria-hidden="true"></i>
                         </td>  
                       </tr>
                     );
                   })}
                    </tbody>
                  </thread>
                </table>
                </div>
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


export default Pagetype6;