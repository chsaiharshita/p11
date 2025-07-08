import React from "react";
import ReactDOM from "react-dom";
import "./home.css";
import { Carousel } from "react-bootstrap";
import data from "../../sitedata.json";
import Home from "./C141.js";
import About from "./About.js";
import Api from "./C142.js";


function Slide() {
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
                         
                       {/*   <Carousel.Item interval={1000}>
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
                          </Carousel.Item>*/}
                         
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
              <Home />
             <About />
             <Api />
          </>
    )
}
 export default Slide;