import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C206() {
  return (
    <div>
      {data.Pagetype7.map((information) => {
        return (
          <section className="container" id="">
            <div className="content">
              <h3 className="m-3">{information.heading}</h3>
              {information.detailservices.map((content) => {
                return (
                  <>
                  <div className="" id="q">
                    <h5 className="  ">{content.header}</h5>
                    <p>{content.p}</p>
                    <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                  <thread  > 
                  <tr >
                 <th style={{width:"5%"}} >{content.Serial}</th>
                 <th style={{width:"65%"}}>{content.Title}</th>
                 <th style={{width:"30%"}}>{content.Contact}</th>
                  </tr>
                  <tbody id="customer">
                     {content.paragraph.map((details) => {
                       return (
                        <tr id="text_align" >
                        <td > {details.Serial}</td>
                       <td style={{textAlign:"left", paddingLeft:"10px"}}> {details.Title} </td> 
                       <td> 
                      <a  href={details.link} >
                      View
                       <i className="" aria-hidden="true"></i>
                         </a> 
                     
                         </td>  
                       </tr>
                     );
                   })}
                    </tbody>
                  </thread>
                </table>
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


export default C206;