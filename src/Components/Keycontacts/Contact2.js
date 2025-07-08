import React from "react";
import data from "../../sitedata.json";
import "./styles.css";

function Contact2() {
  return (
    <div>
      {data.Contact2.map((information) => {
        return (
          <section className="container">
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
                  <th >{content.Serial}</th>
                <th>{content.Name}</th>
                 <th>{content.Designation}</th>
                 <th>{content.Contact}</th>
                 <th>{content.Profile}</th>
                  </tr>
                  <tbody id="customer">
                 {content.paragraph.map((details) => {
                     return (
                        <tr  >
                        <td > {details.Serial}</td>
                       <td > {details.Name}</td>
                      <td> {details.Designation} </td> 
                      <td> {details.Contactno} </td>  
                       <td> {details.Profile} </td> 
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


export default Contact2;