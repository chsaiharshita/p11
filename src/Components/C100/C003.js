import React from "react";
import "./home.css";
import { Carousel } from "react-bootstrap";
import data from "../../sitedata.json";
import C141 from "./C141.js";
import C004 from "./C004.js";
import C142 from "./C142.js";
import C901 from "../C900/C901.js";
import C902 from "../C900/C902.js";
import C903 from "../C900/C903.js";


function C003() {
    return (
      <>
        <section className="testimonials" >
           <div className="container" >
          {data.menu1.map((home) => {
          return (
            <>
              <section className="rowa" >
                {home.section1.map((e) => {
                  return (
                    <>
                      <section id={home.title1} >
                        <div className="slide">
                         <div >
                         <Carousel>
                          <Carousel.Item interval={1000}>
                            {e.carousel1.map((details) => {
                              return (
                                <>
                                  <img
                                    className="d-block w-100"
                                    style={{ width: "500px", height: "400px" }}
                                    src={details.image}
                                    alt={details.imagealt}
                                  />
                                </>
                              );
                            })}
                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            {e.carousel2.map((details) => {
                              return (
                                <>
                                  <img
                                    className="d-block w-100"
                                    style={{ width: "500px", height: "400px" }}
                                    src={details.image}
                                    alt={details.imagealt}
                                  />
                                </>
                              );
                            })}
                          </Carousel.Item>
                         
                         <Carousel.Item interval={1000}>
                            {e.carousel3.map((details) => {
                              return (
                                <>
                                  <img
                                    className="d-block w-100"
                                    style={{ width: "500px", height: "400px" }}
                                    src={details.image}
                                    alt={details.imagealt}
                                  />
                                </>
                              );
                            })}
                          </Carousel.Item>
                          
                         </Carousel>
                        </div>
                        </div>
                        </section>
                      </>
                     );
                   })}
                 </section>
                </>
                  );
                })}
             
              </div>
              </section>
              <C141 />
             <C004 />
            <C142/>
          </>
    )
}
 export default C003;

 