import React, {createContext,useState,Component } from 'react';
import "./Nav.css";
import data from "../../sitedata.json";
import Fontsize from "./Fontsize"
import { ThemeContext, themes } from '../../Components/DarkMode/ThemeContext.js';
import ToggleDark from '../../Components/DarkMode/ToggleDark.js';

function Nav() {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <>
    <div >
      {data.socialicons.map((e) => {
        return (
          <>
            <section className="">
              <div className="topBar d-none d-md-block" >
              <div className="container-lg" id="">  
               <div className="row">
                <div className="col-xs-6 col-lg-8 col-sm-4 col-md-8">
                  <div href={e.link1} className="float-left clearfix ml-0">
                    <a
                      href={e.link1}
                      className="skipContent"
                      aria-label="Skip to main content"
                    >
                      <span className="m-hide">{e.title1}</span>
                      <span className="icon-skip-to-main m-show"></span>
                    </a>
                  </div>
                  <div href={e.link2} className="float-left clearfix">
                    <a
                      href={e.link2}
                      className="skipContent"
                      aria-label="Skip to main content"
                    >
                      <span className="m-hide">{e.title2}</span>
                      <span className="icon-skip-to-main m-show"></span>
                    </a>
                  </div>
                </div>
         
            
                <div className="col-xs-6 col-lg-4  col-sm-8 col-md-4" id="socials" >
                  <div className="float-right icons" >
                    <ul className="socials">
                      <li>
                        {e.iconslink.map((f) => {
                          return (
                            <>
                            <div className="icon">
                              <a href={f.link1} > {f.description}
                                <i className={f.iconname1} style={{fontSize:"14px"}} ></i>
                              </a>
                              </div>
                            </>
                          );
                        })}
                       </li>
                     </ul>   
                    </div>

          
   {/*<div className="float-right icons" id="app">
          <ul className="socials" id="" >
           <FontSizeChanger
          targets={['#target .container']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
             
            up: <span style={{'fontSize': '15px'}}>
                <div className= "size"> A+</div>
                </span>,
            down: <span style={{'fontSize': '12px'}}> 
                  <div className= "size" > A-</div>
            </span>,
            style: {
              backgroundColor: 'white',
              color: 'black',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '25px',
              height: '25px'
            },
            buttonsMargin:4
          }}          
        />
          <div id="target">
        </div>
          </ul>
          </div>

*/} 
        <Fontsize/>
     {/*   <ThemeContext.Consumer >
 
 {({ changeTheme }) => (
  <ToggleDark
     
      ToggleDark={() => {
      setDarkMode(!darkMode);
      changeTheme(darkMode ? themes.light : themes.dark  );
    }}
  />
)}

</ThemeContext.Consumer>  */} 
       </div>

            
              
                  <div>
                <ul className="topbar navlinkdetails link " id="topbar">
                <li className="nav-item dropdown" id="">
                <a
                  className="nav-link "
                  href="navbarDropdown"
                  data-toggle="dropdown"
                  id="socialMedia"
                  aria-haspopup="false"
                  aria-expanded="true"
                  area-current="page"
                >
            {/*<img
               src="./images/socialicons.png"
               style={{width:"25px", height:"20px"}} />  */}
              
              <small 
              className="social_media"
              area-hidden = "true"
              >  
              <li>
                
              <span className="fa fa-facebook-f" id="facebook"></span>
              <span className="fa fa-twitter" id="twitter" ></span>
             <span className="fa fa-linkedin" id="linkedin"></span>
             <span className="fa fa-instagram" id="insta"></span>
             </li>
             </small>
          
              </a>
               <div className="dropdown-menu" 
                    aria-labelledby="navbarDropdown" 
                    id="menu"
                 >
                    <a
                    className="nav-link-dropdown1"
                    href="https://www.facebook.com/"
                    target="t_blank"
                  >
                   <img src="./images/ico-facebook.png"
                       style={{width:"22px", height:"20px"}}/>
                  </a>
                  <a
                    className="nav-link-dropdown1"
                    href="https://www.twitter.com/"
                    target="t_blank"
                  >
                 <img src="./images/ico-twitter.png"
                       style={{width:"22px", height:"20px"}}/>
                  </a>
                 
                  <a
                    className="nav-link-dropdown1"
                    href="https://www.linkedin.com/"
                    target="t_blank"
                  >
                   <img src="./images/ico-linkedin.png"
                       style={{width:"22px", height:"20px"}}/>
                  </a>
                       </div> 
                         </li>
                        </ul>  
                        </div>
                      </div>
                     </div>
                     </div>
                   </section>
                  </>
                );
             })}
          </div>
       </>
   );
 }

export default Nav;
