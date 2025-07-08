import React from "react";
import ReactDOM from "react-dom";
import "./home.css";
import data from "../../sitedata.json";
import  url from "../../sitedata.json";


class Newsapi extends React.Component {
 

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
              body: JSON.stringify({ pname: 'p1c143' })
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
        if (!DataisLoaded) return  <section className="reward">
        <div className="" >
          <div className="row" id=""  >
          <div className="col-lg text-start text-white m-2 py-3" >
           <div className="  "> 
           {data.Reward.map((details) => {
            return (
             <>
             <div>
             <h3 className=" font-weight-bold text-left " id="h11"> 
              <i className="fa fa-trophy" area-hidden="true" id="icon" />
               <a >
                {details.ptitle}
               </a> 
              </h3>
             </div>
               {details.a.map((e) => {
                return (
                    <>
                      <div className=" " id=""  >
                         <div className="  ">
                           <div className="card__picture2 p-2 text-left" id="tool2">
                               <div className="col-lg-12  " id="events">
                               <img
                                   src="./images/images.jpg"
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
              
              
              {data.Rewards.map((details) => {
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
         </div> 
        </div> 
    </section>
      return(
        <section className="" >
          <div className=" text-start text-red m-2 py-3">
           <div className="  "> 
           {items.map((details) => {
            return (
             <>
             <div>
             <h3 className=" font-weight-bold text-red text-left " id="h11"> 
              <i className="fa fa-trophy" area-hidden="true" id="icon" />
               <a >
                {details.ptitle}
               </a> 
                 </h3>
               </div>
               {details.a.map((e) => {
                return (
                    <>
                           <div className="card__picture2 p-1 text-left" id="tool2">
                               <div className=" " id="events">
                               <img
                                   src="./images/images.jpg"
                                   alt={e.imgalt}
                                   className="card__img2"
                                   />
                                   </div>
                                  <h6 className=" " id="covid3" >
                                  <a href="node153" >{e.aname}</a>
                               </h6>
                               <p className=" " href={e.avalue} id="para3">
                                       {e.aname}
                                       </p>
                          </div>
                    </>
                  )})}
              
              
              {/* {data.Rewards.map((details) => { 
                  return (  
                     <div className="button10">
                       <a
                          className="btn btn-danger btn-sm "
                             href={details.button_link}
                                >
                              {details.button}
                                    </a>
                                      </div>
                                  )})} */}
                            </>
                         )})}
                    </div>
                </div>  
            </section>
          )  
        }
      }
export default Newsapi;