import React from "react";
import C104 from "../C104/C104.js";
import C007 from "../C007/C007.js";
import "./C010.css";
import { withRouter } from "react-router-dom";
import Layout from "./C010.js";
import C102 from "../C102/C102.js";

function C011() {
  return (
    <React.Fragment>
      <div className="d-flex flex-column min-vh-100" >
    
        <C104 />
        <section className="content" id="target" >
          <Layout />
        </section>
        <div className="mt-auto" id="target"  >
          <C007/>
        </div>
      
      </div>
    </React.Fragment>
  );
}

export default withRouter(C011);
