import React from "react";
import data from "../../sitedata.json";
import "./Footer.css";


function Subfooter() {
  return (
    <div className="text-center text-white">
      {data.footerlink.map((information) => {
        return(
          <div> 
            <h5>{}</h5>
          
        {information.content.map((details) => {
        return (
          <>
            <a className="web" href={details.link}>
              {details.title}
              </a>
            <span className="px-2 spann"></span>
          </>
        );
      })}
      </div>
        )
      })}
    </div>
  );
}

export default Subfooter;
