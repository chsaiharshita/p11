import React from "react";
import ReactDOM from "react-dom";
import "./home.css";
import C005 from "./C005.js";
import data from "../../sitedata.json";

function C004() {
  return (
    <section className="about" >
      <div className="container" >
         <div className="row" id="about">
           <div className="col-lg">
             {data.section2.map((home) => {
              return (
               <>
                <section   >
                  <div className="row">
                    <section className="m-2 py-4" >
                     <h3 className="font-weight-bold  text-center">
                       <section clasName="underline mr-auto"></section>
                       {home.title}
                       </h3>
                       <div className="col-lg-12 text-start  m-2 py-1">
                         {home.paragraph.map((e) => {
                           return <p className="text-justify " id="">{e.p}</p>;
                         })}
                         <a
                           className="btn btn-danger btn-sm"
                           href={home.button_link}
                         >
                           {home.button}
                         </a>
                       </div>
                        </section>
                   </div>
                </section>
              </>
             );
           })}
        </div>
      <C005 />
      </div>
   </div>
   </section>
  
  )
};

export default C004; 