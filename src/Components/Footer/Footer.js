import React from "react";
import "./Footer.css";
import Subfooter from "./Subfooter";
import ScrollToTopBtn from "./ScrollToTop.js";
import data from "../../sitedata.json";

function Footer() {
  return (

    
    <>
      <ScrollToTopBtn />
     
      <div className="footer"  >
      <div className="footer_top p-2 text-center"  >
          <Subfooter />
        </div>
        <div className="footer_bottom">
            {data.Footer.map((information) =>{
              return(
          <section className="footer_subscription">
             <ul className="footer_subscription_heading1">
            <a >{information.p}
            
            <a  href={information.link} target="_blank">{information.title}
            </a>
            </a>
            </ul>
           
          </section>
          )})}
          <section className="text-center">
            <div>
              <a className="logo1" target="_blank" href="https://ap.nic.in/">
                <img
                  src="https://ap.nic.in/wp-content/themes/sdo-theme/images/nic.png"
                  alt="nic"
                  style={{height:"40px"}}
                />
              </a>
              <a
                className="logo2"
                id="vl"
                href="https://www.digitalindia.gov.in/"
                target="_blank"
              >
                <img
                  src="https://ap.nic.in/wp-content/themes/sdo-theme/images/digitalIndia.png"
                  alt="digitalindia"
                  style={{height:"40px"}}
                  target="_blank"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    
    </>
  );
}

export default Footer;
