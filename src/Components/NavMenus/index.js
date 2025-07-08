import React from "react";
import "./index.css";
import Nav from "../Header/Nav.js";
import NavBar from "../Header/NavBar.js";
import data from "../../sitedata.json";
import { MdLaunch } from "react-icons/md";
import Dropdown from "react-multilevel-dropdown";


function Header() {
  return (
    <> 
    
      <Nav />
      <NavBar />
      <section className="font-weight-bold  sticky-top navdetails">
        <div  className="col-md-auto">
        <div className="container-lg" > 
        <nav className="navbar navbar-expand-xl col-sm-12  navbar-light " id="expand1" >
          <a className="nav-link d-sm-none" href="#">
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
            className="collapse navbar-collapse"
            id="navbarTogglerDemo01"
          >
          <ul className="navbar-nav navlinkdetails links" >
              {data.Navlink.map((j) => {
                return (
                  <React.Fragment>
                    <li className="nav-item active">
                      <a className="nav-link"  href={j.link} id="navbarDropdown1">
                        {j.title}
                      </a>
                    </li>
                    </React.Fragment>
                   );
                })}
             </ul>

         <ul className="navbar-nav navlinkdetails  links">
        {data.drop.map((j) =>{
        return(
          <React.Fragment>
        <li className="nav-item dropdown" id="dropdown">
          <a 
             className="nav-link dropdown-toggle"
             id="navbarDropdown" 
             href={j.link}>
            {j.name}
            <span className="sr-only">(current)</span>
          </a>
           <div className="dropdown-menu">
            <div className="Dropdown-item " aria-labelledby="nav-Dropdown" id="item1">
             {j.children.map((item) => {
                 return(
                  <li className=""  id="dropdown-item">
                  <a  className="nav-link"  href={item.link} >
                     {item.name }
                  </a>
                  </li>
                    )})}
                  </div>
                </div>
              </li>  
              </React.Fragment>
                )})}
          </ul>
          {/* <ul className="navbar-nav navlinkdetails links" >
              {data.Navlink1.map((j) => {
                return (
                  <React.Fragment>
                    <li className="nav-item active">
                      <a className="nav-link"  href={j.link} id="navbarDropdown1">
                        {j.title}
                      </a>
                    </li>
                    </React.Fragment>
                   );
                })}
             </ul> */}


 {/* 
        <ul className="navbar-nav navlinkdetails  links">
          {data.down.map((menu) => (
           <Dropdown
             title={menu.name} 
             ClassName=""
             id="nav-Dropdown" 
             className=" dropdown-toggle"
             data-toggle="dropdown"
           
          >
            <div className="Dropdown-item" id="item">
             {menu.children &&
              menu.children.map((item) => (
               <Dropdown.Item 
                className="dropdown-item" id="padding">
                <li className=""  id="dropdown-item">
              <a 
                  className="nav-link"
                   id=""
                  href={item.link}
                  
                > 
                {item.name }
                  </a>
                  </li>
                   {item.childre &&
                     item.childre.map((submenu) => (
                       <Dropdown.Submenu position="right">
                         <Dropdown.Item>{submenu.name}</Dropdown.Item>
                          {item.childr &&
                            item.childr.map((submenu) => (
                             <Dropdown.Submenu position="right">
                               <Dropdown.Item>{submenu.name}</Dropdown.Item>
                             </Dropdown.Submenu>
                           ))}
                       </Dropdown.Submenu>
                     ))}
                 </Dropdown.Item>
               ))}
               </div>
          
           </Dropdown>
         
           ))}
         
         </ul>



             <ul className="navbar-nav navlinkdetails  links">
              {data.Navlink1.map((j) => {
                return (
                    <li className="nav-item ">
                      <a className="nav-link " href={j.link} id="navbarDropdown">
                        {j.title}
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                );
              })} 
            </ul>

            <ul className="navbar-nav navlinkdetails  links">
              {data.Navlink2.map((j) => {
                return (
                    <li className="nav-item ">
                      <a className="nav-link " 
                      href={j.link} 
                      onClick="return confirm('You are being redirected to an external website.')" 
                      area-label="Citizen Charter-External site that opens a new link" 
                      id="navbarDropdown">
                        {j.title}
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                 );
               })}
             </ul>
         
             <ul className="navbar-nav navlinkdetails  links">
              {data.Navlink3.map((j) => {
                return (
                    <li className="nav-item ">
                      <a className="nav-link " href={j.link} id="navbarDropdown">
                        {j.title}
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                );
              })}
            </ul>


            {/*  <ul className="navbar-nav mr-auto links">
              <li className="nav-item dropdown">
                {data.Navlinkdropdown.map((i) => {
                  return (
                    <>
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {i.title}
                      </a>

                      {i.subnavlinks.map((e) => {
                        return (
                          <>
                            <section
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <a
                                className="nav-link-dropdown "
                                href={e.sublink}
                              >
                                {e.subtitle}
                              </a>
                            </section>
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </li>
            </ul> */}

       <ul className="navbar-nav ml-auto links" >
              {data.Navlinkleft.map((j) => {
               
                return (
                  <>
                    <li className="nav-item " >
                      <a className="nav-link" id="navbarDropdown2"  href={j.link} target="_blank" >
                       {j.title } 
                       < MdLaunch  size="1.5em" color="red" /> 
                        <span className="sr-only" >
                        </span>
                      </a>
                    </li>
                  </>
                );
              })}
            </ul> 
           </section>
          </nav>
        </div>
        </div>
      </section>
    
    </>
  );
}

export default Header;