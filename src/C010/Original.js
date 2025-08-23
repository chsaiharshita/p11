import React from "react";
import Header1 from "../Components/C105/navBar.js";
import Footer from "../Components/Footer/Footer";
import "./layout.css";
import { withRouter } from "react-router-dom";
import Layout from "./Layout.js";

function Original() {
  
  return (
    <React.Fragment>
      <div className="d-flex flex-column min-vh-100" >
    
       
        <Header1 />
        <section className="content" id="target" >
          <Layout />
        </section>
       
        <div className="mt-auto" id="target"  >
          <Footer/>
        </div>
      
      </div>
    </React.Fragment>
  );
}

export default withRouter(Original);