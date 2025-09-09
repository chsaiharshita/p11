import React from "react";
import data from "../../sitedata.json";
import "./styles.css";

function C401() {
  return (
    <div>
      {data.Rti.map((information) => {
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
                 <th >{content.Serial}</th>
                 <th>{content.Authority}</th>
                 <th>{content.Trainingwing}</th>
                 <th>{content.Contact}</th>
                  </tr>
                  <tbody id="customer">
                  {content.paragraph.map((details) => {
                     return (
                        <tr  >
                        <td > {details.Serial}</td>
                       <td > {details.Authority}</td>
                      <td> {details.Trainingwing} </td> 
                      <td> {details.Contactno} </td>  
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


export default C401;
// src/Components/C200/C203.js
/*import React from "react";
import { useSelector } from "react-redux";
import TableComponent from "../Common/TableComponent";
import "./styles.css";

function C401() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.Rti?.map((information, index1) => (
        <section className="container" key={index1}>
          <div className="content">
            <h3 className="m-3">{information.heading}</h3>

            {information.detailservices?.map((content, index2) => (
              <TableComponent key={index2} content={content} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C401;*/
