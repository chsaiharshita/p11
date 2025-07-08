import React from "react";
import data from "../../sitedata.json";
import "./styles.css";

function Page10() {
  return (
    <div>
      {data.Page10.map((information) => {
        return (
          <section className="container">
            <div className="content">
              <h3 className=" ">{information.heading}</h3>
   
              {information.detailservices.map((content) => {
                return (
                  <>
                  <div className="" id="p">
                    <h5 className="m-3">{content.header}</h5>
                    <h6>{content.header1}</h6>
                    <p>{content.p1}</p>
                    <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                  <thread  > 
                  <tr >
                 <th style={{width:"5%"}}>{content.Serial}</th>
                 <th>{content.Category}</th>
                 <th>{content.TypeSale}</th>
                 <th style={{width:"10%"}}>{content.Application }</th>
                 <th >{content.Licence }</th>
                 <th>{content.Fees }</th>
                 <th>{content.Renewal}</th>
                 <th>{content.Penalty }</th>
                 <th>{content.Feesforduplicate  }</th>
                  </tr>
                  <tbody id="customer">
                 {content.paragraph.map((details) => {
                     return (
                        <tr  >
                 <td style={{width:"5%"}}>{details.Serial}</td>
                 <td>{details.Category}</td>
                 <td>{details.TypeSale}</td>
                 <td style={{width:"10%"}}>{details.Application }</td>
                 <td>{details.Licence }</td>
                 <td>{details.Fees }</td>
                 <td>{details.Renewal}</td>
                 <td>{details.Penalty }</td>
                 <td>{details.Feesforduplicate  }</td>
                
                       </tr>
                     );
                   })}
                    </tbody>
                  </thread>
                  <p>{content.p}</p>
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


export default Page10;