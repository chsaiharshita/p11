import React from "react";
import ReactDOM from "react-dom";
import "./home.css";
import data from "../../sitedata.json";
import  url from "../../sitedata.json";
import Newsapi from "./C143.js";
class Api extends React.Component {
  
 

    // Constructor
    constructor(props) {
      super(props);
      
  
      this.state = {
        items: [],
        DataisLoaded: false
      };
    }
  
    
      componentDidMount() {
          // Simple POST request with a JSON body using fetch
        
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ pname: 'p1c142' })
          };
          fetch(url, requestOptions)
          .then(response => response.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
      }
  
      render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return  <section className="updates">
        <div className="container">
          <div className="row"   >
          <div className=" col-lg-6 text-start text-white m-2 py-3">
           <div className=" "> 
           {data.Events.map((details) => {
            return (
             <>
             <div>
             <h3 className=" font-weight-bold text-left " id="h10">   
           <i className="fa fa-calendar-check-o" area-hidden="true" id="icon" />
              {details.ptitle}
             </h3>
             </div>
               {details.a.map((e) => {
                return (
                    <>
                      <div className="" id=""  >
                         <div className=" ">
                           <div className="card__picture2 p-1 text-left" id="tool2">
                             <div className="col-lg  " id="events">
                               <img
                                   src="./images/Events1.png"
                                   alt={e.imgalt}
                                   className="card__img2"
                                   />
                                   </div>
                                  <h6 className=" " id="covid4" >
                                 {e.aname}
                                <i/>
                               </h6>
                           </div>
                        </div>
                      </div>
                    </>
                  )})}
          
              {data.Updates.map((details) => {
                  return (  
                     <div className="button10">
                        <a
                          className="btn btn-danger btn-sm "
                             href={details.button_link}
                                >
                                  {details.button}
                                     </a>
                                     </div>
                                  )})}
                                </>
                             )})}
                           </div>
                        </div>  
                      <Newsapi />      
                  </div> 
               </div> 
            </section>
      return(
        <section className="updates" >
           <div className="container">
             <div className="row"  >
               <div className=" text-start text-red m-2 py-3">
                 <div className=""> 
                {items.map((details) => {
               return (
              <>
             <div>
             <h3 className=" font-weight-bold  text-left "  id="h10">   
           <i className="fa fa-calendar-check-o" area-hidden="true" id="icon" />
              {details.ptitle}
             </h3>
             </div>
               {details.a.map((e) => {
                return (
                    <>
                      <div className=" "  >
                         <div className="  ">
                           <div className="card__picture2 p-1 text-left" id="tool">
                               <div className=" " id="events">
                               <img
                                   src="./images/Events1.png"
                                   alt={e.imgalt}
                                   className=" card__img2"
                                   />
                                   </div>
                                   <h6 className="" id="covid3" >
                                        <a href="node152" >{e.aname}</a> 
                                         </h6>
                                        <i/>
                                      <p className=" " href={e.avalue} id="para3">
                                      {e.aname}
                                     </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )})}
              
              
              
              {data.Updates.map((details) => {
                  return (  
                     <div className="button10">
                       <a
                          className="btn btn-danger btn-sm "
                             href={details.button_link}
                                >
                                  {details.button}
                                    </a>
                                      </div>
                                  )})}
                            </>
                         )})}
                    </div>
               </div>  
               <Newsapi /> 
         </div> 
        
        </div> 
    </section>
      )  
    
    
    }
        }
export default Api;