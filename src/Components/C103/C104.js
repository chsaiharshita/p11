import React from "react";
import data from "../../sitedata.json";
import "./NavBar.css";

function C104() {
  return (
    <div>
      <section className="container-lg" id="">
        {data.Header.map((home) => {
          return (
            <>
                <div className="box">
                    {home.img1.map((details) => {
                      return (
                        <>
                          <a href={details.link} id="headerimage1">
                            <img
                              src={details.imgsrc}
                              className="d-none d-sm-block image-style1"
                              id="imagestyle" 
                              alt={details.imgalt}
                              href={details.link}
                            />
                          </a>
                          <a href={details.link} id="headerimage1">
                            <img
                              src={details.imgsrc}
                              className="d-block d-sm-none image-style1"
                              alt={details.imgalt}
                              href={details.link}
                              style={{width:"50px", height:"70px"}}
                            />
                          </a>
                        </>
                      );
                    })}
                
                  
                               
                   <div className="selected " id="title">
                    <h3 className="titleheadermobile1 d-none d-sm-block" style={{ fontSize: "1.8vw" }}>{home.heading}</h3>
                    <h3 className="titleheadermobile1 d-lg-none d-sm-none"  style={{ fontSize: "3.5vw" }}>{home.heading}</h3>
                    <h3 className="titleheadermobile d-none d-sm-block"  style={{ fontSize: "1.8vw" }}>{home.header}</h3>
                    <h3 className="titleheadermobile d-lg-none d-sm-none"  style={{ fontSize: "3.5vw" }}>{home.header}</h3>
                       {home.description.map((details) => {
                        return (
                          <>
                            <h3 className="titleheadermobile1  d-none d-sm-block"style={{ fontSize: "1.8vw" }}  >
                              {details.title}
                            </h3>
                            <h3 className="titleheadermobile1 d-lg-none d-sm-none"style={{ fontSize: "3.5vw" }}  >
                              {details.title}
                            </h3>
                          </>
                        );
                      })}
                    </div>
                  
                
                    {home.img2.map((details) => {
                      return (
                        <>
                         <a href={details.link} target="_blank" id="headerimage2" >
                          <img
                            src={details.imgsrc}
                            className=" d-none  image-style2"
                            id="imagestyle" 
                            alt={details.imgalt}
                            href={details.link}
                            style={{ width: "50px", height: "70px" }}
                          />
                          </a>
                          <a href={details.link} target="_blank" id="headerimage2" >
                          <img
                            src={details.imgsrc}
                            className=" d-none d-sm-block image-style2"
                            id="imagestyle" 
                            alt={details.imgalt}
                            href={details.link}
                            style={{ width: "120px", height: "120px" }}
                          />
                          </a>
                        </>
                      );
                    })}
                  </div>
            </>
          );
        })}  
      </section>
    </div>
  );
}

export default C104;