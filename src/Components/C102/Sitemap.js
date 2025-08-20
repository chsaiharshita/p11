
import React from "react";
import "./Sitemap.css";
import data from "../../sitedata.json";
import { MdLaunch } from "react-icons/md";
import Dropdown from "react-multilevel-dropdown";

function Header() {
  return (
    <> 
      <section className="font-weight-bold  navdetails" id="sitemap1">
        <div  className="col-md-auto">
        <div className="container" id="flow"> 
        <nav className="navbar navbar-expand-xl col-sm-12  navbar-light " id="expand" >
          <a className="nav-link d-sm-none">
            <i
              className="fa fa-home"
              aria-hidden="true"
              style={{ fontSize: "28px", color: "#ffff" }}
            />
            <span className="sr-only">(current)</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon my-toggler toggle"></span>
          </button>
          <section
            className=""
            id="navbarTogglerDemo01"
          >
            <div >
               <h3 className="Sitemap">Sitemap</h3>
             </div>
             <div className="sitemapA" > 
              {data.Navlink.map((j) => {
                return (
                    <ul className="nav-item "  >
                      <a className="nav-link"  href={j.link} >
                      <i  className=" fa fa-hand-o-right  px-2"></i>
                           {j.title}
                     
                      </a>
                    </ul>
                   );
                })}
             </div>
             <div>


{data.drop.map((information) => {
  return (
    <section className="sitemap2" id="">
        <h6 className="sitemap1">
        <i  className=" fa fa-hand-o-right  px-2"></i>
           {information.name}
           </h6>
        {information.children.map((content) => {
          return (
            <>
              <h5 className="  ">{content.subtitile}</h5>
                    <ul className="a">
                      <a  href={content.link} id="sitemap2" >
                       <i  className=" fa fa-hand-o-right  px-2"></i>
                         {content.name}
                     </a>
                    </ul>
                  </>
               );
            })}
      </section>
      );
    })}
</div>
             {/*  <div className="sitemapB "  id="">
              {data.Navlink1.map((j) => {
                return (
                    <ul className=" ">
                      <a className=" " href={j.link} id="navbarDropdown">
                      <i  className=" fa fa-hand-o-right  px-2"></i>
                      {j.title}
                        <span className="sr-only">(current)</span>
                      </a>
                    </ul>
                );
              })}
           </div>

         <div className="sitemapC "  id="">
              {data.Navlink2.map((j) => {
                return (
                    <ul className=" ">
                      <a className=" " href={j.link} target="_blank" id="navbarDropdown">
                      <i  className=" fa fa-hand-o-right  px-2"></i>
                      {j.title}
                      </a>
                    </ul>
                 );
               })}
              </div>

      <div className="sitemapD"  id="">
              {data.Navlink3.map((j) => {
                return (
                    <ul className="">
                      <a className="  " href={j.link}  >
                      <i  className=" fa fa-hand-o-right  px-2"></i>
                        {j.title}
                        <span className="sr-only">(current)</span>
                      </a>
                    </ul>
                 );
               })}
            </div>*/}


           

       <ul className="sitemapE" >
              {data.Navlinkleft.map((j) => {
                return (
                  <>
                    <ul className=" " >
                      <a className="" id="navbarDropdown2"  href={j.link} target="_blank" >
                      <i  className=" fa fa-hand-o-right  px-2"></i>  
                        {j.title } 
                       < MdLaunch  size="1.5em" color="red" /> 
                        <span className="sr-only" >
                        </span>
                      </a>
                    </ul>
                   </>
                 );
               })}
             </ul> 


     <div>
{data.footerlink.map((information) => {
  return (
    <section className="sitemap2" id="">
        <h5 className="sitemap1">{information.title}</h5>
        {information.content.map((details) => {
          return (
            <>
                    <ul className="a">
                      <a  href={details.link} id="sitemap5" >
                       <i  className=" fa fa-hand-o-right  px-2"></i>
                         {details.title}
                     </a>
                    </ul>
              </>
          );
        })}
    </section>
  );
})}
</div>

           </section>
          </nav>
        </div>
        </div>
      </section>
    </>
  );
}

export default Header;
