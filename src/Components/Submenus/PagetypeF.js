import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";


function PagetypeF() {
  return (
    <div>
      {data.PagetypeF.map((information) => {
        return (
          <section className="container">
            <div className="content"  >
              <h3 className="" >{information.heading}</h3>
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
                <th style={{width:"25%"}}>{content.Area}</th>
                <th style={{width:"50%"}}>{content.Name}</th>
                 <th style={{width:"20%"}}>{content.District}</th>
                  </tr>
                  <tbody id="customer">
                 {content.paragraph.map((details) => {
                     return (
                      <tr  >
                      <td > {details.Serial}</td>
                      <td style={{textAlign:"left", paddingLeft:"10px"}}> {details.Area} </td>  
                     <td style={{textAlign:"left", paddingLeft:"10px"}}> {details.Name}</td>
                    <td style={{textAlign:"left", paddingLeft:"10px"}}> {details.District} </td> 
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


export default PagetypeF;